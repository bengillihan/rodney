/* Rodney Rathbone for the Defense — case-file engine and story.
   An unofficial fan story. All story text, dialogue and drawings are original. */
(() => {
  "use strict";

  /* ------------------------------------------------------------------ *
   * Drawings (inline SVG, original)                                    *
   * ------------------------------------------------------------------ */
  const sockets = (y, n, r0, step) => {
    let out = "", x = 48;
    for (let k = 0; k < n; k++) {
      const r = r0 - k * 0.45;
      out += `<circle class="m t" cx="${x}" cy="${y}" r="${r.toFixed(1)}"/><circle class="md" cx="${x}" cy="${y}" r="${(r * 0.42).toFixed(1)}"/>`;
      x += step;
    }
    return out;
  };

  const ART = {
    door: `<svg viewBox="0 0 240 260" aria-hidden="true">
      <rect class="b" width="240" height="260"/>
      <g class="t n" opacity=".5"><path d="M0 30h240M0 60h240M0 90h240M0 120h240M0 150h240M0 180h240M0 210h240M0 240h240"/>
      <path d="M30 0v30M210 0v30M15 30v30M225 30v30M30 60v30M210 60v30M15 90v30M225 90v30M30 120v30M210 120v30M15 150v30M225 150v30M30 180v30M210 180v30M15 210v30M225 210v30"/></g>
      <rect class="p s" x="60" y="28" width="120" height="214"/>
      <rect class="n t" x="76" y="46" width="88" height="74"/>
      <rect class="n t" x="76" y="134" width="88" height="60"/>
      <path class="m s" d="M62 206 L150 206 Q166 214 182 200 L180 240 L62 240 Z"/>
      <circle class="m s" cx="160" cy="128" r="7"/>
      <path class="n s" d="M160 128 h-22" style="stroke-width:6"/>
      <path class="n t" d="M176 100 l8 5 l-7 5 l8 5 l-7 5 l8 5 M172 146 l10 -3 M171 153 l10 2 M174 160 l7 -1"/>
      <path class="n s" d="M181 38 L197 118"/>
      <rect class="p3 s" x="44" y="242" width="152" height="14"/>
      <ellipse class="m s" cx="214" cy="238" rx="20" ry="7" transform="rotate(-18 214 238)"/>
    </svg>`,

    socketSet: `<svg viewBox="0 0 260 190" aria-hidden="true">
      <rect class="m s" x="24" y="12" width="212" height="68" rx="8"/>
      <rect class="md t" x="36" y="22" width="188" height="48" rx="4" opacity=".45"/>
      <rect class="p s" x="58" y="40" width="112" height="12" rx="6"/>
      <circle class="p s" cx="184" cy="46" r="14"/><circle class="md t" cx="184" cy="46" r="5"/>
      <rect class="m s" x="18" y="80" width="224" height="98" rx="8"/>
      <rect class="i" x="30" y="92" width="200" height="72" rx="4"/>
      ${sockets(114, 9, 9.5, 22)}
      ${sockets(144, 9, 7.5, 22)}
      <rect class="md t" x="120" y="170" width="20" height="10" rx="2"/>
    </svg>`,

    metalBox: `<svg viewBox="0 0 240 170" aria-hidden="true">
      <path class="n s" d="M6 80h30M16 104h26M4 128h34"/>
      <path class="n s" d="M110 58 v-20 q0-7 7-7 h36 q7 0 7 7 v20" style="stroke-width:5"/>
      <rect class="m s" x="52" y="56" width="168" height="94" rx="8"/>
      <path class="n t" d="M52 84 h168"/>
      <rect class="md t" x="78" y="76" width="16" height="16" rx="2"/>
      <rect class="md t" x="178" y="76" width="16" height="16" rx="2"/>
      <path class="n t" d="M70 120 l20 2 M150 132 l26 -3" opacity=".6"/>
    </svg>`,

    cashBox: `<svg viewBox="0 0 240 170" aria-hidden="true">
      <path class="p3 s" d="M50 66 L80 38 L210 38 L180 66 Z"/>
      <path class="n s" d="M112 52 h34"/>
      <rect class="m s" x="50" y="66" width="130" height="82"/>
      <path class="md s" d="M180 66 L210 38 V120 L180 148 Z"/>
      <circle class="i" cx="115" cy="100" r="6"/><rect class="i" x="113" y="102" width="4" height="11"/>
      <rect class="tp t" x="64" y="122" width="44" height="16"/>
      <path class="n t" d="M70 130 h32"/>
    </svg>`,

    skateboard: `<svg viewBox="0 0 260 140" aria-hidden="true">
      <g transform="rotate(-6 130 70)">
        <path class="w s" d="M28 44 H232 Q250 44 250 32 L246 30 Q242 40 230 40 H30 Q18 40 14 30 L10 32 Q10 44 28 44 Z"/>
        <rect class="w s" x="24" y="40" width="212" height="16" rx="8"/>
        <rect class="tp t" x="96" y="43" width="68" height="11" transform="rotate(-3 130 48)"/>
        <path class="r" d="M206 43 l-10 7 h7 l-6 7 l12 -9 h-7 l6 -5 z"/>
        <path class="n s" d="M66 56 v12 M54 70 h24 M194 56 v12 M182 70 h24"/>
        <circle class="p s" cx="66" cy="84" r="13"/><circle class="md" cx="66" cy="84" r="4"/>
        <circle class="p s" cx="194" cy="84" r="13"/><circle class="md" cx="194" cy="84" r="4"/>
      </g>
    </svg>`,

    fishingPole: `<svg viewBox="0 0 260 200" aria-hidden="true">
      <path class="n t" d="M238 18 Q254 100 214 146"/>
      <path class="n s" d="M34 182 L238 18"/>
      <path class="n" d="M34 182 L76 148" style="stroke:var(--wood);stroke-width:12;stroke-linecap:round"/>
      <path class="n t" d="M34 182 L76 148" style="stroke-width:1.2" opacity=".5"/>
      <circle class="p t" cx="122" cy="111" r="4"/><circle class="p t" cx="163" cy="78" r="4"/><circle class="p t" cx="204" cy="45" r="3.5"/>
      <circle class="m s" cx="88" cy="156" r="14"/>
      <path class="n s" d="M88 156 l14 10"/><circle class="i" cx="103" cy="167" r="4"/>
      <circle class="p s" cx="214" cy="156" r="10"/>
      <path class="r s" d="M204 156 a10 10 0 0 1 20 0 Z"/>
      <path class="n t" d="M186 174 q28 -7 56 0 M196 184 q18 -5 36 0"/>
    </svg>`,

    screwdriver: `<svg viewBox="0 0 240 90" aria-hidden="true">
      <rect class="r s" x="14" y="28" width="92" height="34" rx="15"/>
      <path class="n t" d="M36 34v22M56 34v22M76 34v22" style="stroke:var(--paper-2)"/>
      <rect class="md s" x="104" y="36" width="14" height="18" rx="2"/>
      <rect class="m s" x="118" y="41" width="86" height="8"/>
      <path class="m s" d="M204 41 L228 44 L228 46 L204 49 Z"/>
    </svg>`,
  };

  /* Flat spot icons supplied for the site. When a file is present it replaces the matching drawing. */
  const ICONS = {
    socketSet: "images/icons/socket-set.png",
    cashBox: "images/icons/cash-box.png",
    skateboard: "images/icons/skateboard.png",
    door: "images/icons/door.png",
  };
  const drawing = (key) => ART[key] || "";

  /* Illustrations supplied for the site. If a file is missing, the drawing named in `fallback` is shown instead. */
  const IMAGES = {
    connie: {
      src: "images/01-connie-sees-rodney.jpg", fallback: "metalBox",
      alt: "From the side door of Whit’s End, Connie watches Rodney run down the alley with a gray metal box under his arm. The door is splintered at the bottom and a screwdriver lies on the step.",
      caption: "What Connie saw from the side door.",
    },
    rodney: {
      src: "images/02-rodney-sees-toby.jpg", fallback: "metalBox",
      alt: "Over Rodney’s shoulder, holding the metal box: a younger boy at the far end of the alley, near the street. Connie watches from the doorway behind them.",
      caption: "What Rodney saw from the same alley, at the same moment.",
    },
    sockets: {
      src: "images/03-socket-set.jpg", fallback: "socketSet",
      alt: "Rodney opens the metal box on the Whit’s End counter to show a tray of sockets and a ratchet while Connie leans in. A skateboard sits behind the counter.",
      caption: "Forty-one sockets. Zero dollars.",
    },
    step: {
      src: "images/04-alley-step.jpg", fallback: "door",
      alt: "Rodney and the younger boy sit side by side on a crate beside the broken side door. Connie is visible inside.",
      caption: "The alley, about twenty minutes after Rodney almost went fishing.",
    },
    screwdriver: {
      src: "images/05-screwdriver.jpg", fallback: "screwdriver",
      alt: "In the alley, Whit holds out a screwdriver to Rodney while the boy kneels to fit a new board on the damaged door. Connie smiles from the doorway. The socket set sits open on the ground.",
      caption: "Exhibit E.",
    },
    rumor: {
      src: "images/07-wrath-of-rath.jpg", fallback: "", portrait: true,
      alt: "A dramatic movie-style poster titled “The Wrath of Rath.” Rodney stands in front of Whit’s End under a swirling red sky, gripping a metal box, a fishing pole over his shoulder. Tagline: “He came to fish. They made it personal.”",
      caption: "The version going around Odyssey by lunchtime. Artist’s rendering. Not to scale. Not accurate.",
    },
    closing: {
      src: "images/06-closing-argument.jpg", fallback: "metalBox",
      alt: "Rodney sits in a Whit’s End booth beside a sundae and a cassette recorder with a microphone, gesturing as he talks. A page of crossed-out notes lies on the table.",
      caption: "The defense, dictating.",
    },
  };

  /* ------------------------------------------------------------------ *
   * The two accounts: same three beats, same order, both true.         *
   * ------------------------------------------------------------------ */
  const ACCOUNTS = {
    connie: {
      title: "Statement of Connie Kendall",
      sworn: "Given at Whit’s End, 11:10 a.m., to anyone who would listen.",
      audio: "audio/account-connie.mp3",
      beats: [
        ["The crash", "I was restocking napkins when something in the alley <mark class=\"shared\">crashed</mark>. Metal on metal, loud enough that the whole room stopped chewing."],
        ["The box", "I opened the side door. Rodney Rathbone was running away from it, toward the street, with a <mark class=\"shared\">gray metal box</mark> under his arm."],
        ["“Rodney!”", "I called, <mark class=\"shared\">“Rodney!”</mark> He heard me. I know he heard me, because he didn’t stop. He <mark class=\"shared\">sped up</mark>."],
      ],
    },
    rodney: {
      title: "Statement of Rodney Rathbone",
      sworn: "Given much later, to you.",
      audio: "audio/account-rodney.mp3",
      beats: [
        ["The crash", "Toby’s screwdriver slipped, and the kick plate on the side door <mark class=\"shared\">crashed</mark> into a trash can. Sounded like a drum set falling down stairs. Toby dropped everything and ran."],
        ["The box", "I still had my dad’s socket set under my arm, a <mark class=\"shared\">gray metal box</mark> banging my ribs every step. Didn’t think to put it down. I just went after him."],
        ["“Rodney!”", "Somebody behind me yelled <mark class=\"shared\">“Rodney!”</mark> Right then, Toby hit the end of the alley and turned toward the street. Toward traffic. So I <mark class=\"shared\">sped up</mark>."],
      ],
    },
  };

  /* ------------------------------------------------------------------ *
   * Seen vs. Assumed ledger                                            *
   * ------------------------------------------------------------------ */
  const LEDGER = [
    { id: "box", seen: "Rodney running from the alley with a gray metal box.", assumed: "He had the fundraiser’s cash box.", fact: "His dad’s socket set. Forty-one sockets, zero dollars." },
    { id: "ran", seen: "He sped up when Connie called his name.", assumed: "He knew he’d been caught.", fact: "A scared kid had just reached the street. Rodney sped up to catch him." },
    { id: "cash", seen: "The cash box was gone from beside the register.", assumed: "Somebody stole it.", fact: "Mrs. Fenn moved it to the office for safekeeping. Every cent was there." },
    { id: "door", seen: "Fresh gouges around the side-door latch.", assumed: "Rodney broke in.", fact: "The door was never locked. Whoever pried at it never tried the handle." },
  ];

  /* ------------------------------------------------------------------ *
   * Evidence board (File 3)                                            *
   * ------------------------------------------------------------------ */
  const CARDS = [
    {
      id: "connie", kind: "witness", label: "Witness statement", title: "Connie Kendall",
      prompt: "Rodney asks: “When you saw me running, did you see the cash box? Or did you see <em>a</em> box?”",
      action: "Hear her answer",
      reveal: [
        ["p", "Connie opens her mouth to answer. Then she closes it again."],
        ["say", "Connie", "…A box. Gray. Metal. With a handle."],
        ["say", "Connie", "The cash box is gray and metal."],
        ["say", "Rodney", "So is half my dad’s garage."],
      ],
    },
    {
      id: "sockets", kind: "evidence", label: "Exhibit B", title: "The Gray Metal Box", image: "sockets",
      prompt: "Rodney sets his box on the counter and reaches for the latches.",
      action: "Open the box",
      ledger: ["box.fact"],
      reveal: [
        ["p", "Two latches. One lid. Inside: forty-one sockets, one ratchet, zero dollars. Scratched into the lid: <em>PROPERTY OF R. RATHBONE SR. RODNEY, PUT IT BACK.</em>"],
        ["say", "Rodney", "Borrowed. With permission. I’d like that on the record."],
      ],
    },
    {
      id: "board", kind: "evidence", label: "Exhibit C", title: "The Skateboard", art: "skateboard",
      prompt: "Behind the counter, under the raffle table, sits a scuffed skateboard with masking tape on it.",
      action: "Look closer",
      reveal: [
        ["p", "The tape says <em>CONFISCATED: NO RIDING THROUGH THE BAKE SALE.</em>"],
        ["say", "Rodney", "If somebody broke in to steal stuff, why’s the most stealable thing in the building still sitting here?"],
        ["say", "Rodney", "Who brought this in?"],
      ],
    },
    {
      id: "door", kind: "evidence", label: "Exhibit A", title: "The Side Door", art: "door",
      prompt: "Gouges around the latch. A bent kick plate. Rodney reaches for the handle.",
      action: "Try the handle",
      ledger: ["door.fact"],
      reveal: [
        ["p", "He presses down. The handle turns easily, and the door swings open without a sound."],
        ["say", "Rodney", "Somebody put a lot of work into a door that was never locked."],
        ["say", "Rodney", "Who used this door this morning?"],
      ],
    },
    {
      id: "fenn", kind: "witness", label: "Witness statement", title: "Mrs. Fenn, Fundraiser Volunteer",
      requires: ["board", "door"],
      lockText: "Rodney needs a reason to ask her. Look at the skateboard and the side door first.",
      prompt: "Rodney asks who brought in the skateboard and who used the side door.",
      action: "Hear her statement",
      reveal: [
        ["say", "Mrs. Fenn", "Well, both were me, dear. A young man rode that board straight through my lemon bars, so I brought it inside. And I propped the side door unlocked at seven for setup. We carried tables in and out all morning."],
        ["say", "Mrs. Fenn", "Oh! And the cash box. I moved it to the office around ten-thirty. Too many people near the register. I meant to tell somebody."],
      ],
    },
    {
      id: "cashbox", kind: "evidence", label: "Exhibit D", title: "The Cash Box", art: "cashBox",
      requires: ["fenn"],
      lockText: "Nobody knows where to look yet. Hear from Mrs. Fenn first.",
      prompt: "Whit’s office. On the desk, under a cardigan.",
      action: "Check the office",
      ledger: ["cash.fact"],
      reveal: [
        ["p", "One gray cash box, still locked. Inside: $312.50 and a roll of raffle tickets. Every cent accounted for."],
      ],
    },
  ];

  /* ------------------------------------------------------------------ *
   * First impression vote + later review                               *
   * ------------------------------------------------------------------ */
  const VOTE = {
    question: "What do you think was in Rodney’s hands?",
    options: [
      ["cash", "The fundraiser cash box", "Sealed. You’re in good company. Most of Odyssey said the same thing by lunch."],
      ["else", "Something else", "Sealed. That’s more benefit of the doubt than most of Odyssey gave him today."],
      ["more", "I need more evidence", "Sealed. A careful detective. Whit would approve."],
    ],
  };
  const voteLabel = (id) => (VOTE.options.find((o) => o[0] === id) || [])[1];

  const DETAILS = [
    ["boy", "Rodney sped up when the boy reached the street", "Same three beats, with one more thing to see. That’s the whole case, really."],
    ["abox", "Connie saw “a box,” not “the cash box”", "One small word. “A” instead of “the.” Half the town ran with the difference."],
    ["sockets", "The socket set: forty-one sockets, zero dollars", "Forty-one sockets make a very convincing defense."],
    ["board", "The skateboard still behind the counter", "The best clue was the thing nobody took. Rodney noticed what wasn’t missing."],
    ["unlocked", "The side door was never locked", "A damaged door that was never locked tells you a lot about whoever damaged it."],
    ["office", "The cash box, safe in the office", "Sometimes the missing thing is just in the next room."],
    ["toby", "Toby telling the truth himself", "Nothing settles a case like somebody telling the truth about himself."],
  ];
  const reviewQuestion = (vote) =>
    vote === "cash" ? "Which detail changed your mind?" :
    vote === "else" ? "Which detail backed up your hunch?" :
    "Which detail finally settled it for you?";

  /* ------------------------------------------------------------------ *
   * The story                                                          *
   * Blocks: ["p", html] ["say", who, html] ["think", who, html]        *
   *         ["beat"] ["note", html] ["rewind", text] ["stamp", text]   *
   *         ["sfx", text] ["account", key]                             *
   * ------------------------------------------------------------------ */
  const CHAPTERS = [
    {
      title: "The Accusation", short: "Accusation",
      scenes: [
        {
          time: "10:52 a.m. · Whit’s End fundraiser", heading: "Connie’s Account", image: "connie",
          ledger: ["box.seen", "ran.seen"],
          blocks: [
            ["p", "Saturday. The Whit’s End fundraiser had three kinds of brownies, a raffle for a hand-built birdhouse, and a jar of lemonade money that kept getting heavier. Connie Kendall was on napkin duty."],
            ["p", "This is her account. Every word of it is true."],
            ["account", "connie"],
          ],
        },
        {
          time: "10:58 a.m. · Back inside", heading: "Two Things Missing", art: "door",
          ledger: ["cash.seen", "door.seen"],
          blocks: [
            ["p", "Back inside, two things were wrong. The fundraiser’s cash box wasn’t in its usual spot beside the register. And the side door to the alley had fresh gouges around the latch, as if someone had gone at it with something sharp."],
            ["p", "Connie wasn’t trying to be unfair. She’d known Rodney a long time. She remembered the Bones of Rath, the things that went missing back then, and the excuses that came after. When a stove has burned you more than once, you stop testing whether it’s hot."],
            ["say", "Connie", "I know what I saw."],
            ["p", "She did. She just didn’t know yet which parts she’d seen and which parts she’d filled in."],
            ["note", "By lunchtime, half of Odyssey knew what happened. The other half heard it from the first half."],
            ["img", "rumor"],
          ],
        },
        {
          time: "Before you go further", heading: "Your First Impression", interactive: "vote",
          blocks: [
            ["p", "You’ve heard one witness. Before anyone else talks, make your call."],
          ],
        },
      ],
    },
    {
      title: "Rewind Ten Minutes", short: "Rewind",
      scenes: [
        {
          time: "10:42 a.m. · Ten minutes earlier", heading: "Gone Fishing (Almost)", art: "fishingPole",
          blocks: [
            ["rewind", "◀◀ REWIND 10:00"],
            ["p", "Rodney Rathbone had a plan for Saturday, and it was a good one: one lake, one fishing pole, zero people."],
            ["p", "He also had his dad’s socket set. Borrowed with permission, which he would like entered into the record. The reel on his fishing pole had one loose nut that had been mocking him for two weeks."],
            ["think", "Rodney", "Is a whole socket set overkill for one nut? Yes. Is it the right tool for the job? Also yes. Probably."],
            ["p", "He cut through the alley behind Whit’s End because alleys have fewer people in them, and people in Odyssey tended to have opinions about Rodney."],
          ],
        },
        {
          time: "10:49 a.m. · The alley", heading: "The Kid With the Screwdriver", art: "screwdriver",
          blocks: [
            ["p", "Halfway down the alley, Rodney spotted Toby Pruitt crouched by the side door of Whit’s End with a screwdriver. Toby was nine, lived two streets over, and had a skateboard sticker on everything he owned."],
            ["say", "Rodney", "Uh. Toby? What are you doing to Whit’s door?"],
            ["say", "Toby", "Mrs. Fenn took my skateboard ’cause I rode through the bake sale. It’s right inside. I’m just getting it back."],
            ["p", "Rodney opened his mouth to say several wise and mature things. Before any of them came out, Toby jammed the screwdriver into the gap by the latch and leaned on it."],
            ["note", "File this away: Toby never tried the handle."],
          ],
        },
        {
          time: "10:52 a.m. · The same ten seconds", heading: "Rodney’s Account", image: "rodney",
          blocks: [
            ["p", "Now the same ten seconds, from the other end of the alley. Same crash. Same box. Same shout. All of it true."],
            ["account", "rodney"],
          ],
        },
        {
          time: "Side by side", heading: "Same Ten Seconds, Two Witnesses", interactive: "compare",
          blocks: [
            ["p", "Put the two statements next to each other. The highlighted details appear in both. Nobody lied. They were looking in different directions."],
          ],
        },
        {
          time: "10:55 a.m. · By the hardware store", heading: "“I Got Experience”",
          blocks: [
            ["p", "Rodney caught up with Toby at the corner by the hardware store, mostly because Toby had stopped to cry behind a mailbox."],
            ["say", "Toby", "I broke it. I broke Whit’s End. They’re gonna call my mom. They’re gonna call my mom <em>and</em> the police."],
            ["p", "Rodney had been on the wrong side of a lot of doors in his life. He knew exactly what that feeling in Toby’s stomach was."],
            ["say", "Rodney", "Relax. I’ll handle it. I got experience in this area."],
            ["p", "Toby looked up at him like a drowning kid looks at a lifeguard. Rodney liked that look more than he expected to."],
            ["p", "It was the last good feeling he had for about two hours."],
          ],
        },
      ],
    },
    {
      title: "The Investigation", short: "Investigation",
      scenes: [
        {
          time: "12:20 p.m. · Behind the arcade", heading: "An Offer From Old Friends",
          blocks: [
            ["p", "News travels fast in Odyssey. By noon it had reached the arcade, where two former Bones of Rath, Kirby and Moose, were waiting for Rodney like a welcoming committee nobody had asked for."],
            ["say", "Kirby", "Heard you knocked over Whit’s End. Here’s the deal. You were with us all morning. We’ll swear to it."],
            ["say", "Moose", "We’re good at this. We’ve been practicing on our parents for years."],
            ["p", "Rodney thought about it, and he thought about it seriously. It would probably work. No questions about Toby. No standing in front of Connie. He could be at the lake by two."],
            ["think", "Rodney", "Except if I was at the arcade all morning, I didn’t see anything. And I saw everything."],
            ["say", "Rodney", "That’s the nicest lie anybody’s ever offered me. I gotta pass."],
            ["say", "Kirby", "Your funeral."],
            ["say", "Rodney", "It’s a fundraiser, actually."],
          ],
        },
        {
          time: "12:41 p.m. · Whit’s End", heading: "The Defense Calls Its First Witness",
          blocks: [
            ["p", "The bell over the door jingled, and every conversation in Whit’s End stopped at once, which makes a sound all its own."],
            ["say", "Connie", "You’ve got some nerve showing up here."],
            ["say", "Rodney", "Yeah, I get that a lot. Can I ask a few questions? Then you can go back to looking at me like that."],
            ["p", "Connie crossed her arms. It wasn’t a yes, but it wasn’t a no."],
            ["note", "Up next: Rodney builds his defense one fact at a time. Open every witness statement and evidence card you can."],
          ],
        },
        {
          time: "12:44 p.m. · The counter", heading: "The Evidence Board", interactive: "board",
          blocks: [
            ["p", "Open the cards in any order. Some answers lead to new questions."],
          ],
        },
        {
          time: "1:02 p.m. · The counter", heading: "“Why Didn’t You Stop?”",
          blocks: [
            ["p", "Mrs. Fenn came back from the office holding the gray cash box in both hands, with every dollar still inside. Everyone who had repeated the story suddenly found their sundaes very interesting."],
            ["p", "Connie looked at the cash box. Then at the socket set. Then at Rodney."],
            ["say", "Connie", "Why didn’t you just stop when I called you?"],
            ["say", "Rodney", "You want the answer from right now, or the answer from when I was running?"],
            ["say", "Connie", "Both."],
            ["say", "Rodney", "When I was running? When somebody yells my name like that, it’s never because I won the raffle. And I had somewhere to be."],
            ["beat"],
            ["say", "Rodney", "Right now? I was behind a busted door with a metal box, running away from somebody who said my name. If I’d seen that, I’d have thought it was me too."],
            ["p", "It was not a fun thing to realize. Connie had filled in half the story. Rodney had handed her the other half."],
            ["say", "Connie", "And the door? Who damaged the door?"],
            ["say", "Rodney", "Is that a question for the defense? Because the defense would like to go fishing."],
          ],
        },
      ],
    },
    {
      title: "The Choice", short: "Choice",
      scenes: [
        {
          time: "1:05 p.m. · The front step", heading: "Free to Go", art: "fishingPole",
          blocks: [
            ["p", "Rodney had his name back. His fishing pole was still leaning against the alley fence, and the lake hadn’t gone anywhere. All he had to do was leave."],
            ["think", "Rodney", "Not my door. Not my screwdriver. Not my problem. Technically I’m the victim here. A victim who is going fishing."],
            ["p", "He had one foot on the front step when he heard Connie’s voice from the back room."],
          ],
        },
        {
          time: "1:06 p.m. · Overheard", heading: "Somebody Has to Pay",
          blocks: [
            ["say", "Connie", "I hate to ask, Mrs. Fenn. But the repair can’t come out of the fundraiser money, and you were supposed to lock up after setup. Would you be willing to cover it?"],
            ["say", "Mrs. Fenn", "Oh. Well. Of course, dear. It was my door to lock. I’ll manage."],
            ["p", "She said it like someone who would manage by going without something."],
            ["p", "Rodney stood very still. Mrs. Fenn called everybody “dear,” including him. Last year she had sold him a brownie after the rest of the bake-sale table decided not to."],
            ["say", "Rodney, under his breath", "Aw, come on."],
          ],
        },
        {
          time: "1:20 p.m. · The alley", heading: "“You Said You’d Handle It”", image: "step",
          blocks: [
            ["p", "Rodney found Toby in the alley, sitting on a crate next to the door he’d wrecked. He had come back on his own. He just hadn’t made it inside."],
            ["say", "Toby", "Did you handle it?"],
            ["say", "Rodney", "Kind of. I handled <em>me</em>. You’re still… pending."],
            ["say", "Toby", "You said you’d handle it."],
            ["say", "Rodney", "I did say that. I say a lot of stuff when I’m trying to sound like I know what I’m doing."],
            ["beat"],
            ["say", "Rodney", "I’ll go in with you, though."],
            ["p", "Toby thought it over. Then he dug into his pocket, counted out four dollars and sixty cents, and made the face people make in a dentist’s waiting room."],
          ],
        },
      ],
    },
    {
      title: "The Verdict", short: "Verdict",
      scenes: [
        {
          time: "1:24 p.m. · Whit’s End", heading: "The Kid Testifies",
          ledger: ["ran.fact"],
          blocks: [
            ["p", "The bell over the door jingled again. This time nobody looked at Rodney. They looked at the small kid standing in front of him."],
            ["say", "Connie", "Toby? Is something wrong?"],
            ["beat"],
            ["p", "Toby took a long time to start. Rodney didn’t fill the silence for him. Neither did anyone else."],
            ["say", "Toby", "I did the door. I wanted my board back. I didn’t even try the handle."],
            ["beat"],
            ["say", "Toby", "Rodney didn’t do anything. He just chased me ’cause I was running at the street. I’ve got four dollars and sixty cents. And I can sweep. And carry stuff. I’ll work off the rest."],
            ["p", "Mrs. Fenn set down her lemon bars and looked at Toby for a long moment. Then she smiled."],
            ["say", "Mrs. Fenn", "Well. I could use a good sweeper. You may have your board back when we’re finished. And you may attend future bake sales on foot."],
          ],
        },
        {
          time: "1:30 p.m. · In front of everybody", heading: "Connie Sets the Record Straight",
          blocks: [
            ["say", "Connie", "Rodney, I’m sorry. I saw you running, and I’d decided what happened before I’d really seen anything. Then I said it out loud. To a lot of people."],
            ["say", "Rodney", "To be fair, I did run. And I’ve earned some of that. Like, a lot of it. There’s a whole file."],
            ["say", "Connie", "Then you’ve earned a new page in it."],
            ["p", "She turned to the room: the bake table, the man from the hardware store, the two moms by the raffle jar."],
            ["say", "Connie", "Everyone? Can I have a minute? This morning I told some of you that Rodney took the cash box. He didn’t. Nobody did. I was wrong, and I said it loudly, so I’m saying this loudly too."],
            ["p", "Then she picked up the phone behind the counter and went down the list of everyone she’d told. It was longer than she wanted to admit."],
          ],
        },
        {
          time: "1:45 p.m. · The counter", heading: "The Defense Admits Something",
          blocks: [
            ["say", "Rodney", "Since everybody’s being honest… I almost didn’t come back. I cleared my name and had one foot out the door. Mrs. Fenn was gonna pay for it, and I was gonna let her."],
            ["say", "Whit", "What changed your mind?"],
            ["say", "Rodney", "She sold me a brownie once."],
            ["beat"],
            ["say", "Rodney", "And I told a nine-year-old I’d handle it."],
            ["say", "Whit", "You could have walked away clean, and you came back anyway. That counts for more than you think."],
            ["p", "Rodney didn’t know what to do with that, so he looked at the floor. It was very clean. Toby had already started sweeping."],
          ],
        },
        {
          time: "2:10 p.m. · The alley door", heading: "Exhibit E: A Screwdriver", image: "screwdriver", interactive: "review",
          blocks: [
            ["p", "Whit carried a toolbox out to the alley, where Toby was already kneeling by the splintered trim. Whit held out a screwdriver. It was Toby’s, the one he’d dropped on the step that morning."],
            ["say", "Whit", "This door needs new trim and a straightened kick plate. I could use somebody who knows his way around a socket set. Will you help with the repair?"],
            ["p", "Rodney looked at the screwdriver. Then at Connie. Then back at the screwdriver."],
            ["say", "Rodney", "Before I touch this, can we get a witness?"],
            ["p", "Connie laughed for the first time all day."],
            ["say", "Connie", "I’ll stand right here."],
            ["stamp", "Verdict: Not guilty. Also: hired."],
          ],
        },
        {
          time: "Later that afternoon · The back booth", heading: "Rodney’s Closing Argument", image: "closing", optional: true, interactive: "closing",
          blocks: [
            ["p", "Whit found an old cassette recorder in the back. As part of working off the door, Toby agreed to type up whatever Rodney said into it. He was told to type <em>everything</em>."],
          ],
        },
      ],
    },
    {
      title: "Epilogue", short: "Epilogue",
      scenes: [
        {
          time: "Three weeks later · The Rathbones’ garage", heading: "A Knock on the Garage Door", art: "socketSet", interactive: "closed",
          blocks: [
            ["p", "Saturday again. The reel on Rodney’s fishing pole finally clicked the way a reel is supposed to. The lake was waiting, and for once nobody in Odyssey was talking about him."],
            ["p", "Then Toby Pruitt came running up the driveway, out of breath, with his skateboard under one arm."],
            ["say", "Toby", "I knocked over Lily Okafor’s bike with my board. The fender’s all bent and the chain came off. She doesn’t know yet."],
            ["beat"],
            ["say", "Toby", "Will you come with me while I tell her?"],
            ["p", "Rodney looked at the fishing pole. He looked at the blue, lake-shaped Saturday he had planned."],
            ["p", "Then he set the pole against the wall and picked up his tools."],
            ["say", "Rodney", "Bring your four dollars."],
            ["say", "Toby", "I’ve got six now."],
            ["say", "Rodney", "Look at you. Growing."],
          ],
        },
      ],
    },
  ];

  /* Rodney's closing argument, as typed up by Toby. */
  const CLOSING = {
    head: "TRANSCRIPT. Rodney’s Closing Argument, as dictated to a cassette recorder. Typed by T. Pruitt, who was told to type everything.",
    paras: [
      "Ladies and gentlemen of Odyssey. No, scratch that. It’s Mrs. Fenn and a guy eating a sundae. Just put “Odyssey.”",
      "Okay. I’ve given this town plenty of reasons to suspect me. Years of reasons. Change “years” to “some.” …Fine. Leave “years.”",
      "Connie saw a crash, a box, and me running. All true. What she <em>told</em> people was that I stole the cash box. That part got built, and some of the lumber was mine. Then everybody who heard it added a little. By the time I got to the end of the block, I’d stolen money I didn’t even know we had.",
      "So yeah. I was mad. M-A-D, Toby. Not “sad.”",
      "This next part, don’t type. …Okay. Type it. I was mad that everybody assumed the worst about me. And the whole time, I was ready to let Mrs. Fenn pay for a door she didn’t break. Same thing. Other direction.",
      "So. Thanks, Connie. For telling everybody you were wrong. I bet that was harder than telling them the first time.",
      "The defense rests. Don’t type “rests.” It sounds like I’m taking a nap.",
    ],
    tail: [
      ["typist", "[Connie came over to the booth here. The tape is still going.]"],
      ["line", "CONNIE: Rodney. I’m proud of you."],
      ["typist", "[Long pause. Tape hiss.]"],
      ["line", "RODNEY: Okay. Cool. That’s… yep. Thanks."],
      ["line", "RODNEY: Toby, when you type this up, don’t type that."],
      ["typist", "[T.P.: Typed it.]"],
    ],
  };

  /* ------------------------------------------------------------------ *
   * State                                                              *
   * ------------------------------------------------------------------ */
  const KEY = "rodney-case-v2";
  const fresh = () => ({ ch: 0, sc: 0, maxCh: 0, vote: null, detail: null, cards: [], ledger: [] });
  const load = () => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && Number.isInteger(s.ch) && CHAPTERS[s.ch] && CHAPTERS[s.ch].scenes[s.sc]) return Object.assign(fresh(), s);
    } catch (e) { /* storage unavailable */ }
    return null;
  };
  const saved = load();
  let state = saved || fresh();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } };
  const has = (arr, v) => arr.indexOf(v) !== -1;
  const addTo = (arr, v) => { if (!has(arr, v)) { arr.push(v); return true; } return false; };

  const freshLedger = new Set();
  const addLedger = (keys) => (keys || []).forEach((k) => { if (addTo(state.ledger, k)) freshLedger.add(k.split(".")[0]); });

  /* ------------------------------------------------------------------ *
   * Rendering helpers                                                  *
   * ------------------------------------------------------------------ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const failedImages = new Set();
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* A drawing slot: the supplied icon if there is one, otherwise the inline SVG. */
  const artSlot = (key, alt, cls) => {
    const icon = ICONS[key];
    if (icon && !failedImages.has(icon)) {
      return `<div class="${cls}"><img src="${icon}" alt="${esc(alt)}" width="480" height="420" loading="lazy" data-fallback="${key}"></div>`;
    }
    return `<div class="${cls}" role="img" aria-label="${esc(alt)}">${drawing(key)}</div>`;
  };

  const drawingFigure = (key, caption, alt, i) =>
    `<figure class="art drawing line" style="--i:${i}">${artSlot(key, alt, "frame")}${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;

  const imageFigure = (key, i) => {
    const im = IMAGES[key];
    if (failedImages.has(im.src)) return im.fallback ? drawingFigure(im.fallback, im.caption, im.alt, i) : "";
    if (im.portrait) {
      return `<figure class="art portrait line" style="--i:${i}"><div class="frame"><img src="${im.src}" alt="${esc(im.alt)}" width="848" height="1264" decoding="async" data-remove-on-error></div><figcaption>${im.caption}</figcaption></figure>`;
    }
    return `<figure class="art line" style="--i:${i}"><div class="frame"><img src="${im.src}" alt="${esc(im.alt)}" width="1376" height="768" decoding="async" data-fallback="${im.fallback}"></div><figcaption>${im.caption}</figcaption></figure>`;
  };

  const ART_ALT = {
    door: "Drawing of a side door in a brick alley wall, with pry marks by the latch and a bent kick plate.",
    socketSet: "Drawing of an open metal socket set: a ratchet in the lid and two rows of sockets in the tray.",
    metalBox: "Drawing of a closed gray metal box with a handle and two latches, with motion lines.",
    cashBox: "Drawing of a small gray cash box with a key lock.",
    skateboard: "Drawing of a scuffed skateboard with a strip of masking tape on the deck.",
    fishingPole: "Drawing of a fishing pole with a reel, a curling line, and a red and white bobber.",
    screwdriver: "Drawing of a red-handled screwdriver.",
  };

  const accountHTML = (key, i, withAudio) => {
    const a = ACCOUNTS[key];
    return `<section class="account line" style="--i:${i}" aria-label="${esc(a.title)}">
      <h3>${a.title}</h3><p class="sworn">${a.sworn}</p>
      <ol>${a.beats.map((b, n) => `<li><span class="beat-label">${n + 1} · ${b[0]}</span><p>${b[1]}</p></li>`).join("")}</ol>
      ${withAudio ? audioButton(a.audio, key === "connie" ? "Connie’s account" : "Rodney’s account") : ""}
    </section>`;
  };

  const audioButton = (src, label) =>
    `<button type="button" class="btn btn-small" data-audio="${src}" data-label="${esc(label)}" hidden><span class="ico" aria-hidden="true">▶</span> <span class="lbl">Play ${label}</span></button>`;

  const compareHTML = (i) => `
    <div class="compare line" style="--i:${i}">
      ${accountHTML("connie", 0, true)}
      ${accountHTML("rodney", 0, true)}
    </div>
    <p class="compare-key line" style="--i:${i + 1}">Highlighted details appear in both accounts: the crash, the gray metal box, “Rodney!”, and speeding up.</p>`;

  const blockHTML = (b, i) => {
    const st = `style="--i:${i}"`;
    switch (b[0]) {
      case "p": return `<p class="line" ${st}>${b[1]}</p>`;
      case "say": return `<p class="line say" ${st}><span class="who">${b[1]}</span><span class="q">“${b[2]}”</span></p>`;
      case "think": return `<p class="line think" ${st}><span class="who">${b[1]}, to himself</span><span class="q">${b[2]}</span></p>`;
      case "beat": return `<p class="line beat" ${st}><span aria-hidden="true">· · ·</span><span class="sr-only">A beat passes.</span></p>`;
      case "note": return `<p class="line note" ${st}>${b[1]}</p>`;
      case "rewind": return `<p class="line" ${st}><span class="rewind-banner">${b[1]}</span></p>`;
      case "stamp": return `<p class="line" ${st}><span class="stamp">${b[1]}</span></p>`;
      case "sfx": return `<p class="line sfx" ${st}>${b[1]}</p>`;
      case "account": return accountHTML(b[1], i, true);
      case "img": return imageFigure(b[1], i);
      default: return "";
    }
  };
  const blocksHTML = (blocks, start = 0) => blocks.map((b, k) => blockHTML(b, start + k)).join("");

  /* ------------------------------------------------------------------ *
   * Interactive pieces                                                 *
   * ------------------------------------------------------------------ */
  const voteHTML = () => {
    if (state.vote) {
      const opt = VOTE.options.find((o) => o[0] === state.vote);
      return `<div class="vote line" style="--i:2"><p class="sealed">Your first impression: <strong>“${opt[1]}.”</strong></p><p class="response">${opt[2]}</p><p class="private">Private. Only you can see this, and it stays on this device.</p></div>`;
    }
    return `<form class="vote line" style="--i:2" id="vote-form" novalidate>
      <fieldset>
        <legend>${VOTE.question}</legend>
        <p class="private">Private. Nobody else sees your answer. It stays on this device, and the case file hands it back to you at the end.</p>
        ${VOTE.options.map((o) => `<label class="choice"><input type="radio" name="vote" value="${o[0]}"> <span>${o[1]}</span></label>`).join("")}
      </fieldset>
      <button type="submit" class="btn btn-primary">Seal my answer</button>
      <p class="gate-hint" id="vote-hint" aria-live="polite"></p>
    </form>`;
  };

  const cardOpen = new Set(state.cards);
  const cardLocked = (c) => (c.requires || []).some((r) => !has(state.cards, r));

  const cardHTML = (c) => {
    const locked = cardLocked(c);
    const examined = has(state.cards, c.id);
    const open = examined && cardOpen.has(c.id);
    let pic = "";
    if (c.image) {
      const im = IMAGES[c.image];
      pic = failedImages.has(im.src)
        ? `<div class="mini" role="img" aria-label="${esc(ART_ALT[im.fallback])}">${drawing(im.fallback)}</div>`
        : `<div class="mini-wrap"><img class="mini-photo" src="${im.src}" alt="${esc(im.alt)}" width="1376" height="768" loading="lazy" data-fallback="${im.fallback}"></div>`;
    } else if (c.art) {
      pic = artSlot(c.art, ART_ALT[c.art], "mini");
    }
    return `<li class="card ${c.kind}${examined ? " examined" : ""}">
      <p class="card-kind">${c.label}</p>
      <h3>${c.title}</h3>
      ${pic}
      <p class="card-prompt">${c.prompt}</p>
      ${locked
        ? `<button type="button" class="btn btn-small" disabled>Locked</button><p class="card-lock">${c.lockText}</p>`
        : `<button type="button" class="btn btn-small" data-card="${c.id}" aria-expanded="${open}" aria-controls="card-${c.id}">${open ? "Close card" : examined ? "Reopen card" : c.action}</button>`}
      <div class="card-reveal" id="card-${c.id}" ${open ? "" : "hidden"}>${blocksHTML(c.reveal).replace(/ class="line/g, ' class="')}</div>
    </li>`;
  };

  const boardHTML = () => {
    const n = state.cards.length;
    return `<div class="board line" style="--i:1" id="board">
      <p class="board-count" id="board-count" aria-live="polite">${n} of ${CARDS.length} examined${n === CARDS.length ? ". The defense is ready." : "."}</p>
      <ul class="cards">${CARDS.map(cardHTML).join("")}</ul>
    </div>`;
  };

  const reviewHTML = (i) => {
    const first = state.vote
      ? `<p class="sealed">Before you heard Rodney’s side, you said he was holding: <strong>“${voteLabel(state.vote)}.”</strong></p>`
      : `<p class="sealed">You didn’t record a first impression. The case went on without you, which is how most of Odyssey found out about it too.</p>`;
    const chosen = DETAILS.find((d) => d[0] === state.detail);
    return `<section class="review line" style="--i:${i}" aria-labelledby="review-h">
      <h3 id="review-h" class="sr-only">Your first impression</h3>
      ${first}
      <form id="detail-form" novalidate>
        <fieldset>
          <legend>${reviewQuestion(state.vote)}</legend>
          <p class="private">Also private. Pick the one that mattered most.</p>
          ${DETAILS.map((d) => `<label class="choice"><input type="radio" name="detail" value="${d[0]}" ${state.detail === d[0] ? "checked" : ""}> <span>${d[1]}</span></label>`).join("")}
        </fieldset>
        <button type="submit" class="btn">Note it in the file</button>
        <p class="response" id="detail-response" aria-live="polite">${chosen ? chosen[2] : ""}</p>
      </form>
      <div class="account-replay">
        <button type="button" class="btn btn-quiet" id="replay-accounts" aria-expanded="false" aria-controls="accounts-again">↺ Replay both accounts</button>
        <button type="button" class="btn btn-quiet" data-goto="5,0">Skip the closing argument →</button>
      </div>
      <div id="accounts-again" hidden></div>
    </section>`;
  };

  const closingHTML = (i) => `
    <div class="transcript line" style="--i:${i}">
      <p class="transcript-head">${CLOSING.head}</p>
      ${CLOSING.paras.map((p) => `<p>${p}</p>`).join("")}
      ${CLOSING.tail.map((t) => t[0] === "typist" ? `<p class="typist">${t[1]}</p>` : `<p>${t[1]}</p>`).join("")}
    </div>`;

  const closedHTML = (i) => `
    <p class="line" style="--i:${i}"><span class="stamp">Case Closed</span></p>
    <div class="end-actions line" style="--i:${i + 1}">
      <button type="button" class="btn" data-goto="0,0">Read it again from the top</button>
      <button type="button" class="btn btn-quiet" data-goto="1,3">Replay both accounts</button>
      <button type="button" class="btn btn-quiet" data-open-script>Read the audio script</button>
    </div>`;

  /* ------------------------------------------------------------------ *
   * Main render                                                        *
   * ------------------------------------------------------------------ */
  const els = {};
  const totalScenes = CHAPTERS.reduce((n, c) => n + c.scenes.length, 0);
  const globalIndex = () => CHAPTERS.slice(0, state.ch).reduce((n, c) => n + c.scenes.length, 0) + state.sc;

  function render(opts = {}) {
    const chap = CHAPTERS[state.ch];
    const scene = chap.scenes[state.sc];
    addLedger(scene.ledger);
    state.maxCh = Math.max(state.maxCh, state.ch);

    let i = 0;
    let html = `<div class="scene-meta">
        <span class="file-label">File ${state.ch + 1} of ${CHAPTERS.length} · ${chap.title}</span>
        <span>${scene.optional ? '<span class="optional-tag">Optional</span> ' : ""}<span class="timestamp">${scene.time}</span></span>
      </div>
      <h2 class="scene-title" id="scene-title" tabindex="-1">${scene.heading}</h2>`;
    if (scene.image) html += imageFigure(scene.image, i++);
    else if (scene.art) html += drawingFigure(scene.art, "", ART_ALT[scene.art], i++);
    html += `<div class="blocks">${blocksHTML(scene.blocks, i)}</div>`;
    i += scene.blocks.length;

    switch (scene.interactive) {
      case "vote": html += voteHTML(); break;
      case "board": html += boardHTML(); break;
      case "compare": html += compareHTML(i); break;
      case "review": html += reviewHTML(i); break;
      case "closing": html += closingHTML(i); break;
      case "closed": html += closedHTML(i); break;
    }

    els.stage.innerHTML = html;
    checkImages(els.stage);
    activateAudio(els.stage);
    bindScene(scene);
    renderTabs();
    renderControls(scene);
    renderSidebar();
    play();
    save();

    if (opts.focus) {
      const h = $("#scene-title");
      els.stage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      h.focus({ preventScroll: true });
    }
  }

  function play() {
    els.stage.classList.remove("play");
    void els.stage.offsetWidth; // restart CSS animations
    els.stage.classList.add("play");
  }

  function renderTabs() {
    els.tabs.innerHTML = CHAPTERS.map((c, k) => {
      const cur = k === state.ch;
      const locked = k > state.maxCh;
      const done = k < state.maxCh;
      return `<li><button type="button" data-ch="${k}" ${cur ? 'aria-current="step"' : ""} ${locked ? "disabled" : ""} aria-label="File ${k + 1}: ${c.title}${locked ? " (not opened yet)" : done ? " (read)" : ""}">
        <span class="num">${k + 1}</span>${c.short}${done ? '<span class="done" aria-hidden="true">✓</span>' : ""}</button></li>`;
    }).join("");
  }

  function nextTarget() {
    const chap = CHAPTERS[state.ch];
    if (state.sc < chap.scenes.length - 1) return [state.ch, state.sc + 1];
    if (state.ch < CHAPTERS.length - 1) return [state.ch + 1, 0];
    return null;
  }
  function prevTarget() {
    if (state.sc > 0) return [state.ch, state.sc - 1];
    if (state.ch > 0) return [state.ch - 1, CHAPTERS[state.ch - 1].scenes.length - 1];
    return null;
  }

  function renderControls(scene) {
    const n = nextTarget();
    const p = prevTarget();
    els.prev.disabled = !p;
    const gated = scene.interactive === "vote" && !state.vote;
    els.next.disabled = !n || gated;
    if (!n) {
      els.next.innerHTML = "The End";
    } else if (n[0] !== state.ch) {
      els.next.innerHTML = `Next file: ${CHAPTERS[n[0]].short} <span aria-hidden="true">→</span>`;
    } else if (CHAPTERS[n[0]].scenes[n[1]].optional) {
      els.next.innerHTML = `Closing Argument (optional) <span aria-hidden="true">→</span>`;
    } else {
      els.next.innerHTML = `Next <span aria-hidden="true">→</span>`;
    }
    const chap = CHAPTERS[state.ch];
    els.progressText.textContent = gated
      ? "Seal your first impression to continue."
      : `Scene ${state.sc + 1} of ${chap.scenes.length} in this file`;
    els.progressFill.style.width = `${Math.round(((globalIndex() + 1) / totalScenes) * 100)}%`;
  }

  function renderSidebar() {
    els.yourCall.innerHTML = state.vote
      ? `<h3>Your First Impression</h3><p>Rodney was holding: <strong>“${voteLabel(state.vote)}.”</strong> <span class="pending">(Private.)</span></p>`
      : "";
    const rows = LEDGER.filter((r) => has(state.ledger, r.id + ".seen"));
    const solved = rows.filter((r) => has(state.ledger, r.id + ".fact")).length;
    els.ledgerSub.textContent = rows.length
      ? `${solved} of ${LEDGER.length} assumptions tested against the evidence.`
      : "Nothing on file yet. Keep reading.";
    els.ledger.innerHTML = rows.map((r) => {
      const isSolved = has(state.ledger, r.id + ".fact");
      return `<li class="ledger-row${isSolved ? " solved" : ""}${freshLedger.has(r.id) ? " fresh" : ""}">
        <dl>
          <dt>Seen</dt><dd>${r.seen}</dd>
          <dt>Assumed</dt><dd class="assumed">${r.assumed}</dd>
          <dt>Evidence shows</dt><dd>${isSolved ? `<span class="fact">${r.fact}</span>` : '<span class="pending">Under investigation.</span>'}</dd>
        </dl></li>`;
    }).join("");
    freshLedger.clear();
  }

  function go(ch, sc, focus = true) {
    state.ch = ch; state.sc = sc;
    render({ focus });
  }
  const next = () => { const t = nextTarget(); if (t && !els.next.disabled) go(t[0], t[1]); };
  const prev = () => { const t = prevTarget(); if (t) go(t[0], t[1]); };

  /* ------------------------------------------------------------------ *
   * Scene bindings                                                     *
   * ------------------------------------------------------------------ */
  function bindScene(scene) {
    if (scene.interactive === "vote") {
      const form = $("#vote-form");
      if (form) form.addEventListener("submit", (e) => {
        e.preventDefault();
        const v = form.querySelector("input[name=vote]:checked");
        if (!v) { $("#vote-hint").textContent = "Pick one first. It stays private."; form.querySelector("input").focus(); return; }
        state.vote = v.value;
        render();
        const sealed = els.stage.querySelector(".sealed");
        if (sealed) { sealed.setAttribute("tabindex", "-1"); sealed.focus(); }
      });
    }
    if (scene.interactive === "review") {
      const form = $("#detail-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const v = form.querySelector("input[name=detail]:checked");
        const out = $("#detail-response");
        if (!v) { out.textContent = "Pick the detail that mattered most."; return; }
        state.detail = v.value; save();
        out.textContent = DETAILS.find((d) => d[0] === v.value)[2];
      });
      const btn = $("#replay-accounts");
      const box = $("#accounts-again");
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        if (open) {
          box.hidden = true; box.innerHTML = "";
          btn.setAttribute("aria-expanded", "false");
          btn.textContent = "↺ Replay both accounts";
        } else {
          box.innerHTML = `<div class="play">${compareHTML(0)}</div>`;
          box.hidden = false;
          activateAudio(box);
          btn.setAttribute("aria-expanded", "true");
          btn.textContent = "Hide the accounts";
          const first = box.querySelector(".account");
          if (first) { first.setAttribute("tabindex", "-1"); first.focus(); }
        }
      });
    }
  }

  function toggleCard(id) {
    if (addTo(state.cards, id)) {
      cardOpen.add(id);
      const card = CARDS.find((c) => c.id === id);
      addLedger(card.ledger);
    } else if (cardOpen.has(id)) {
      cardOpen.delete(id);
    } else {
      cardOpen.add(id);
    }
    const board = $("#board");
    const tmp = document.createElement("div");
    tmp.innerHTML = boardHTML();
    const fresh = tmp.firstElementChild;
    fresh.classList.remove("line");
    board.replaceWith(fresh);
    checkImages(fresh);
    renderSidebar();
    save();
    const btn = fresh.querySelector(`[data-card="${id}"]`);
    if (btn) btn.focus();
  }

  /* ------------------------------------------------------------------ *
   * Images: fall back to drawings when a file is missing               *
   * ------------------------------------------------------------------ */
  function swapImage(img) {
    const src = img.getAttribute("src");
    failedImages.add(src);
    if (img.dataset.fallback) {
      const holder = img.parentElement;
      const key = img.dataset.fallback;
      const wrap = document.createElement("div");
      wrap.className = holder.classList.contains("mini-wrap") ? "mini" : holder.className;
      wrap.setAttribute("role", "img");
      wrap.setAttribute("aria-label", img.alt);
      wrap.innerHTML = drawing(key);
      holder.replaceWith(wrap);
      const fig = wrap.closest("figure");
      if (fig) fig.classList.add("drawing");
    } else if (img.hasAttribute("data-remove-on-error")) {
      const fig = img.closest("figure");
      if (fig) fig.remove();
    } else if (img.dataset.hideOnError) {
      img.hidden = true;
      const alt = document.getElementById(img.dataset.hideOnError);
      if (alt) alt.hidden = false;
    }
  }
  document.addEventListener("error", (e) => {
    if (e.target instanceof HTMLImageElement && (e.target.dataset.fallback || e.target.dataset.hideOnError || e.target.hasAttribute("data-remove-on-error"))) swapImage(e.target);
  }, true);
  function checkImages(root) {
    root.querySelectorAll("img[data-fallback], img[data-hide-on-error], img[data-remove-on-error]").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) swapImage(img);
    });
  }

  /* ------------------------------------------------------------------ *
   * Audio: controls appear only when a recording exists                *
   * ------------------------------------------------------------------ */
  const probes = new Map();
  function probe(src) {
    if (!probes.has(src)) {
      probes.set(src, new Promise((resolve) => {
        const a = new Audio();
        const t = setTimeout(() => resolve(false), 8000);
        a.addEventListener("loadedmetadata", () => { clearTimeout(t); resolve(true); }, { once: true });
        a.addEventListener("error", () => { clearTimeout(t); resolve(false); }, { once: true });
        a.preload = "metadata";
        a.src = src;
      }));
    }
    return probes.get(src);
  }
  function activateAudio(root) {
    const buttons = [...root.querySelectorAll("button[data-audio]")];
    return Promise.all(buttons.map((b) => probe(b.dataset.audio).then((ok) => { if (ok) b.hidden = false; return ok; })));
  }

  const player = new Audio();
  let playingBtn = null;
  const setPlaying = (btn, on) => {
    if (!btn) return;
    btn.querySelector(".ico").textContent = on ? "❚❚" : "▶";
    btn.querySelector(".lbl").textContent = `${on ? "Pause" : "Play"} ${btn.dataset.label}`;
  };
  player.addEventListener("play", () => setPlaying(playingBtn, true));
  player.addEventListener("pause", () => setPlaying(playingBtn, false));
  player.addEventListener("ended", () => setPlaying(playingBtn, false));
  function toggleAudio(btn) {
    const src = btn.dataset.audio;
    if (playingBtn === btn && !player.paused) { player.pause(); return; }
    if (playingBtn && playingBtn !== btn) setPlaying(playingBtn, false);
    if (player.getAttribute("src") !== src) player.src = src;
    playingBtn = btn;
    player.play().catch(() => setPlaying(btn, false));
  }

  /* ------------------------------------------------------------------ *
   * Audio script panel                                                 *
   * ------------------------------------------------------------------ */
  function renderScript() {
    const S = window.AUDIO_SCRIPT;
    const body = $("#script-body");
    if (!S || !body) return;
    const cue = (c) => {
      switch (c[0]) {
        case "sfx": return `<p class="cue"><span class="cue-tag">SFX</span>${c[1]}</p>`;
        case "music": return `<p class="cue"><span class="cue-tag">MUSIC</span>${c[1]}</p>`;
        case "silence": return `<p class="cue silence"><span class="cue-tag">SILENCE</span>${c[1]}</p>`;
        case "line": return `<p><span class="spk">${c[1]}</span><span class="line-text">${c[3] ? `<span class="dir">(${c[3]})</span> ` : ""}${c[2]}</span></p>`;
        default: return "";
      }
    };
    body.innerHTML = `
      <div class="script-tools">
        <p class="audio-status" id="audio-status">${S.runtime}. No recording has been added yet, so read along below. Play buttons appear here automatically once audio files are in place.</p>
        <label class="choice" id="transcript-toggle-wrap" hidden style="margin:0"><input type="checkbox" id="transcript-toggle" checked> <span>Show transcript</span></label>
        ${audioButton(S.full, "the full episode")}
      </div>
      <dl class="cast">${S.cast.map((c) => `<dt>${c[0]}</dt><dd>${c[1]}</dd>`).join("")}</dl>
      ${S.scenes.map((sc) => `
        <section class="script-scene" aria-labelledby="ss-${sc.id}">
          <div class="script-scene-head"><h3 id="ss-${sc.id}">${sc.title}</h3>${audioButton(sc.audio, sc.short || sc.title)}</div>
          <div class="script-lines">${sc.cues.map(cue).join("")}</div>
        </section>`).join("")}
      <details class="prod-notes"><summary>Production notes</summary><ul>${S.notes.map((n) => `<li>${n}</li>`).join("")}</ul></details>`;
    activateAudio(body).then((results) => {
      if (results.some(Boolean)) {
        $("#audio-status").textContent = `${S.runtime}. Click any play button to listen. The transcript can stay open while you do.`;
        $("#transcript-toggle-wrap").hidden = false;
      }
    });
    $("#transcript-toggle").addEventListener("change", (e) => {
      $("#script-panel").classList.toggle("hide-transcript", !e.target.checked);
    });
  }

  function openScript() {
    const btn = $("#script-toggle");
    const body = $("#script-body");
    if (body.hidden) {
      body.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "Hide the script";
    }
    $("#script-section").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    $("#script-heading").focus({ preventScroll: true });
  }

  /* ------------------------------------------------------------------ *
   * Init                                                               *
   * ------------------------------------------------------------------ */
  function openCase() {
    els.case.hidden = false;
    render({ focus: true });
  }

  function init() {
    els.case = $("#case");
    els.stage = $("#stage");
    els.tabs = $("#file-tabs");
    els.prev = $("#prev");
    els.next = $("#next");
    els.replay = $("#replay");
    els.progressText = $("#progress-text");
    els.progressFill = $("#progress-fill");
    els.yourCall = $("#your-call");
    els.ledger = $("#ledger-list");
    els.ledgerSub = $("#ledger-sub");

    checkImages(document);

    if (saved && (saved.ch > 0 || saved.sc > 0)) $("#resume-note").hidden = false;

    $("#open-case").addEventListener("click", openCase);
    els.next.addEventListener("click", next);
    els.prev.addEventListener("click", prev);
    els.replay.addEventListener("click", () => { play(); $("#scene-title").focus(); });
    $("#restart").addEventListener("click", () => {
      if (!window.confirm("Start the case over? Your sealed first impression and notes will be cleared.")) return;
      state = fresh();
      cardOpen.clear();
      save();
      render({ focus: true });
    });

    els.tabs.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-ch]");
      if (b && !b.disabled) go(Number(b.dataset.ch), 0);
    });

    document.addEventListener("click", (e) => {
      const audio = e.target.closest("button[data-audio]");
      if (audio) { toggleAudio(audio); return; }
      const card = e.target.closest("button[data-card]");
      if (card) { toggleCard(card.dataset.card); return; }
      const g = e.target.closest("[data-goto]");
      if (g) { const [c, s] = g.dataset.goto.split(",").map(Number); go(c, s); return; }
      if (e.target.closest("[data-open-script]")) openScript();
    });

    const scriptBtn = $("#script-toggle");
    scriptBtn.addEventListener("click", () => {
      const body = $("#script-body");
      const open = body.hidden;
      body.hidden = !open;
      scriptBtn.setAttribute("aria-expanded", String(open));
      scriptBtn.textContent = open ? "Hide the script" : "Show the script";
    });
    renderScript();

    document.addEventListener("keydown", (e) => {
      if (els.case.hidden || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const t = e.target;
      if (t.closest && (t.closest("input, textarea, select, [contenteditable]") || t.closest("#script-section"))) return;
      if (e.key === "ArrowRight") { if (!els.next.disabled) { e.preventDefault(); next(); } }
      else if (e.key === "ArrowLeft") { if (!els.prev.disabled) { e.preventDefault(); prev(); } }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
