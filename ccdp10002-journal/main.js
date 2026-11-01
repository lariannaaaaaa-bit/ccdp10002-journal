/* ===========================================================================
   CCDP10002 — The Electronic Arts: Vision and Sound
   Interactive weekly journal: a galaxy of weeks, wired together by the
   inline link markup in data/weeks.js.

   Everything tunable lives in CONFIG at the top of this file.
   ========================================================================= */

(function () {
  'use strict';

  /* ----------------------------------------------------------------- CONFIG
     One object. Change colours, star sizes, line weight, physics and the
     timbre of the overtones here.                                          */
  const CONFIG = {

    // the four themes: colour, legend label, legend blurb
    themes: {
      vision: { color: '#7fb3ff', label: 'vision', blurb: 'image, screen, reproduction' },
      sound:  { color: '#ffb84d', label: 'sound',  blurb: 'acoustics, music, overtones' },
      space:  { color: '#b79cff', label: 'space',  blurb: 'architecture, virtual worlds' },
      nature: { color: '#6fd39b', label: 'nature', blurb: 'biomimicry, ecology, systems' },
      ideas:  { color: '#dce3ec', label: 'ideas',  blurb: 'paradigms, history, the self' }
    },

    star: {
      baseRadius: 4.2,        // radius of a week with no connections
      radiusPerLink: 1.9,     // extra radius per connection
      haloScale: 5.0,         // halo radius = star radius x this
      haloOpacity: 0.72,      // resting halo opacity (hover goes to 1)
      labelGap: 11            // px between star edge and its "W1" label
    },

    link: {
      width: 1.1,             // visible line weight
      opacity: 0.4,
      glowWidth: 5.5,         // soft wide line under the crisp one
      glowOpacity: 0.09,
      hitWidth: 16            // invisible click target
    },

    force: {
      linkDistance: 142,
      linkStrength: 0.35,
      charge: -460,           // many-body repulsion
      centering: 0.05,        // weak pull to the middle of the free area
      collidePad: 46,
      velocityDecay: 0.55,
      settleTicks: 300,       // ticks run before the first paint
      margin: 46              // keep stars this far from the edges
    },

    drift: {                  // the sky never quite stops moving
      amount: 0.016,
      speed: 0.16,
      alphaTarget: 0.012
    },

    audio: {
      fundamental: 110,       // f0 in Hz; week n plays n x f0
      waveform: 'sine',
      volume: 0.09,
      rolloff: 0.4,           // higher harmonics are quieter: volume * n^-rolloff
      attack: 0.06,
      release: 1.5,
      lowpass: 4200
    },

    starfield: {
      count: 280,
      parallax: 20,           // px of mouse parallax on the nearest layer
      twinkle: 0.45
    },

    zoom: { scale: 7.5, duration: 900 }
  };

  /* ------------------------------------------------------------- SHORTHANDS */
  const $ = function (sel, root) { return (root || document).querySelector(sel); };
  const WEEKS = (window.WEEKS || []).slice().sort(function (a, b) { return a.week - b.week; });
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function theme(w) { return CONFIG.themes[w.theme] || CONFIG.themes.ideas; }

  // the journal is organised by topic, not by week number
  function topicOf(w) { return w.short || w.title; }
  function colorOf(w) { return theme(w).color; }

  function fmtDate(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!m) return '';
    return Number(m[3]) + ' ' + MONTHS[Number(m[2]) - 1];
  }

  function ordinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function svgEl(name, attrs) {
    const node = document.createElementNS(SVG_NS, name);
    for (const k in attrs) node.setAttribute(k, attrs[k]);
    return node;
  }

  /* =====================================================================
     1. THE LINK MARKUP
     [highlighted phrase->W2|optional note]   (-> or → both work)
     ===================================================================== */
  const LINK_RE = /\[([^\[\]|]+?)\s*(?:→|->)\s*[Ww](\d+)\s*(?:\|\s*([^\[\]]*?)\s*)?\]/g;

  function parseBody(body) {
    const out = [];
    let last = 0;
    let m;
    LINK_RE.lastIndex = 0;
    while ((m = LINK_RE.exec(body)) !== null) {
      if (m.index > last) out.push({ type: 'text', value: body.slice(last, m.index) });
      out.push({
        type: 'link',
        phrase: m[1].trim(),
        target: Number(m[2]),
        note: (m[3] || '').trim()
      });
      last = m.index + m[0].length;
    }
    if (last < body.length) out.push({ type: 'text', value: body.slice(last) });
    return out;
  }

  /* =====================================================================
     2. THE GRAPH — every edge is generated, never hand-listed
     ===================================================================== */
  const graph = (function buildGraph() {
    const byWeek = {};
    const byId = {};
    const nodes = WEEKS.map(function (w) {
      const node = {
        id: w.id, week: w.week, data: w, degree: 0,
        phase: Math.random() * Math.PI * 2
      };
      byWeek[w.week] = node;
      byId[w.id] = node;
      return node;
    });

    const edgeMap = {};
    WEEKS.forEach(function (w) {
      parseBody(w.body).forEach(function (tok) {
        if (tok.type !== 'link') return;
        const other = byWeek[tok.target];
        if (!other || other.week === w.week) return;          // skip unknown / self links
        const a = Math.min(w.week, other.week);
        const b = Math.max(w.week, other.week);
        const key = a + '-' + b;
        if (!edgeMap[key]) edgeMap[key] = { a: a, b: b, notes: [] };
        if (tok.note) {
          const exists = edgeMap[key].notes.some(function (n) {
            return n.from === w.week && n.note === tok.note;
          });
          if (!exists) edgeMap[key].notes.push({ from: w.week, to: other.week, note: tok.note });
        }
      });
    });

    const links = Object.keys(edgeMap).sort().map(function (k) {
      const e = edgeMap[k];
      byWeek[e.a].degree++;
      byWeek[e.b].degree++;
      return { key: k, source: byWeek[e.a], target: byWeek[e.b], notes: e.notes };
    });

    nodes.forEach(function (n) {
      n.r = CONFIG.star.baseRadius + CONFIG.star.radiusPerLink * n.degree;
    });

    function edgesFor(week) {
      return links.filter(function (l) { return l.source.week === week || l.target.week === week; });
    }

    return { nodes: nodes, links: links, byWeek: byWeek, byId: byId, edgesFor: edgesFor };
  })();

  /* =====================================================================
     3. AUDIO — the overtone series, f0 = 110 Hz, week n = nth harmonic
     ===================================================================== */
  const audio = (function () {
    let ctx = null, master = null;
    let muted = false;
    try { muted = localStorage.getItem('ccdp-muted') === '1'; } catch (e) { /* ignore */ }

    function ensure() {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.95;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = CONFIG.audio.lowpass;
        master.connect(lp);
        lp.connect(ctx.destination);
      }
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    }

    return {
      isMuted: function () { return muted; },
      toggle: function () {
        muted = !muted;
        try { localStorage.setItem('ccdp-muted', muted ? '1' : '0'); } catch (e) { /* ignore */ }
        return muted;
      },
      // never called on load: only from a click
      play: function (harmonic) {
        if (muted || !harmonic) return;
        const c = ensure();
        if (!c) return;
        const A = CONFIG.audio;
        const t = c.currentTime;
        const osc = c.createOscillator();
        osc.type = A.waveform;
        osc.frequency.value = A.fundamental * harmonic;
        const g = c.createGain();
        const peak = A.volume * Math.pow(harmonic, -A.rolloff);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(peak, t + A.attack);
        g.gain.exponentialRampToValueAtTime(0.0001, t + A.attack + A.release);
        osc.connect(g);
        g.connect(master);
        osc.start(t);
        osc.stop(t + A.attack + A.release + 0.05);
      }
    };
  })();

  /* =====================================================================
     4. STARFIELD BACKGROUND
     ===================================================================== */
  (function starfield() {
    const cv = $('#starfield');
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, dpr = 1, stars = [];
    let mx = 0, my = 0, px = 0, py = 0;

    function build() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = w + 'px';
      cv.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = [];
      const n = Math.round(CONFIG.starfield.count * Math.min(1.6, (w * h) / (1440 * 900)));
      for (let i = 0; i < n; i++) {
        const depth = i % 3;                       // 0 far, 2 near
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.25 + depth * 0.32 + Math.random() * 0.5,
          base: 0.14 + depth * 0.12 + Math.random() * 0.32,
          depth: (depth + 1) / 3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 1.1
        });
      }
    }

    function draw(t) {
      px += (mx - px) * 0.06;
      py += (my - py) * 0.06;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const tw = reduceMotion ? 1 : 1 - CONFIG.starfield.twinkle * (0.5 + 0.5 * Math.sin(t * 0.001 * s.speed + s.phase));
        const ox = reduceMotion ? 0 : px * CONFIG.starfield.parallax * s.depth;
        const oy = reduceMotion ? 0 : py * CONFIG.starfield.parallax * s.depth;
        ctx.globalAlpha = Math.max(0.04, s.base * tw);
        ctx.beginPath();
        ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = '#eaf0ff';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop(t) { draw(t); requestAnimationFrame(loop); }

    build();
    if (reduceMotion) { draw(0); } else { requestAnimationFrame(loop); }

    window.addEventListener('resize', function () { build(); if (reduceMotion) draw(0); });
    if (!reduceMotion) {
      window.addEventListener('pointermove', function (e) {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      }, { passive: true });
    }
  })();

  /* =====================================================================
     5. GALAXY VIEW
     ===================================================================== */
  const galaxyEl = $('#galaxy');
  const weekEl = $('#week-view');
  const sky = $('#sky');
  const defs = $('#sky-defs');
  const camera = $('#camera');
  const linkLayer = $('#link-layer');
  const nodeLayer = $('#node-layer');
  const timelineLayer = $('#timeline-layer');
  const tip = $('#star-tip');
  const edgeCard = $('#edge-card');
  const phrasePop = $('#phrase-pop');
  const hint = $('#hint');

  let W = window.innerWidth, H = window.innerHeight;
  // the sky keeps clear of the masthead at the top and the hint + HUD at the bottom
  let bounds = { top: 90, bottom: 120 };
  let starGroups = {};   // id -> <g>
  let linkParts = [];    // { link, glow, line, hit, grad, g }
  let timelinePath = null;
  let tipNode = null;    // which star the tooltip is showing (also the mobile "first tap")

  /* theme colours into CSS, legend, gradients ----------------------------- */
  (function setupThemes() {
    const root = document.documentElement;
    const legend = $('#legend');
    Object.keys(CONFIG.themes).forEach(function (key) {
      const t = CONFIG.themes[key];
      root.style.setProperty('--c-' + key, t.color);

      const grad = svgEl('radialGradient', { id: 'halo-' + key });
      [[0, 0.55], [0.3, 0.22], [0.62, 0.06], [1, 0]].forEach(function (stop) {
        grad.appendChild(svgEl('stop', {
          offset: (stop[0] * 100) + '%', 'stop-color': t.color, 'stop-opacity': stop[1]
        }));
      });
      defs.appendChild(grad);

      const li = document.createElement('li');
      li.innerHTML = '<span class="dot" style="color:' + t.color + '"></span>' +
        '<span>' + t.label + '</span><span class="blurb">' + t.blurb + '</span>';
      legend.appendChild(li);
    });
  })();

  /* build the links ------------------------------------------------------- */
  graph.links.forEach(function (l) {
    const g = svgEl('g', { class: 'link-g' });
    const gradId = 'lg-' + l.key;
    const grad = svgEl('linearGradient', { id: gradId, gradientUnits: 'userSpaceOnUse' });
    grad.appendChild(svgEl('stop', { offset: '0%', 'stop-color': colorOf(l.source.data) }));
    grad.appendChild(svgEl('stop', { offset: '100%', 'stop-color': colorOf(l.target.data) }));
    defs.appendChild(grad);

    const glow = svgEl('line', {
      class: 'link-line soft', stroke: 'url(#' + gradId + ')',
      'stroke-width': CONFIG.link.glowWidth, 'stroke-linecap': 'round',
      opacity: CONFIG.link.glowOpacity
    });
    const line = svgEl('line', {
      class: 'link-line crisp', stroke: 'url(#' + gradId + ')',
      'stroke-width': CONFIG.link.width, 'stroke-linecap': 'round',
      opacity: CONFIG.link.opacity
    });
    const hit = svgEl('line', {
      class: 'link-hit', 'stroke-width': CONFIG.link.hitWidth, 'stroke-linecap': 'round'
    });
    hit.setAttribute('tabindex', '0');
    hit.setAttribute('role', 'button');
    hit.setAttribute('aria-label',
      'Connection between ' + topicOf(l.source.data) + ' and ' + topicOf(l.target.data));

    g.appendChild(glow);
    g.appendChild(line);
    g.appendChild(hit);
    linkLayer.appendChild(g);
    linkParts.push({ link: l, glow: glow, line: line, hit: hit, grad: grad, g: g });

    function open(ev) { ev.stopPropagation(); showEdgeCard(l, ev); }
    hit.addEventListener('click', open);
    hit.addEventListener('pointerenter', function () { g.classList.add('is-hover'); });
    hit.addEventListener('pointerleave', function () { g.classList.remove('is-hover'); });
    hit.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(ev); }
    });
  });

  /* the chronological timeline path -------------------------------------- */
  timelinePath = svgEl('path', { class: 'timeline-path' });
  timelineLayer.appendChild(timelinePath);

  /* build the stars ------------------------------------------------------- */
  graph.nodes.forEach(function (n) {
    const c = colorOf(n.data);
    const g = svgEl('g', { class: 'star', 'data-id': n.id });
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'link');
    g.setAttribute('aria-label', n.data.title + ' — ' + theme(n.data).label + ', ' +
      n.degree + ' connection' + (n.degree === 1 ? '' : 's'));

    g.appendChild(svgEl('circle', {
      class: 'halo', r: n.r * CONFIG.star.haloScale,
      fill: 'url(#halo-' + (CONFIG.themes[n.data.theme] ? n.data.theme : 'ideas') + ')',
      opacity: CONFIG.star.haloOpacity
    }));
    g.appendChild(svgEl('circle', { class: 'core', r: n.r, fill: c, 'fill-opacity': 0.95 }));
    g.appendChild(svgEl('circle', { class: 'pip', r: Math.max(0.9, n.r * 0.3), 'fill-opacity': 0.9 }));

    const label = svgEl('text', { class: 'wlabel', y: n.r + CONFIG.star.labelGap + 3 });
    label.textContent = topicOf(n.data);
    g.appendChild(label);

    g.appendChild(svgEl('circle', { class: 'hit', r: Math.max(20, n.r * 2.4) }));

    nodeLayer.appendChild(g);
    starGroups[n.id] = g;

    g.addEventListener('pointerenter', function () { if (!isTouch) showTip(n); });
    g.addEventListener('pointerleave', function () { if (!isTouch) hideTip(); });
    g.addEventListener('focus', function () { showTip(n); });
    g.addEventListener('blur', function () { hideTip(); });
    g.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); activateStar(n); }
    });
  });

  // innerWidth/innerHeight read as 0 while the page is in a hidden pane or an
  // un-laid-out iframe. Laying the sky out against a zero viewport jams every
  // star onto the margin, so fall back and re-sync once real numbers arrive.
  function syncViewport(force) {
    const w = window.innerWidth || document.documentElement.clientWidth || 1200;
    const h = window.innerHeight || document.documentElement.clientHeight || 800;
    if (!force && w === W && h === H) return false;
    W = w; H = h;
    measureBounds();
    applyCentering();
    return true;
  }

  function measureBounds() {
    // every rect is zero while the galaxy is hidden, which would collapse the
    // sky into a line — keep whatever we measured last time instead
    if (galaxyEl.hidden || !galaxyEl.offsetWidth || !H) return;

    const mast = galaxyEl.querySelector('.masthead');
    const hudEl = galaxyEl.querySelector('.hud');
    let top = 80;
    if (mast) top = mast.getBoundingClientRect().bottom + 26;
    let floor = H;
    if (hudEl) floor = Math.min(floor, hudEl.getBoundingClientRect().top);
    if (hint) floor = Math.min(floor, hint.getBoundingClientRect().top);
    let bottom = Math.max(56, H - floor + 22);

    if (H - top - bottom < 160) { top = Math.min(top, 70); bottom = Math.min(bottom, 70); }
    bounds = { top: top, bottom: bottom };
  }

  function centreY() { return (bounds.top + (H - bounds.bottom)) / 2; }

  function applyCentering() {
    sim.force('x', d3.forceX(W / 2).strength(CONFIG.force.centering));
    sim.force('y', d3.forceY(centreY()).strength(CONFIG.force.centering));
  }

  /* ------------------------------------------------------------- the forces */
  let settling = true;   // the 300-tick settle runs in ~0ms of wall clock, so the
                         // drift's sine would be a constant push and translate the
                         // whole cluster off centre. Disable it until the sky is live.
  function driftForce() {
    let nodes;
    function force() {
      if (reduceMotion || settling) return;
      const t = performance.now() / 1000;
      const a = CONFIG.drift.amount, s = CONFIG.drift.speed;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.fx != null) continue;
        n.vx += Math.sin(t * s + n.phase) * a;
        n.vy += Math.cos(t * s * 0.83 + n.phase * 1.7) * a;
      }
    }
    force.initialize = function (_) { nodes = _; };
    return force;
  }

  const sim = d3.forceSimulation(graph.nodes)
    .velocityDecay(CONFIG.force.velocityDecay)
    .force('link', d3.forceLink(graph.links)
      .id(function (d) { return d.id; })
      .distance(CONFIG.force.linkDistance)
      .strength(CONFIG.force.linkStrength))
    .force('charge', d3.forceManyBody().strength(CONFIG.force.charge))
    .force('collide', d3.forceCollide(function (d) { return d.r + CONFIG.force.collidePad; }))
    .force('x', d3.forceX(function () { return W / 2; }).strength(CONFIG.force.centering))
    .force('y', d3.forceY(function () { return H / 2; }).strength(CONFIG.force.centering))
    .force('drift', driftForce())
    .on('tick', tick);

  // seed on a ring so the settle is tidy, then settle off-screen before painting
  syncViewport(true);
  graph.nodes.forEach(function (n, i) {
    const a = (i / graph.nodes.length) * Math.PI * 2;
    const spread = Math.min(W, H - bounds.top - bounds.bottom) * 0.3;
    n.x = W / 2 + Math.cos(a) * spread;
    n.y = centreY() + Math.sin(a) * spread;
  });
  sim.stop();
  for (let i = 0; i < CONFIG.force.settleTicks; i++) sim.tick();
  settling = false;
  tick();
  sim.alphaTarget(reduceMotion ? 0 : CONFIG.drift.alphaTarget).restart();
  if (reduceMotion) sim.stop();

  function tick() {
    const m = CONFIG.force.margin;
    const minY = bounds.top + m * 0.35;
    const maxY = Math.max(minY + 1, H - bounds.bottom - m * 0.35);
    graph.nodes.forEach(function (n) {
      n.x = Math.max(m, Math.min(W - m, n.x));
      n.y = Math.max(minY, Math.min(maxY, n.y));
      const g = starGroups[n.id];
      if (g) g.setAttribute('transform', 'translate(' + n.x.toFixed(2) + ',' + n.y.toFixed(2) + ')');
    });

    linkParts.forEach(function (p) {
      const s = p.link.source, t = p.link.target;
      [p.glow, p.line, p.hit].forEach(function (el) {
        el.setAttribute('x1', s.x.toFixed(2)); el.setAttribute('y1', s.y.toFixed(2));
        el.setAttribute('x2', t.x.toFixed(2)); el.setAttribute('y2', t.y.toFixed(2));
      });
      p.grad.setAttribute('x1', s.x.toFixed(2)); p.grad.setAttribute('y1', s.y.toFixed(2));
      p.grad.setAttribute('x2', t.x.toFixed(2)); p.grad.setAttribute('y2', t.y.toFixed(2));
    });

    if (timelineLayer.classList.contains('on')) {
      timelinePath.setAttribute('d', graph.nodes.map(function (n, i) {
        return (i ? 'L' : 'M') + n.x.toFixed(1) + ' ' + n.y.toFixed(1);
      }).join(' '));
    }

    if (tipNode) placeTip(tipNode);
  }

  /* --------------------------------------------------------------- dragging */
  let dragged = false;
  d3.selectAll('#node-layer .star').data(graph.nodes).call(
    d3.drag()
      .container(function () { return sky; })
      .subject(function (ev, d) { return d; })
      .on('start', function (ev, d) {
        dragged = false;
        sim.alphaTarget(0.26).restart();
        d.fx = d.x; d.fy = d.y;
        hideCards();
      })
      .on('drag', function (ev, d) {
        if (Math.abs(ev.dx) > 0.5 || Math.abs(ev.dy) > 0.5) dragged = true;
        d.fx = ev.x; d.fy = ev.y;
      })
      .on('end', function (ev, d) {
        d.fx = null; d.fy = null;
        sim.alphaTarget(reduceMotion ? 0 : CONFIG.drift.alphaTarget);
        if (!dragged) activateStar(d);          // a click, not a drag
      })
  );

  /* -------------------------------------------------------------- tooltips */
  function showTip(n) {
    tipNode = n;
    tip.innerHTML = '<span class="mono">' + theme(n.data).label + ' &middot; ' +
      fmtDate(n.data.date) + '</span>' + escapeHTML(n.data.title);
    tip.hidden = false;
    placeTip(n);
  }
  function placeTip(n) {
    tip.style.left = n.x + 'px';
    tip.style.top = (n.y - n.r - CONFIG.star.labelGap - 6) + 'px';
  }
  function hideTip() { tipNode = null; tip.hidden = true; }

  /* ------------------------------------------------ click / tap on a star */
  function activateStar(n) {
    audio.play(n.week);
    if (hint) hint.classList.add('gone');

    // on touch, the first tap reveals the title; the second opens the week
    if (isTouch && tipNode !== n) { showTip(n); return; }

    hideCards();
    hideTip();
    pendingZoom = n;
    location.hash = n.id;
  }

  /* ------------------------------------------------------ connection card */
  function showEdgeCard(l, ev) {
    const a = l.source.data, b = l.target.data;
    let html = '<button type="button" class="card-close" aria-label="Close">&times;</button>' +
      '<h4>' + escapeHTML(topicOf(a)) + ' &harr; ' + escapeHTML(topicOf(b)) + '</h4>';
    if (l.notes.length) {
      html += '<ul>' + l.notes.map(function (n) {
        return '<li>' + escapeHTML(n.note) + '</li>';
      }).join('') + '</ul>';
    } else {
      html += '<p style="color:var(--ink-dim)">Linked, with no note written yet.</p>';
    }
    html += '<div class="card-actions">' +
      '<button type="button" class="ctrl" data-go="' + a.id + '">' + escapeHTML(topicOf(a)) + '</button>' +
      '<button type="button" class="ctrl" data-go="' + b.id + '">' + escapeHTML(topicOf(b)) + '</button>' +
      '</div>';
    edgeCard.innerHTML = html;
    edgeCard.hidden = false;
    placeCard(edgeCard, ev.clientX || W / 2, (ev.clientY || H / 2) + 14);
    linkParts.forEach(function (p) { p.g.classList.toggle('is-active', p.link === l); });

    edgeCard.querySelector('.card-close').onclick = hideCards;
    Array.prototype.forEach.call(edgeCard.querySelectorAll('[data-go]'), function (btn) {
      btn.onclick = function () {
        const node = graph.byId[btn.getAttribute('data-go')];
        hideCards();
        if (node) { audio.play(node.week); pendingZoom = node; location.hash = node.id; }
      };
    });
  }

  function placeCard(card, x, y) {
    card.style.left = '0px';
    card.style.top = '0px';
    const w = card.offsetWidth, h = card.offsetHeight;
    const left = Math.max(12, Math.min(window.innerWidth - w - 12, x - w / 2));
    const top = Math.max(12, Math.min(window.innerHeight - h - 12, y));
    card.style.left = left + 'px';
    card.style.top = top + 'px';
  }

  function hideCards() {
    edgeCard.hidden = true;
    phrasePop.hidden = true;
    linkParts.forEach(function (p) { p.g.classList.remove('is-active'); });
    const open = document.querySelector('.phrase.is-open');
    if (open) open.classList.remove('is-open');
  }

  sky.addEventListener('click', function (ev) {
    if (ev.target === sky || ev.target === camera) { hideCards(); if (isTouch) hideTip(); }
  });

  /* --------------------------------------------------------- HUD controls */
  const timelineBtn = $('#toggle-timeline');
  timelineBtn.addEventListener('click', function () {
    const on = !timelineLayer.classList.contains('on');
    timelineLayer.classList.toggle('on', on);
    timelineBtn.setAttribute('aria-pressed', String(on));
    timelineBtn.textContent = on ? 'Hide timeline' : 'Show timeline';
    tick();
  });

  const soundBtn = $('#toggle-sound');
  function syncSoundBtn() {
    soundBtn.textContent = audio.isMuted() ? 'Sound: off' : 'Sound: on';
    soundBtn.setAttribute('aria-pressed', String(audio.isMuted()));
  }
  soundBtn.addEventListener('click', function () { audio.toggle(); syncSoundBtn(); });
  syncSoundBtn();

  /* ---------------------------------------------------------------- resize */
  window.addEventListener('resize', function () {
    if (!syncViewport()) return;
    sim.alpha(0.3).restart();
    if (reduceMotion) { sim.tick(); tick(); sim.stop(); }
  });

  /* =====================================================================
     6. CAMERA + VIEW TRANSITIONS
     ===================================================================== */
  function easeInOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }

  function animate(dur, step, done) {
    if (reduceMotion) { step(1); if (done) done(); return; }
    const t0 = performance.now();
    (function frame(now) {
      const p = clamp01((now - t0) / dur);
      step(easeInOut(p));
      if (p < 1) requestAnimationFrame(frame); else if (done) done();
    })(t0);
  }

  function setCamera(u, node) {
    if (!node || u <= 0) { camera.removeAttribute('transform'); return; }
    const S = CONFIG.zoom.scale;
    const s = 1 + (S - 1) * u;
    const tx = u * (W / 2 - s * node.x);
    const ty = u * (H / 2 - s * node.y);
    camera.setAttribute('transform', 'translate(' + tx + ',' + ty + ') scale(' + s + ')');
  }

  function setFocus(u, keepId) {
    const dim = 1 - u;
    graph.nodes.forEach(function (n) {
      const g = starGroups[n.id];
      g.style.opacity = n.id === keepId ? '1' : String(dim);
      g.classList.toggle('is-active', n.id === keepId && u > 0.05);
    });
    linkParts.forEach(function (p) { p.g.style.opacity = String(dim); });
    timelineLayer.style.opacity = String(dim);
    ['.masthead', '.hud', '.hint'].forEach(function (sel) {
      const el = $(sel, galaxyEl);
      if (el) el.style.opacity = String(dim);
    });
  }

  function galaxyFade(u) {
    galaxyEl.style.opacity = String(1 - clamp01((u - 0.45) / 0.55));
  }

  function fadeInWeek() {
    weekEl.hidden = false;
    weekEl.style.opacity = reduceMotion ? '1' : '0';
    weekEl.style.transition = 'opacity 420ms var(--ease, ease)';
    requestAnimationFrame(function () { weekEl.style.opacity = '1'; });
    window.scrollTo(0, 0);
  }

  /* =====================================================================
     7. ROUTING
     ===================================================================== */
  let currentWeek = null;   // the week object on screen, or null for the galaxy
  let pendingZoom = null;   // star that was clicked, so we know to animate

  function weekById(id) {
    for (let i = 0; i < WEEKS.length; i++) if (WEEKS[i].id === id) return WEEKS[i];
    return null;
  }

  function onHashChange() {
    const id = (location.hash || '').replace(/^#/, '');
    const wk = weekById(id);
    if (wk) openWeek(wk); else closeWeek();
  }

  function openWeek(wk) {
    const wasGalaxy = !currentWeek;
    const sameAgain = currentWeek && currentWeek.id === wk.id;
    currentWeek = wk;
    renderWeek(wk);
    document.body.classList.remove('galaxy-locked');
    document.title = wk.title + ' · CCDP10002';

    if (!wasGalaxy) {                        // week -> week
      if (!sameAgain) fadeInWeek();
      pendingZoom = null;
      return;
    }

    const node = pendingZoom && pendingZoom.id === wk.id ? pendingZoom : null;
    pendingZoom = null;
    hideTip(); hideCards();

    if (node) {
      galaxyEl.classList.add('fading');
      animate(CONFIG.zoom.duration, function (u) {
        setCamera(u, node); setFocus(u, node.id); galaxyFade(u);
      }, function () {
        galaxyEl.hidden = true;
        galaxyEl.classList.remove('fading');
        galaxyEl.style.opacity = '';
        setCamera(0, null); setFocus(0, null);
        sim.stop();
        fadeInWeek();
      });
    } else {
      galaxyEl.hidden = true;
      setCamera(0, null); setFocus(0, null);
      sim.stop();
      fadeInWeek();
    }
  }

  function closeWeek() {
    const leaving = currentWeek;
    currentWeek = null;
    document.title = 'CCDP10002 — The Electronic Arts: Vision and Sound';
    document.body.classList.add('galaxy-locked');
    hideCards();

    const node = leaving ? graph.byId[leaving.id] : null;

    if (!leaving || !node) {                 // cold load on the galaxy
      galaxyEl.hidden = false;
      weekEl.hidden = true;
      window.scrollTo(0, 0);
      syncViewport(true);
      setCamera(0, null); setFocus(0, null);
      return;
    }

    weekEl.style.opacity = '0';
    galaxyEl.hidden = false;
    window.scrollTo(0, 0);
    syncViewport(true);
    galaxyEl.classList.add('fading');
    sim.alphaTarget(reduceMotion ? 0 : CONFIG.drift.alphaTarget).restart();

    animate(CONFIG.zoom.duration, function (p) {
      const u = 1 - p;
      setCamera(u, node); setFocus(u, node.id); galaxyFade(u);
    }, function () {
      weekEl.hidden = true;
      weekEl.style.opacity = '';
      galaxyEl.classList.remove('fading');
      galaxyEl.style.opacity = '';
      setCamera(0, null); setFocus(0, null);
    });
  }

  function goTo(id) {
    hideCards();
    const node = graph.byId[id];
    if (node) audio.play(node.week);
    if (currentWeek) { location.hash = id; }
    else { pendingZoom = node; location.hash = id; }
  }

  window.addEventListener('hashchange', onHashChange);

  /* =====================================================================
     8. WEEK PAGE
     ===================================================================== */
  const weekDot = $('#week-dot');
  const weekMetaText = $('#week-meta-text');
  const weekTitle = $('#week-title');
  const weekBadge = $('#week-placeholder');
  const collage = $('#week-collage');
  const captions = $('#week-captions');
  const bodyEl = $('#week-body');
  const chips = $('#week-chips');
  const replayBtn = $('#replay-tone');
  const prevBtn = $('#prev-week');
  const nextBtn = $('#next-week');

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderWeek(wk) {
    const t = theme(wk);

    weekDot.style.color = t.color;
    weekMetaText.textContent = String(wk.week).padStart(2, '0') + ' · ' + t.label +
      ' · ' + fmtDate(wk.date);
    weekTitle.textContent = wk.title;
    weekBadge.hidden = !wk.placeholder;

    replayBtn.textContent = '↻ ' + ordinal(wk.week) + ' harmonic';
    replayBtn.title = 'Play ' + (CONFIG.audio.fundamental * wk.week) + ' Hz';
    replayBtn.onclick = function () { audio.play(wk.week); };

    /* photos: one large + two small, adapting down to one */
    const photos = wk.photos || [];
    collage.className = 'collage n' + Math.min(3, photos.length || 0);
    collage.innerHTML = '';
    captions.innerHTML = '';
    photos.slice(0, 3).forEach(function (p, i) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'shot';
      btn.setAttribute('aria-label', 'Enlarge image ' + (i + 1));
      const img = document.createElement('img');
      img.src = p.src;
      img.alt = p.caption || ('Week ' + wk.week + ' image ' + (i + 1));
      img.loading = 'lazy';
      btn.appendChild(img);
      btn.onclick = function () { openLightbox(p); };
      collage.appendChild(btn);

      const cap = document.createElement('span');
      cap.innerHTML = '<b>' + (i + 1) + '</b> ' + escapeHTML(p.caption || '');
      captions.appendChild(cap);
    });
    collage.hidden = photos.length === 0;

    /* body with highlighted phrases */
    bodyEl.innerHTML = '';
    const p = document.createElement('p');
    parseBody(wk.body).forEach(function (tok) {
      if (tok.type === 'text') { p.appendChild(document.createTextNode(tok.value)); return; }
      const target = graph.byWeek[tok.target];
      const color = target ? colorOf(target.data) : 'var(--ink-dim)';
      const btn = document.createElement('span');
      btn.className = 'phrase';
      btn.setAttribute('role', 'button');
      btn.setAttribute('tabindex', '0');
      btn.style.setProperty('--phrase-color', color);
      btn.setAttribute('data-wk', '↗');
      btn.setAttribute('aria-label', tok.phrase + ' — connects to ' +
        (target ? topicOf(target.data) : 'week ' + tok.target));
      btn.textContent = tok.phrase;
      btn.onclick = function (ev) { ev.stopPropagation(); showPhrasePop(btn, tok); };
      btn.onkeydown = function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault(); ev.stopPropagation(); showPhrasePop(btn, tok);
        }
      };
      p.appendChild(btn);
    });
    bodyEl.appendChild(p);

    /* connected stars, both directions, generated from the graph */
    chips.innerHTML = '';
    const edges = graph.edgesFor(wk.week);
    edges.map(function (l) {
      return l.source.week === wk.week ? l.target : l.source;
    }).sort(function (a, b) { return a.week - b.week; }).forEach(function (node) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.innerHTML = '<span class="dot" style="color:' + colorOf(node.data) + '"></span>' +
        '<span>' + escapeHTML(node.data.title) + '</span>';
      btn.onclick = function () { goTo(node.id); };
      li.appendChild(btn);
      chips.appendChild(li);
    });
    if (!edges.length) {
      chips.innerHTML = '<li class="mono" style="color:var(--ink-faint);text-transform:none">' +
        'No connections yet — add a link in the text to wire this week in.</li>';
    }

    /* prev / next */
    const idx = WEEKS.indexOf(wk);
    setNav(prevBtn, WEEKS[idx - 1], '← ');
    setNav(nextBtn, WEEKS[idx + 1], '', ' →');
  }

  function setNav(btn, wk, pre, post) {
    if (!wk) {
      btn.disabled = true;
      btn.hidden = true;
      btn.textContent = '';
      btn.onclick = null;
      return;
    }
    btn.hidden = false;
    btn.disabled = false;
    btn.textContent = (pre || '') + wk.title + (post || '');
    btn.onclick = function () { goTo(wk.id); };
  }

  function showPhrasePop(btn, tok) {
    hideCards();
    btn.classList.add('is-open');
    const target = graph.byWeek[tok.target];
    const title = target ? target.data.title : 'Week ' + tok.target + ' (not in data/weeks.js yet)';
    const topic = target ? topicOf(target.data) : 'week ' + tok.target;
    const color = target ? colorOf(target.data) : 'var(--ink-dim)';
    phrasePop.innerHTML =
      '<button type="button" class="card-close" aria-label="Close">&times;</button>' +
      '<h4><span class="dot" style="color:' + color + '"></span> ' + escapeHTML(topic) + '</h4>' +
      '<p style="font-size:1.02rem">' + escapeHTML(title) + '</p>' +
      (tok.note ? '<p style="color:var(--ink-dim)">' + escapeHTML(tok.note) + '</p>' : '') +
      (target ? '<div class="card-actions"><button type="button" class="ctrl" data-go="' +
        target.id + '">Go to ' + escapeHTML(topic) + ' →</button></div>' : '');
    phrasePop.hidden = false;
    const r = btn.getBoundingClientRect();
    placeCard(phrasePop, r.left + r.width / 2, r.bottom + 10);
    phrasePop.querySelector('.card-close').onclick = hideCards;
    const go = phrasePop.querySelector('[data-go]');
    if (go) go.onclick = function () { goTo(go.getAttribute('data-go')); };
  }

  document.addEventListener('click', function (ev) {
    if (phrasePop.hidden && edgeCard.hidden) return;
    if (phrasePop.contains(ev.target) || edgeCard.contains(ev.target)) return;
    if (ev.target.closest && ev.target.closest('.phrase, .link-hit')) return;
    hideCards();
  });

  $('#back-to-galaxy').addEventListener('click', function () { location.hash = ''; });

  /* ----------------------------------------------------------- lightbox */
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightbox-img');
  const lightboxCap = $('#lightbox-caption');

  function openLightbox(p) {
    lightboxImg.src = p.src;
    lightboxImg.alt = p.caption || '';
    lightboxCap.textContent = p.caption || '';
    lightbox.hidden = false;
  }
  function closeLightbox() { lightbox.hidden = true; lightboxImg.src = ''; }
  $('#lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (ev) { if (ev.target === lightbox) closeLightbox(); });

  /* ---------------------------------------------------------------- keys */
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    if (!lightbox.hidden) { closeLightbox(); return; }
    if (!phrasePop.hidden || !edgeCard.hidden) { hideCards(); return; }
    if (currentWeek) location.hash = '';
  });

  // the pane may still be hidden at load; re-check until the numbers are real
  [60, 250, 800, 2000].forEach(function (ms) {
    setTimeout(function () {
      if (syncViewport() && !currentWeek) sim.alpha(0.5).restart();
    }, ms);
  });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && syncViewport() && !currentWeek) sim.alpha(0.4).restart();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      measureBounds();
      applyCentering();
      if (!currentWeek) sim.alpha(0.25).restart();
    });
  }

  /* =====================================================================
     9. GO
     ===================================================================== */
  onHashChange();
})();
