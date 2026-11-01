# CCDP10002 — The Electronic Arts: Vision and Sound

Twelve weeks, five themes, and every connection line drawn from the writing itself.

An interactive weekly journal. The home page is a **galaxy**: every week is a star,
every star is sized by how many connections it has, and every connection line is
**generated from the writing itself** — there is no separate list of edges to maintain.
The point of the journal is connection, so the connections are the navigation.

Plain static site. No build step, no dependencies to install, no server required.

```
index.html        the two views (galaxy + week page)
style.css         all styling; theme colours are injected from main.js
main.js           link-markup parser, graph builder, force layout, audio, routing
data/weeks.js     >>> the only file you normally edit <<<
images/           photos, one set per week
```

Open it by double-clicking `index.html`. D3 and the Google fonts come from a CDN,
so the first load needs an internet connection.

---

## 1. Adding or editing a week

Everything lives in [`data/weeks.js`](data/weeks.js) as `window.WEEKS`. One entry per week:

```js
{
  id:     "w9",                 // "w" + the week number, must be unique
  week:   9,                    // integer; also decides which harmonic plays
  title:  "Foley and the fake real (ACMI visit)",
  theme:  "sound",              // vision | sound | space | nature | ideas
  date:   "2026-10-31",         // ISO; used for the label and timeline order
  placeholder: true,            // optional; shows a "placeholder content" badge
  photos: [
    { src: "images/w9-1.jpg", caption: "The Foley pit, props laid out." }
  ],
  body:   "One free-writing paragraph with inline link markup..."
}
```

- The array can be in any order — it is sorted by `week` at load.
- Weeks can be added or removed freely; the star map re-grows on the next reload.
- `placeholder: true` shows a small "placeholder content" badge on the week page.
  None of the twelve weeks currently use it.

## 2. The link markup (this is what draws the map)

Inside `body`, wrap a phrase and point it at another week:

```
[highlighted phrase->W2|one line on why they connect]
[highlighted phrase→W2|one line on why they connect]
```

- Both `->` and `→` work. `W2` / `w2` both work.
- The note after `|` is optional but worth writing — it is what appears when someone
  clicks the phrase, and when someone clicks the connection line in the galaxy.
- The phrase itself cannot contain `[`, `]` or `|`.

What happens automatically from that one piece of markup:

| | |
|---|---|
| in the paragraph | the phrase is underlined in the **target** week's theme colour, with a small `W2` marker, and opens a popover with the note and a "Go to Week 2" button |
| in the galaxy | a connection line is drawn between the two stars, glowing in a blend of their two colours |
| star size | both stars grow, because size follows connection count |
| layout | well-connected weeks are pulled towards the centre; unconnected weeks drift to the edge |
| "Connected stars" | chips are listed at the bottom of **both** week pages — connections are undirected |

Links are de-duplicated. If Week 9 links to Week 10 *and* Week 10 links back to Week 9,
that is **one** line with **both** notes merged onto it. A link to a week that does not
exist in the data is ignored in the galaxy (the phrase still renders, and says so).

## 3. Photos

Put them in `images/` and point `src` at them with a relative path, e.g. `images/w9-1.jpg`.

- Up to **3 photos** per week are shown as a collage (one large + two small). The layout
  adapts automatically to 2 or 1, and a week with no photos simply has none.
- Any extra photos beyond the first three are ignored, so you can keep them in the array.
- **Compress to under ~500 KB each**, max ~1600 px on the long edge. The whole site gets
  downloaded by whoever opens it, and a page of 4 MB photos feels broken on phone data.
  On a Mac, this does it in place for a folder of JPEGs:

  ```bash
  cd images && sips -Z 1600 *.jpg && ls -lhS *.jpg | head
  ```

- Always write a `caption`. It is used as the image's alt text, printed under the
  collage, and shown in the lightbox.
- Photos are already compressed to 1600px / under 500 KB each by:

  ```bash
  sips -s format jpeg -s formatOptions 68 -Z 1600 SOURCE.JPG --out images/w9-1.jpg
  ```

- EXIF rotation is respected by the browser, so portrait phone photos display upright
  without re-encoding.

## 4. Tuning the look and feel

Open `main.js`; the `CONFIG` object at the very top is the whole control panel:

| key | what it does |
|---|---|
| `themes` | the five theme colours, labels and legend blurbs (also fed to CSS as `--c-vision` etc.) |
| `star` | base radius, growth per connection, halo size and brightness |
| `link` | line weight, opacity, the soft glow underneath, click-target width |
| `force` | link distance and strength, repulsion, centring, collision padding, edge margin |
| `drift` | how much the settled sky keeps breathing |
| `audio` | fundamental (110 Hz), waveform, volume, high-harmonic rolloff, attack/release, lowpass |
| `zoom` | how far the camera flies into a star, and how long it takes |

## 5. The sound

The Web Audio API, no files. `f0 = 110 Hz`, and **week *n* plays the *n*th harmonic**
(`n × 110 Hz`) as a soft sine with a gentle attack and a ~1.5 s release. Clicking the
stars in order climbs the overtone series — the deliberate reference to the Week 4
material on overtones and the origins of Chinese music.

- Never autoplays. A tone only ever plays from a click: a star in the galaxy, a chip, or
  the "*n*th harmonic" button in the top-right of a week page.
- The mute toggle sits bottom-right of the galaxy and is remembered in `localStorage`.
- High harmonics are attenuated (`volume × n^-rolloff`) so Week 10 does not shriek.

## 6. Everything else you can do on the page

- **Drag** a star — connected stars follow, then the whole sky eases back.
- **Hover** a star for its title; on a phone the **first tap** shows the title and the
  **second tap** opens the week.
- **Click a connection line** for a card with the connection notes and a jump to either week.
- **Show timeline** draws a faint dashed path through the weeks in chronological order.
- **Esc** closes a lightbox, then a card, then the week page.
- `prefers-reduced-motion` turns off the drift, the twinkle, the parallax and the zoom
  animation — navigation becomes instant cuts.

Every week has a shareable URL via hash routing: `index.html#w9`. The browser back and
forward buttons work, and arriving directly on `#w9` skips the zoom animation.

## 7. Deploying to GitHub Pages

All paths are relative, so there is nothing to change.

```bash
cd ccdp10002-journal
git init
git add .
git commit -m "Weekly journal"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
branch `main`, folder `/ (root)`, and Save. A minute later the site is at
`https://<your-username>.github.io/<repo>/`.

Notes:
- No Jekyll processing is needed, but adding an empty `.nojekyll` file at the root avoids
  surprises if you ever add a folder starting with an underscore.
- To update the journal afterwards: edit `data/weeks.js`, add the photos, then
  `git add . && git commit -m "Week 11" && git push`.
