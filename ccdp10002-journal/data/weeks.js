/* ---------------------------------------------------------------------------
   data/weeks.js — CCDP10002 weekly journal

   INLINE LINK MARKUP — this is what draws the star map:
     [highlighted phrase->W2|one line on why they connect]
     [highlighted phrase→W2|one line on why they connect]
   Both "->" and "→" work; the note after "|" is optional but worth writing.
   Every connection line in the galaxy is generated from this markup.
--------------------------------------------------------------------------- */

window.WEEKS = [
  {
    id: "w1",
    week: 1,
    title: "Redefinitions: why a subject like this exists",
    short: "Redefinitions",
    theme: "ideas",
    date: "2026-07-31",
    photos: [],
    body: "The subject opened by refusing to define itself, which annoyed me for about an hour and then stopped annoying me. The method was announced straight away: before we study anything we re-define it, because the definitions we arrive with are inherited rather than chosen. What is art, what is technology, what is perception, what is sound — each one turns out to be a question with a history rather than a word with a meaning. I came in expecting a survey of electronic art and got something closer to an argument about how knowledge gets framed. The payoff showed up immediately in [the week on perception, where the thing being redefined was my own eyes→W2|the first redefinition is the one you cannot step outside of, because you are using it to read the others]. Much later it turned out that the whole structure of the subject was a setup for [the claim that the Western frame is one frame among several, not the default→W8|week one promises a redefinition; week eight delivers the one that costs the most]."
  },
  {
    id: "w2",
    week: 2,
    title: "Perception, and what the senses are actually for",
    short: "Perception",
    theme: "vision",
    date: "2026-08-07",
    photos: [
      { src: "images/w2-1.jpg", caption: "Light and shadow installation, ACMI — a shape that only exists where two colours overlap." },
      { src: "images/w2-2.jpg", caption: "The same room from the other side. The red is not in the object." },
      { src: "images/w2-3.jpg", caption: "Edges made entirely of coloured light." }
    ],
    body: "The line that stuck was that the senses are not recording devices, they are editing decisions made before you get a say. We do not see light, we see the small band of it we evolved to find useful, and the brain fills the rest with prediction. I kept thinking about how confidently I report what I saw. The photographs here are from a later visit, but they belong to this week more than the week I took them in: the shapes only exist where two coloured lights overlap, and there is nothing in the object doing it. That is this week's argument with a physical demonstration attached. It set up [the whole machine-vision story — a camera is a sense organ that someone designed on purpose→W3|if perception is editing, then building a camera is choosing what gets edited out], and it came back hardest in [the week on sound, with the claim that the ears are not really for hearing→W5|the same move twice: the organ you trust turns out to be doing a different job than you assumed]."
  },
  {
    id: "w3",
    week: 3,
    title: "1900–1930: the mechanical paradise and the birth of reproduction",
    short: "Reproduction",
    theme: "vision",
    date: "2026-08-14",
    photos: [
      { src: "images/w3-1.jpg", caption: "Magic lantern, brass and mahogany. A projector before there was anything to project." },
      { src: "images/w3-2.jpg", caption: "Phenakistoscope disc — motion stored as a ring of still drawings." },
      { src: "images/w3-3.jpg", caption: "Optical toys in a case: the prehistory of every screen I own." }
    ],
    body: "Thirty years that built the template we still live inside. Rationality, materialism, determinism, reductionism — four commitments that stopped looking like a philosophy and started looking like plumbing, invisible because everything runs on them. What I had not understood before is that reproduction is the hinge. Once an image or a sound can be copied perfectly and shipped, the original stops being the point, and an entire economy reorganises around the copy. The optical toys make this concrete in a way the lecture could not: a phenakistoscope is motion broken into slices and stored, which is sampling, a century before anyone used the word. That walked straight into [the ACMI collection, where the whole chain is laid out in one room→W4|the lecture gave me the argument and the museum gave me the objects for it]. The same rationalist confidence produced [buildings designed like machines→W7|one mentality, two outputs: the assembly line and the glass tower], and the logic of the copy ends up as [the business model of attention→W12|reproduction solved supply, so the scarce thing became attention]."
  },
  {
    id: "w4",
    week: 4,
    title: "ACMI: the story of the moving image",
    short: "Moving image",
    theme: "vision",
    date: "2026-08-21",
    photos: [
      { src: "images/w4-1.jpg", caption: "35mm projector, the mechanism fully exposed." },
      { src: "images/w4-2.jpg", caption: "Film gauges side by side — Super 8 to IMAX 70mm. Resolution as a physical object." },
      { src: "images/w4-3.jpg", caption: "Green screen demo with a colour chart. The seam that is supposed to be invisible." }
    ],
    body: "I only got to ACMI right at the end of October, on my own, about ten weeks after the subject had moved on from it. That was not the intended order and it turned out to be the better one for me, because I walked into the permanent collection already holding the argument, and the objects stopped being curiosities. A projector with its housing off is a sewing machine that happens to produce the twentieth century. The display of film gauges got me hardest — Super 8 up to 70mm laid out in a row, so resolution stops being a number and becomes a width of plastic I could have measured with my fingers. Everything I think of as weightless digital abstraction used to be a physical quantity somebody paid for by the metre. The shadow play material in the same building was the real surprise, and I have put it in a different week entirely, because [those puppets are not a European prehistory of cinema, they are a separate and much older tradition→W8|the museum's own sequence quietly tells a Western story; the puppets refuse it]. Having been to a gallery a fortnight earlier made the contrast sharp: [this place explains an object to you, the Science Gallery makes you part of one→W11|the same material under two opposite theories of what an audience is for]."
  },
  {
    id: "w5",
    week: 5,
    title: "What is sound? Overtones, cymatics, listening",
    short: "Overtones",
    theme: "sound",
    date: "2026-08-28",
    photos: [
      { src: "images/w5-1.jpg", caption: "My desk. Turntable, controller, laptop, and the guitar that started all of this." },
      { src: "images/w5-2.jpg", caption: "Same corner, late. Most of what I know about sound was learned here by accident." }
    ],
    body: "I have played piano for more than ten years and I did not know it had overtones. That is the honest version of this week. There is a muddiness low on the keyboard that I had filed for years under the piano needs tuning — a sourness I put down to neglect. It is not neglect. A string sounding at 110 Hz is also sounding at 220, 330 and 440, the whole series at once, which means a single note has always been a chord and timbre is only which partials are loud. Fingerstyle guitar is what turned this from a fact into physics for me. I have been working on Youngso Kim's Like A Star, tuned C G D G A D with a capo at the second fret, and its intro is almost nothing but harmonics — on the page it is a column of them. Once I understood the series I could finally see what my hands had been doing all along: every one of those harmonics is the same trick, touching the string exactly twelve frets above wherever it is stopped, halving the vibrating length to get the octave, the second partial. Open and touched at the twelfth, fretted at the fourth and touched at the sixteenth, fretted at the second and touched at the fourteenth — same interval, same physics, three different hand shapes. The tuning is doing work too: C G D G A D leaves so many strings sharing partials that striking one sets its neighbours going on their own. So I went and read properly afterwards. A string fixed at both ends can only hold wavelengths that fit a whole number of half-waves into its length, which is why the partials land on whole-number multiples of the fundamental. Then the correction that finally explained my piano: real strings are stiff rather than ideal, so a piano's upper partials sit slightly sharp of exact multiples, and tuners stretch the octaves on purpose to compensate. What I had been blaming on a neglected instrument was the instrument being exactly what it is. Hearing that the ears are not primarily for hearing sent me back to [the argument that every sense is an edit before it is a record→W2|the same lesson arriving through a different organ]. And I did not really believe any of it until [the lid came off an actual piano in the Old Conservatory→W6|the strings answering each other on the guitar and in the piano are the same effect, a fortnight apart]. Resonance turns out not to be a music idea at all — [whole systems behave like coupled oscillators, strings and forest floors alike→W9|the overtone series was my first look at the systems argument without knowing it was one]."
  },
  {
    id: "w6",
    week: 6,
    title: "Electronic music, and listening inside the Old Conservatory",
    short: "Electronic",
    theme: "sound",
    date: "2026-09-04",
    photos: [
      { src: "images/w6-1.jpg", caption: "Melba Hall, the Old Conservatory. Meeting point, 11am sharp." },
      { src: "images/w6-2.jpg", caption: "Inside the piano — the harp, the dampers, the whole machine usually hidden under a lid." },
      { src: "images/w6-3.jpg", caption: "The organ room. A building-sized instrument, or an instrument-sized building." }
    ],
    body: "Musique concrète, early synthesis, the Moog, tape, ambient — a century of people deciding that any sound at all was now material. Then the Friday, which is where the week before finally became real for me. We met at Melba Hall, the lid came off a grand piano, and the overtones were pointed out in the thing itself: hold one key down silently so its damper lifts, strike another, and the first string answers on its own, because the partial it shares is already there waiting to be excited. I have sat at pianos my whole life without once picturing the mechanism. From above it is obviously a machine — felt, leather, steel under tension, a harp lying on its side. Moving between rooms listening to how each one answered made space feel like part of the instrument, which is why [the architecture week was less of a subject change than I expected→W7|a room is a filter; the Old Conservatory taught me that before the Bauhaus did]. It also runs straight into my own desk, because [the turntable and the controller are the end of this exact lineage→W5|concrète cut tape, I drag audio files; the gesture is the same one], and it is the skill I ended up contributing when [we had to build something instead of explaining it→W10|the one week where being a hobbyist beat being a student]."
  },
  {
    id: "w7",
    week: 7,
    title: "Bauhaus, Constructivism, and the architecture of virtual worlds",
    short: "Architecture",
    theme: "space",
    date: "2026-09-11",
    photos: [
      { src: "images/w7-1.jpg", caption: "The Old Conservatory facade — the ornamented, load-bearing, deliberately heavy thing the Bauhaus defined itself against." }
    ],
    body: "You already know the Bauhaus, you just do not know that you know it. That was the pitch and it was accurate: every glass tower in every city, every sans-serif interface, every chair in every waiting room. Form follows function, ornament is a confession of failure, and the building should read as an honest diagram of its own structure. I photographed this facade during the sound walk the week before, and it is the exact opposite case — decorated, symmetrical, pretending to be a Greek temple with a concert hall inside. Then the jump to Second Life, Minecraft and VRChat, where the constraints the Bauhaus was arguing against simply evaporate. There is no gravity to honour and no material to be truthful to, and what people build is overwhelmingly not radical: they build houses, with roofs that shed rain that does not fall. The modernist claim that technique determines form ran into [a tradition that never agreed space was a problem to be solved→W8|the International Style wanted to erase difference; the week after is about what it was erasing], and the question of how to build with constraints rather than against them is answered properly in [the week where nature is treated as the engineering reference→W9|the Bauhaus asked what the machine can do, biomimicry asks what the termite already did]. Both of those turned up physically in [a gallery whose whole architecture is designed to put you inside the work→W11|a built space arguing for a different relationship to the viewer]."
  },
  {
    id: "w8",
    week: 8,
    title: "The Digital Revolution, and the roots called \"Eastern\"",
    short: "Eastern roots",
    theme: "ideas",
    date: "2026-09-18",
    photos: [
      { src: "images/w8-1.jpg", caption: "Shadow puppets, strung up and waiting. Articulated, translucent, hand-coloured." },
      { src: "images/w8-2.jpg", caption: "Framed figures behind glass — a performance tradition stored as objects." },
      { src: "images/w8-3.jpg", caption: "Projected and enlarged. The thing was always meant to be seen as light on a screen." }
    ],
    body: "The turning point of the semester, and the week I was least prepared for. The framing that got me was that post-war globalism marketed itself as universal while functioning as erasure — the International Style, one set of answers rolled out everywhere, difference treated as a problem that development would eventually solve. Then the material on Hinduism, Buddhism and Taoism, where the self is not a fortress, the arts are not self-expression and technology is not conquest. The part I am still turning over is qigong and yin-yang. My generation has largely dropped Chinese medicine on the grounds that it has no scientific basis, and I had quietly done the same without ever examining it. What the lecture offered instead was that the evidence might not be where the value sits — that the doing might be. Then we went and sat on the lawn, breathing, in the sun, and my body told me plainly that it was recovering. I cannot give a mechanism for that, and I do not think the comfort was any less real for the lack of one. The shadow puppets belong in this week rather than the museum week: projected light, a moving image, a story, an audience in the dark, centuries before the magic lantern, and simply absent from the standard lineage. This is the redefinition [the first week was quietly promising all along→W1|it took eight weeks to earn the sentence that the frame is a choice]. And working with the grain of a system instead of overpowering it is, in a different vocabulary, [the whole argument of the climax week→W9|biomimicry is a very old idea with a new budget]."
  },
  {
    id: "w9",
    week: 9,
    title: "Biomimicry: from conquering nature to consulting it",
    short: "Biomimicry",
    theme: "nature",
    date: "2026-09-25",
    photos: [
      { src: "images/w9-1.jpg", caption: "A network laid out across the floor — nodes, cables, no centre. Science Gallery." },
      { src: "images/w9-2.jpg", caption: "My bouldering gym. Reading a wall is a whole-body problem, not an arm problem." },
      { src: "images/w9-3.jpg", caption: "Fungal structure, projected large. Branching that solves a routing problem without solving anything." }
    ],
    body: "The hinge of the whole subject, and the Friday was cancelled for the holiday, so it all landed in one dense Wednesday. The paradigm shift is easy to state and hard to absorb: stop asking how to overpower a system and start asking what has already solved this problem over a few hundred million years. Termite mounds as passive air conditioning, burrs as velcro, mycelium as a routing network with no central node. What makes it more than a list of clever examples is that it changes who counts as the expert. The version I actually live is climbing. When I am stuck on a problem I go and watch other people's beta, and what I am reading is never strength — it is where the weight is. Flagging a leg out to the side is a counterweight that stops my body rotating off the wall. A heel hook turns a pull into a lock and buys a third point of contact. Swapping feet is usually just a way of getting my hip closer to the wall so my arms are carrying less. Underneath all of it is one idea: keep the centre of mass inside the triangle the contact points make, so there is no leverage left to peel me off. It is mechanics, and I learned it by consulting people who had already solved it, which is this week's entire method at a smaller scale. I had met the physics of it before in [the overtone series, where one note is a whole system resonating at once→W5|coupled systems, in a string and on a wall]. It is what I went looking for in [the gallery, which turned out to be mostly fungi and ecology→W11|the lecture gave me the concept two months before the exhibition gave me the room], and it is the sharpest thing I have against [a media economy that treats attention as an extractable resource→W12|one week says consult the system, the other says strip-mine it]."
  },
  {
    id: "w10",
    week: 10,
    title: "Making the presentation: show it, do not explain it",
    short: "Instrument",
    theme: "ideas",
    date: "2026-10-09",
    photos: [
      { src: "images/w10-1.jpg", caption: "Workshop session. Everyone building rather than writing slides." },
      { src: "images/w10-2.jpg", caption: "Pads and a session view — the actual work of putting a piece together." },
      { src: "images/w10-3.jpg", caption: "Audio and video on one timeline." }
    ],
    body: "The instruction was blunt and genuinely difficult: SHOW YOUR TOPIC, immerse us in it, do not stand there and explain it. Form and content have to be the same thing, which is much harder than it sounds, because explaining is the move every one of us has been trained in since primary school. What our group built was a body-tracking rig — movement read on the computer and mapped onto separate musical layers: bass, drums, a high band and a low band, filter cutoff. Moving a limb did not fire off a sound effect, it brought a whole part of the arrangement in or pulled it out. The thing I like about it is that it is not really a presentation format at all, it is an instrument. For live music it is a genuinely good idea: the audience stops receiving a mix and starts causing one, and the feedback is immediate enough that people work the mapping out for themselves without anybody explaining it, which was the brief. It is where my own setup finally earned its place in the subject — [knowing how to actually build sound rather than describe it→W6|the only week where being a hobbyist was more use than being a student]. And the mapping only made sense read as [a body that moves as one system rather than a set of separate joints→W9|the same thing I am doing on a climbing wall, pointed at a mixer instead]. Standing next to [a gallery built on exactly this principle→W11|professionals doing what we had been asked to do, with a building and a budget] was humbling and clarifying in equal measure."
  },
  {
    id: "w11",
    week: 11,
    title: "Science Gallery: being inside the work",
    short: "Immersion",
    theme: "nature",
    date: "2026-10-16",
    photos: [
      { src: "images/w11-1.jpg", caption: "Projection falling into my hands. The work does not exist until somebody holds it." },
      { src: "images/w11-2.jpg", caption: "Standing in a field of particles that react to movement." },
      { src: "images/w11-3.jpg", caption: "\"Take a photo in your mushroom.\" Ecology delivered as a photo booth, and it works." }
    ],
    body: "Almost nothing here is behind glass, and that single decision changes everything. The projection piece only completes when you put your hands under it — the image lands in your palms and you become the screen, which is a very efficient way of making the point that an image needs a surface and you are one. The particle room responds to movement, so the room is only finished while somebody is in it. Even the mushroom photo booth, which is unapologetically a gimmick, gets people to stand inside a fungal structure and look out, and I watched that land on people who would have walked straight past a wall of text about mycelial networks. This is the proof of what we had just been told about presentations — [form and content fused, by people with a budget and a building→W12|the gallery sells an idea with exactly the techniques advertising uses, which is uncomfortable and worth sitting with]. Compared with the museum earlier in the semester the contrast is total, and I think both are right about different things."
  },
  {
    id: "w12",
    week: 12,
    title: "Advertising, media, and the economy of attention",
    short: "Attention",
    theme: "vision",
    date: "2026-10-23",
    photos: [
      { src: "images/w12-1.jpg", caption: "\"Should the city expand surveillance cameras in public spaces?\" — a question posed as an exhibit." },
      { src: "images/w12-2.jpg", caption: "A grid of faces on a wall of screens. Everyone is footage now." }
    ],
    body: "The last week closes the loop the subject opened in week three. Once reproduction made copies free, supply stopped being the constraint and attention became the scarce resource — and anything scarce gets a market, a measurement industry and an extraction logic built around it. Advertising is simply the most honest name for the part of the media economy that admits what it is doing. The surveillance question on that screen is the same argument wearing a civic face: the camera is sold as safety and operates as data collection, and the exhibit is smart enough to pose it as a question I have to answer rather than a position it hands me. What makes this week land rather than just depress is that I now have the tools from earlier to take it apart. [If every sense is already an edit, then a feed is an edit of an edit→W2|the first redefinition turns out to be the practical one, twelve weeks later] — and that is the whole semester folding shut: not a list of twelve topics but one argument about frames, told with different material each time."
  }
];
