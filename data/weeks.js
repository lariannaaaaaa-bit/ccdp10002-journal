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
    pull: 0.1,
    title: "Breadth, schools, and teaching yourself",
    short: "Breadth",
    theme: "ideas",
    date: "2026-07-31",
    photos: [],
    body: "Day one was a Discord link and four videos about schools. Ken Robinson twice, a thing about writers who took their own education in hand, and footage of kids working out a computer with nobody teaching them.\n\nNo electronic art. No syllabus. Just an argument that school is the problem.\n\nI made a list, because the argument is testable on me.\n\n## things I learned in a room with a teacher\n\n- the shape of an essay\n- some chemistry I can no longer use\n- that I am bad at being watched while I work\n\n## things I taught myself\n\n- guitar, badly, then less badly\n- how a turntable actually works\n- how to put a track together, by repeating it until it stopped sounding wrong\n- most of what I know about sound\n\nThe second list is the one I can do things with. The first is the one I can talk about.\n\nThat is uncomfortable and I do not have a tidy answer to it. [The desk where the second list happened→W6|the self-teaching argument, with the evidence sitting in my bedroom] shows up again in week six.\n\nThe other thing announced on day one was the method: re-define a word before you use it, because the definitions you arrived with were handed to you. That got cashed [the very next week→W2|every word in the course title, starting with electricity], and again, much later and much harder, in [the week that asks whose frame it is→W8|week one says your definitions are inherited; week eight says so is the frame around them]."
  },
  {
    id: "w2",
    week: 2,
    pull: 0.7,
    widget: "contrast",
    title: "Re-defining everything: electricity, McGurk, paper",
    short: "Re-defining",
    theme: "ideas",
    date: "2026-08-07",
    photos: [
      { src: "images/w2-1.jpg", caption: "Light and shadow installation, ACMI — a shape that only exists where two colours overlap." },
      { src: "images/w2-2.jpg", caption: "The same room from the other side. The red is not in the object." },
      { src: "images/w2-3.jpg", caption: "Edges made entirely of coloured light." }
    ],
    body: "The week we took every word in the course title — electronic, the arts, the sciences, vision, sound, perception, the brain, technology — and refused to let any of them stand on the meaning we walked in with. Electricity first, and the real answer is stranger than the one I was carrying: not stuff flowing down a wire like water, but a field, with the electrons themselves drifting slower than I walk. Then the McGurk effect, which I have not stopped thinking about since. Watch a mouth form one syllable while a different syllable plays, and you hear the one you saw. Close your eyes and the sound changes back. In a subject called Vision and Sound, that is the entire title collapsing into a ten-second demonstration: the two are not separate channels being added up, one is editing the other before you get a vote. That is exactly what returns in [the week that says the ears are not primarily for hearing→W5|McGurk does it to you in ten seconds; week five explains the machinery]. And then paper and the Silk Road, which felt like a different lecture until it wasn't. Paper is not a product, it is a substrate, and once a substrate can travel, everything written on it becomes portable — which is the first half of an argument finished centuries later, when [a copy stops being a lesser version of the thing and becomes the thing→W3|paper makes knowledge portable; printing and photography make it endless]."
  },
  {
    id: "w3",
    week: 3,
    pull: 0.72,
    widget: ["framerate", "resolution"],
    title: "1900–1930: the mechanical paradise and the birth of reproduction",
    short: "Reproduction",
    theme: "vision",
    date: "2026-08-14",
    photos: [
      { src: "images/w3-1.jpg", caption: "Magic lantern, brass and mahogany. A projector before there was anything to project." },
      { src: "images/w3-2.jpg", caption: "Phenakistoscope disc — motion stored as a ring of still drawings." },
      { src: "images/w3-3.jpg", caption: "Optical toys in a case: the prehistory of every screen I own." }
    ],
    body: "The question the week actually asked was practical, not historical: how did we end up here, in a culture that treats technological progress and scientific truth as the default setting? The answer starts in thirty years. Rationality, materialism, determinism, reductionism — four commitments that stopped looking like a philosophy and started looking like plumbing, invisible because everything runs on them. What I had not understood before is that reproduction is the hinge. Once an image or a sound can be copied perfectly and shipped, the original stops being the point and an entire economy reorganises around the copy. The optical toys make this concrete in a way the lecture could not: a phenakistoscope is motion sliced up and stored, which is sampling, a century before anyone used the word. That walked straight into [the collection where the whole chain is laid out in one room→W4|the lecture gave me the argument and the museum gave me the objects for it]. The same rationalist confidence produced [buildings designed like machines→W7|one mentality, two outputs: the assembly line and the glass tower], and the logic of the copy ends up as [the business model of attention→W12|reproduction solved supply, so the scarce thing became attention]."
  },
  {
    id: "w4",
    week: 4,
    pull: 0.95,
    widget: "doors",
    lens: [
      { t: "11.04", title: "Shadow puppetry and play", who: "", year: "" },
      { t: "11.06", title: "Mechanical magic lantern slides", who: "", year: "" },
      { t: "11.07", title: "Upside-down heads", who: "", year: "" },
      { t: "11.09", title: "Splitting Time", who: "", year: "" },
      { t: "11.10", title: "Charlie Chaplin", who: "", year: "c. 1925" },
      { t: "11.11", title: "Natalie Kalmus", who: "", year: "" },
      { t: "11.11", title: "Costumes from Three Thousand Years of Longing", who: "Kym Barrett", year: "2022" },
      { t: "11.12", title: "The Piano", who: "Jane Campion", year: "1993" },
      { t: "11.13", title: "Type 2014K Image Orthicon camera", who: "Films & Equipment, PYE and Vinten", year: "c. 1950" },
      { t: "11.13", title: "Early sound recording equipment", who: "", year: "" },
      { t: "11.15", title: "How to Sell to Australia", who: "ACMI", year: "2020" },
      { t: "11.15", title: "TV miniatures", who: "", year: "2019" },
      { t: "11.15", title: "The Sheep Detectives", who: "", year: "2026" },
      { t: "11.15", title: "Blade Runner", who: "Ridley Scott", year: "1982" },
      { t: "11.15", title: "The Crown", who: "Schwochow and Morgan", year: "2023" },
      { t: "11.16", title: "Lesbian Space Princess - Character Design", who: "Hough Hobbs, Varghese, WeMAT", year: "2025" },
      { t: "11.16", title: "Prosthetic transformations", who: "Odd Studio", year: "2020" },
      { t: "11.17", title: "The Way of the Birds Storyboarding", who: "Sarah Watt", year: "1999-2000" },
      { t: "11.17", title: "Storyboarding in Eddie's Lil Homies", who: "Vishus Productions", year: "2024" },
      { t: "11.23", title: "Memoir of a Snail - Grace's hoard", who: "Adam Elliot", year: "2021-2023" },
      { t: "11.25", title: "The Koorie Oral History Program and the Bill Onus family archive", who: "ACMI", year: "2020" },
      { t: "11.26", title: "Memory Garden", who: "Various and Grumpy Sailor", year: "2020" },
      { t: "11.27", title: "Sun Smart campaigns", who: "Cancer Council Victoria", year: "1966-2025" },
      { t: "11.27", title: "You will see me", who: "Bateman, Carr and Braithwaite", year: "2020" },
      { t: "11.27", title: "The evolution of VR", who: "", year: "" },
      { t: "11.28", title: "Yanmeeyarr", who: "Vicki Couzens, Gunditjmara Keerray Woorroong", year: "2020" }
    ],
    title: "ACMI: the story of the moving image",
    short: "ACMI",
    theme: "vision",
    date: "2026-08-21",
    photos: [
      { src: "images/w4-1.jpg", caption: "The Koorie Oral History Program and the Bill Onus family archive (ACMI, 2020) — the film lands in your own palm." },
      { src: "images/w4-2.jpg", caption: "Film gauges side by side, Super 8 up to IMAX 70mm. Resolution as a width of plastic." },
      { src: "images/w4-3.jpg", caption: "35mm projector with the housing off." }
    ],
    gallery: [
      { src: "images/w4-g1.jpg", caption: "A praxinoscope on a yellow plinth. Mirrors in the middle, drawings around the rim." },
      { src: "images/w4-g2.jpg", caption: "A box camera in a case, still yellow." },
      { src: "images/w4-g3.jpg", caption: "Film strips in colour, laid out in a grid on the wall." },
      { src: "images/w4-g4.jpg", caption: "Brass optics and white reels. Half instrument, half furniture." },
      { src: "images/w4-g5.jpg", caption: "Framed prints of figures in costume — images made to be projected." },
      { src: "images/w4-g6.jpg", caption: "A case of small framed slides, lit from behind." },
      { src: "images/w4-g7.jpg", caption: "A model ship in a vitrine, with the tools that made it move." },
      { src: "images/w4-g8.jpg", caption: "An upright piano under a wall of stills. Silent film had to be accompanied by somebody." },
      { src: "images/w4-g9.jpg", caption: "Character drawings in a case, before anything was animated." },
      { src: "images/w4-g10.jpg", caption: "A headset and a sensored glove, already behind glass." },
      { src: "images/w4-g11.jpg", caption: "Constellation. The dark room at the end, where everything you tapped gets joined up." }
    ],
    body: "I only got to ACMI at the end of October, on my own, about ten weeks after the subject had moved on from it. Not the intended order, and the better one for me: I walked in already holding the argument. They hand you a Lens at the door, a cardboard Viewmaster with an NFC tag in it, and everything you tap is waiting at home afterwards. Mine says twenty-six things between 11.04 and 11.28. Reading it back is its own experience, because the list is a better record of what caught me than my memory is. It opens on shadow puppetry and closes on a 2020 Gunditjmara artwork, and in between it runs mechanical magic lantern slides, Splitting Time — chronophotography, a body cut into frames — a 1950 Image Orthicon television camera, early sound recording equipment, Natalie Kalmus, and Jane Campion's The Piano. [A film about a piano, collected two months after I stood over an open one and watched the dampers lift→W6|the Lens kept the coincidence; I would have forgotten it]. The projector with its housing off is a sewing machine that happens to produce the twentieth century, and the display of film gauges got me hardest — Super 8 up to 70mm in a row, so resolution stops being a number and becomes a width of plastic somebody paid for by the metre. Two things in the list belong to weeks I had already written: [a Samsung Gear VR sitting in a case as history→W7|the week on virtual worlds, and the headset is already a museum object], and [Sun Smart campaigns from 1966 to 2025, plus a display literally called How to Sell to Australia→W12|the advertising week, archived as cultural heritage]. And the shadow puppets are not a European prehistory of cinema — [they are a separate and far older tradition→W8|the museum's sequence tells a Western story; the puppets refuse it]. I did the Science Gallery the same afternoon, which made the contrast impossible to miss: [this place explains an object to you, that one makes you part of one→W11|two theories of what an audience is for, two hours apart]. And then the last room, which is called Constellation, and which is where the Lens actually pays off: the things you tapped are put on a wall joined to hundreds of other works that nobody in the building chose for you. I stood in it for a while without registering what I was looking at. I had already been building this journal as a field of stars joined by the connections I had written between the weeks. The form I had picked for writing about the exhibition turned out to be the form of the exhibition. I would like to claim that as an argument about media being contagious, but honestly it is just the thing itself happening to me, two weeks late and without my noticing."
  },
  {
    id: "w5",
    week: 5,
    pull: 1.0,
    widget: "harmonics",
    title: "What is sound? Overtones, cymatics, listening",
    short: "Overtones",
    theme: "sound",
    date: "2026-08-28",
    photos: [
      { src: "images/w5-1.jpg", caption: "My desk. Turntable, controller, laptop, and the guitar that started all of this." },
      { src: "images/w5-2.jpg", caption: "Same corner, late. Most of what I know about sound was learned here by accident." },
      { src: "images/w5-3.jpg", caption: "The inside of a grand piano, from above. This is where I found out a piano has overtones." }
    ],
    body: "I have played piano for more than ten years and I did not know it had overtones. That is the honest version of this week. There is a muddiness low on the keyboard that I had filed for years under the piano needs tuning — a sourness I put down to neglect. It is not neglect. A string sounding at 110 Hz is also sounding at 220, 330 and 440, the whole series at once, which means a single note has always been a chord and timbre is only which partials are loud. Fingerstyle guitar is what turned this from a fact into physics for me. I have been working on Youngso Kim's Like A Star, tuned C G D G A D with a capo at the second fret, and its intro is almost nothing but harmonics — on the page it is a column of them. Once I understood the series I could finally see what my hands had been doing all along: every one of those harmonics is the same trick, touching the string exactly twelve frets above wherever it is stopped, halving the vibrating length to get the octave, the second partial. Open and touched at the twelfth, fretted at the fourth and touched at the sixteenth, fretted at the second and touched at the fourteenth — same interval, same physics, three different hand shapes. The tuning is doing work too: C G D G A D leaves so many strings sharing partials that striking one sets its neighbours going on their own. So I went and read properly afterwards. A string fixed at both ends can only hold wavelengths that fit a whole number of half-waves into its length, which is why the partials land on whole-number multiples of the fundamental. Then the correction that finally explained my piano: real strings are stiff rather than ideal, so a piano's upper partials sit slightly sharp of exact multiples, and tuners stretch the octaves on purpose to compensate. What I had been blaming on a neglected instrument was the instrument being exactly what it is. Hearing that the ears are not primarily for hearing sent me back to [the argument that every sense is an edit before it is a record→W2|the same lesson arriving through a different organ]. And I did not really believe any of it until [the lid came off an actual piano in the Old Conservatory→W6|the strings answering each other on the guitar and in the piano are the same effect, a fortnight apart]. Resonance turns out not to be a music idea at all — [whole systems behave like coupled oscillators, strings and forest floors alike→W9|the overtone series was my first look at the systems argument without knowing it was one]."
  },
  {
    id: "w6",
    week: 6,
    pull: 0.4,
    title: "Electronic music, and listening inside the Old Conservatory",
    short: "Electronic music",
    theme: "sound",
    date: "2026-09-04",
    photos: [
      { src: "images/w6-1.jpg", caption: "Melba Hall, the Old Conservatory. Meeting point, 11am sharp." },
      { src: "images/w6-2.jpg", caption: "Inside the piano — the harp, the dampers, the whole machine usually hidden under a lid." },
      { src: "images/w6-3.jpg", caption: "The organ room. A building-sized instrument, or an instrument-sized building." }
    ],
    body: "Musique concrète, early synthesis, the Moog, tape, ambient. A century of people deciding that any sound at all counts as material.\n\nThen the Friday, which is where the week before stopped being theory.\n\n11.00 | Melba Hall lobby. The Old Conservatory. We were told 11 sharp because we would be moving around.\n11.20 | The lid comes off a grand piano. Hold one key down without sounding it so its damper lifts, strike another, and the first string answers on its own. It shares a partial with the note you played and it was already sitting there waiting to be excited.\n11.40 | From above a piano is obviously a machine. Felt, leather, steel under tension, a harp lying on its side. I have sat at them my whole life without picturing any of it.\n12.10 | Different rooms, same instrument, completely different answer. Stone stairwell, carpeted studio, the hall itself.\n12.40 | Outside. The Botanic Gardens have no reverb at all and it feels like a fault.\n\nThe thing I took away is that the room is part of the instrument. Which is why [the architecture week was less of a subject change than I expected→W7|a room is a filter; the Old Conservatory taught me that a week before the Bauhaus did].\n\nIt also runs straight into my own desk, because [the turntable and the controller are the end of this exact lineage→W5|concrète cut tape, I drag audio files; the gesture is the same one], and it is the skill I ended up contributing when [we had to build something instead of explaining it→W10|the one week where being a hobbyist beat being a student]."
  },
  {
    id: "w7",
    week: 7,
    pull: 0.45,
    title: "Bauhaus, Constructivism, and the architecture of virtual worlds",
    short: "Architecture",
    theme: "space",
    date: "2026-09-11",
    photos: [
      { src: "images/w7-1.jpg", caption: "The Old Conservatory facade — the ornamented, load-bearing, deliberately heavy thing the Bauhaus defined itself against." }
    ],
    body: "You already know the Bauhaus. You just do not know that you know it: every glass tower, every sans-serif interface, every chair in every waiting room.\n\nForm follows function. Ornament is a confession of failure. A building should read as an honest diagram of its own structure.\n\nThe facade in the photograph is the opposite case, and I took it on the sound walk the week before without knowing I would need it. Decorated, symmetrical, a Greek temple with a concert hall inside.\n\nThen Second Life, Minecraft, VRChat — where every constraint the Bauhaus argued against simply stops existing.\n\nthe Bauhaus said | what people actually build\ntruth to materials | there are no materials\nform follows function | nothing has a function\nhonour the structure | there is no load to carry\nornament is a lie | ornament is free, so there is a lot of it\nbuild for how we live now | mostly: a house, with a roof\n\nThat last row is the one I keep turning over. Given a world with no gravity and no rain, people build a roof.\n\nI do not think that is a failure of imagination. I think it means the constraints were never really the point — we were attached to the shapes the constraints produced.\n\n[A Samsung Gear VR is already a museum object, in a case, labelled→W4|the future I was being shown in week seven had been archived before I got to it].\n\nThe modernist claim that technique determines form ran into [a tradition that never agreed space was a problem to be solved→W8|the International Style wanted to erase difference; the week after is about what it was erasing]. And the question of building with constraints rather than against them gets answered properly by [the week that treats nature as the engineering reference→W9|the Bauhaus asked what the machine can do; biomimicry asks what the termite already did].\n\nBoth turned up physically in [a gallery whose architecture exists to put you inside the work→W11|a built space arguing for a different relationship to the viewer]."
  },
  {
    id: "w8",
    week: 8,
    pull: 0.48,
    title: "The Digital Revolution, and the roots called \"Eastern\"",
    short: "Other roots",
    theme: "ideas",
    date: "2026-09-18",
    photos: [
      { src: "images/w8-1.jpg", caption: "Shadow puppets, strung up and waiting. Articulated, translucent, hand-coloured." },
      { src: "images/w8-2.jpg", caption: "Framed figures behind glass — a performance tradition stored as objects." },
      { src: "images/w8-3.jpg", caption: "Projected and enlarged. The thing was always meant to be seen as light on a screen." }
    ],
    body: "The turning point of the semester, and the week I was least prepared for.\n\nPost-war globalism sold itself as universal and worked as erasure. One set of answers rolled out everywhere. Difference filed as a problem that development would eventually solve.\n\nThen Hinduism, Buddhism, Taoism. The self is not a fortress. The arts are not self-expression. Technology is not conquest.\n\nThe part I am still turning over is qigong and yin-yang. My generation has largely dropped Chinese medicine on the grounds that it has no scientific basis, and I had quietly done the same without ever examining it.\n\nWhat the lecture offered instead was that the evidence might not be where the value sits. That the doing might be.\n\nThen we went and sat on the lawn, breathing, in the sun, and my body told me plainly that it was recovering.\n\nI cannot give a mechanism for that. I do not think the comfort was less real for the lack of one. I also do not think that settles anything, and I notice I want it to.\n\nThe shadow puppets belong in this week rather than the museum week. Projected light, a moving image, a story, an audience in the dark — centuries before the magic lantern, and simply absent from the standard lineage.\n\nThe same visit ended on Yanmeeyarr, a 2020 work by Vicki Couzens in Gunditjmara Keerray Woorroong, and on an archive of Koorie oral history. Which makes the point harder and much closer to home than a lecture about distant traditions could. The alternative to the Western frame is not somewhere far away. Some of it is the ground the lecture theatre is standing on.\n\nThis is the redefinition [the first week was quietly promising all along→W1|it took eight weeks to earn the sentence that the frame is a choice]. And working with the grain of a system instead of overpowering it is, in a different vocabulary, [the whole argument of the climax week→W9|biomimicry is a very old idea with a new budget]."
  },
  {
    id: "w9",
    week: 9,
    pull: 0.9,
    title: "Biomimicry: from conquering nature to consulting it",
    short: "Biomimicry",
    theme: "nature",
    date: "2026-09-25",
    photos: [
      { src: "images/w9-1.jpg", caption: "A network laid out across the floor — nodes, cables, no centre. Science Gallery." },
      { src: "images/w9-2.jpg", caption: "My bouldering gym. Reading a wall is a whole-body problem, not an arm problem." },
      { src: "images/w9-3.jpg", caption: "Fungal structure, projected large. Branching that solves a routing problem without solving anything." }
    ],
    body: "Stop asking how to overpower a system. Start asking what has already solved this over a few hundred million years.\n\nThe Friday was cancelled for the holiday, so all of it landed in one dense Wednesday.\n\n## things that were already solved\n\ntermite mound | passive air conditioning, no power\nburr | velcro\nmycelium | a routing network with no central node\ngecko foot | dry adhesive\nshark skin | drag reduction, and it resists bacteria\n\nThe list is not the point. The inversion is. It changes who counts as the expert, and it means the research method is mostly looking.\n\n## the version I actually live\n\nWhen I am stuck on a climbing problem I go and watch other people's beta. What I am reading is never strength.\n\n- flagging — a leg out to the side is a counterweight. It stops my body rotating off the wall\n- heel hook — turns a pull into a lock, and buys a third point of contact\n- swapping feet — usually just a way of getting my hip closer to the wall so my arms carry less\n- the whole thing underneath — keep the centre of mass inside the triangle my contact points make, so there is no leverage left to peel me off\n\nIt is mechanics. And I learned it by consulting people who had already solved it, which is this week's entire method at a smaller scale.\n\nI had met the physics before in [the overtone series, where one note is a whole system resonating at once→W5|coupled systems, in a string and on a wall].\n\nIt is what I went looking for in [the gallery, which turned out to be mostly fungi and ecology→W11|the lecture gave me the concept two months before the exhibition gave me the room].\n\nAnd it is the sharpest thing I have against [a media economy that treats attention as an extractable resource→W12|one week says consult the system, the other says strip-mine it]."
  },
  {
    id: "w10",
    week: 10,
    pull: 1.0,
    title: "Body movement as a mixing desk",
    short: "Moving the mix",
    theme: "ideas",
    date: "2026-10-09",
    video: { src: "media/presentation.mp4", caption: "Our group presentation: body movement bringing tracks in and out." },
    links: [
      { href: "pentatonic/index.html", label: "Open 五音 / Pentatonic Vision", note: "my own toy, not the group piece · runs in the browser · needs a webcam" }
    ],
    photos: [
      { src: "images/w10-1.jpg", caption: "Workshop session. Everyone building rather than writing slides." },
      { src: "images/w10-2.jpg", caption: "Pads and a session view — the actual work of putting a piece together." },
      { src: "images/w10-3.jpg", caption: "Audio and video on one timeline." }
    ],
    body: "SHOW YOUR TOPIC. Immerse us in it. Do not stand there and explain it.\n\nThat is much harder than it sounds, because explaining is the move all of us have been trained in since primary school.\n\n## what the group presented\n\nBody movement controlling a running piece of electronic music. Not notes — tracks. A bass line, drums, cymbals, high and low pass filtering, filter cutoff. Move, and a whole part of the arrangement comes in or drops out.\n\nThe system underneath it was not mine. One of my group members already had something far more developed than anything I could have built in a fortnight, and we presented on that. I want to be accurate about this, because the interesting half of the project was his engineering and the interesting half of the week was what it did to an audience.\n\nWhat it did was pass the test. People stopped receiving a mix and started causing one, and nobody had to be told the mapping — they found it by moving. Which is exactly the brief, and it is not a thing a slide could have done.\n\n## what I made afterwards, which is mine and much smaller\n\nHis work made me want to understand the problem with my hands, so I built a toy. A webcam, pose and hand tracking in the browser, and movement mapped to a handful of notes.\n\nIt is called 五音, Pentatonic Vision. The name is the point: the notes it can reach are the five of the pentatonic scale, which is the scale [this subject derived from stacking fifths two months earlier→W5|my own toy is built on the arithmetic from the overtone week]. That constraint is the only reason waving at a camera sounds like music instead of noise.\n\nIt is cruder than what we presented and it is not what we presented. It is in here because the vision below is mine, not the group's, and because building it is how I actually learned what the group project was doing.\n\nOpen it above. It needs a webcam and it wants your whole body in frame.\n\n## who it could be for\n\n- people who cannot hold or press a conventional instrument — the gap between wanting to play and being physically able to is enormous, and almost everything on the market assumes ten working fingers\n- people past the age where learning an instrument is realistic, who have been told so quietly for years\n- people who already hear music and have no route out of their own head with it\n\nA conventional instrument puts a decade of technique between the intention and the sound. A camera does not.\n\n## what it cannot do yet\n\n- the mapping is hand-written. Joint velocity in, parameter out. A rule, not a model, so it does not adapt to the person using it\n- it reads motion, not intent. Reaching for a glass and reaching to swell the strings look identical to it\n- faces are the obvious next input and the weakest link. Expression does not map cleanly onto feeling, the mapping varies between people and cultures, and a confident wrong read is worse than no read\n\n## how I would train it\n\nNot with a universal emotion model. That is exactly the kind of inherited definition [this subject spent a week taking apart→W2|a model trained on one culture's faces is a frame presented as a fact].\n\nPer-player calibration instead. Thirty seconds at the start: move how you would move for loud, now quiet, now busy, now still. Four labelled clips from this body, in this room, in this chair, and fit the ranges to those rather than to a dataset of strangers. Small, personal and correctable beats large and confident.\n\n## where it could go\n\nAt WAIC this year I saw BrainCo's dexterous hand help a person with a disability play piano. That reframed the whole thing for me, because the output does not have to be a synthesiser.\n\n- the same mapping could drive a prosthetic hand on a real instrument, so the room hears a piano rather than a laptop\n- a brain-computer interface removes the limb from the loop entirely, which is the logical end of the argument: read the intention, skip the body\n- and that is where I get uneasy, because [removing the body from music is a very large claim to make casually→W9|the week that says consult the system you are in, rather than engineering around it]\n\nI have not resolved that and would rather leave it open.\n\nThis is also the week my own setup finally earned its place here — [knowing how to build sound rather than describe it→W6|the only week where being a hobbyist was more use than being a student] — and watching the group piece work taught me to read [a body that moves as one system rather than a set of separate joints→W9|the same thing I do on a climbing wall, pointed at a mixer instead]. Standing it next to [a gallery built on exactly this principle→W11|professionals doing what we had been asked to do, with a building and a budget] was humbling and clarifying at once."
  },
  {
    id: "w11",
    week: 11,
    pull: 0.52,
    title: "Science Gallery: being inside the work",
    short: "Science Gallery",
    theme: "nature",
    date: "2026-10-16",
    photos: [
      { src: "images/w11-1.jpg", caption: "A forest, projected wall-high. EMERGENCE[Y], Science Gallery Melbourne." },
      { src: "images/w11-2.jpg", caption: "Standing in a field of particles that react to movement." },
      { src: "images/w11-3.jpg", caption: "Take a photo in your mushroom — ecology delivered as a photo booth, and it works." }
    ],
    body: "EMERGENCE[Y]. Runs most of the year. It is about adapting to a world coming apart — ecology, technology, upheaval.\n\nAlmost nothing is behind glass. That one decision does most of the work.\n\nRoom by room:\n\nthe forest | Wall-high projection at the far end. You walk into it rather than up to it.\nthe particles | Reacts to movement. It is only finished while somebody is standing in it. Walk out and it is a room with a projector in it.\nthe floor | A mycelial network in nodes and cable. No centre anywhere.\nthe maps | The same arrangement with a price on it.\nthe booth | Take a photo in your mushroom. Unapologetically a gimmick.\n\nThe booth is the one I keep thinking about. It is cheap and it works. I watched it land on people who would have walked straight past a wall of text about mycelial networks.\n\nWe presented our own piece the same week, which made this awkward in a useful way. [We had built a thing that only exists while someone moves in front of it→W10|the same bet — one made by students in a fortnight, one by a gallery with a building], and theirs worked on strangers.\n\nSo this is the proof of the presentation brief, [done by people with a budget→W12|the gallery sells its ideas with exactly the techniques advertising uses, which I would rather not have noticed].\n\nI did the museum the same afternoon. The contrast is total. I think they are both right about different things and I cannot make that into a neat sentence."
  },
  {
    id: "w12",
    week: 12,
    pull: 0.4,
    title: "Advertising, media, and the economy of attention",
    short: "Advertising",
    theme: "vision",
    date: "2026-10-23",
    photos: [
      { src: "images/w12-1.jpg", caption: "\"Should the city expand surveillance cameras in public spaces?\" — a question posed as an exhibit." },
      { src: "images/w12-2.jpg", caption: "A grid of faces on a wall of screens. Everyone is footage now." }
    ],
    body: "Reproduction made copies free. So supply stopped being the constraint, and attention became the scarce thing. Anything scarce gets a market, a measurement industry, and an extraction logic built around it.\n\nAdvertising is just the most honest name for the part that admits what it is doing.\n\nI had already met the evidence without recognising it. [Two of the twenty-six things I tapped at the museum were advertising→W4|Sun Smart from 1966 to 2025, and a display called How to Sell to Australia — persuasion archived as cultural heritage].\n\nSun Smart is the awkward one, because it is the same apparatus aimed at keeping people alive.\n\nThe surveillance question on that screen is the same argument wearing a civic face. The camera is sold as safety and runs as data collection, and the exhibit is smart enough to ask me rather than tell me.\n\nSo here is what I have at the end, which is mostly questions.\n\n## twelve weeks, and what I am left holding\n\n- if every sense is already an edit, what exactly is a feed an edit of?\n- Sun Smart and a cigarette campaign use the same machine. Is the machine neutral, or is that just what machines always say?\n- I can take apart why the surveillance exhibit works on me. Why does it still work on me?\n- the gallery and the advertiser use the same techniques for opposite ends. Does knowing that change anything I do on Monday?\n- I spent a week being told my definitions were inherited. Which of the ones I am using right now did I choose?\n\n[The first redefinition turns out to be the practical one→W2|twelve weeks later, and it is the one I keep needing]. And [the gallery sells its ideas with exactly these techniques→W11|which is uncomfortable, and I would rather leave it uncomfortable than resolve it].\n\nThat is the semester folding shut. Not twelve topics. One argument about frames, told with different material each time, and I am not finished with it."
  }
];
