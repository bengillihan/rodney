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

  /* ------------------------------------------------------------------ *
   * Supplied illustrations (each falls back gracefully if missing)     *
   * ------------------------------------------------------------------ */
  const IMAGES = {
    connie: {
      src: "images/01-connie-sees-rodney.jpg", fallback: "metalBox",
      alt: "From the side door of Whit’s End, Connie watches Rodney run down the alley with a gray metal box under his arm. The door is splintered at the bottom and a screwdriver lies on the step.",
      caption: "What Connie saw from the side door.",
    },
    rodney: {
      src: "images/02-rodney-sees-toby.jpg", fallback: "metalBox",
      alt: "Over Rodney’s shoulder, holding the metal box: a younger boy at the far end of the alley, near the street. Connie watches from the doorway behind them.",
      caption: "Same alley. Same moment. Different direction.",
      note: "The footage nobody ran.",
    },
    sockets: {
      src: "images/03-socket-set.jpg", fallback: "",
      alt: "Rodney opens the metal box on the Whit’s End counter to show a tray of sockets and a ratchet while Connie leans in. A skateboard sits behind the counter.",
      caption: "",
    },
    epilogue: {
      src: "images/10-bike-epilogue.jpg", fallback: "socketSet",
      alt: "Toby stands with a blue bicycle at the Rathbones’ garage while Rodney picks up his toolbox beside a fishing pole.",
      caption: "",
      note: "Fishing: postponed. Again. Worth it.",
    },
    map: {
      src: "images/09-fishing-map.jpg", fallback: "fishingPole", w: 1600, h: 1195,
      alt: "A hand-drawn map on notebook paper pinned to the corkboard: a dotted route from the Rathbones’ garage past Whit’s End and along a river to a fishing spot that has been completely scribbled out in black ink.",
      caption: "Rodney’s route. Fishing spot classified.",
      note: "Does this look like a getaway plan? It’s a LAKE.",
    },
    step: {
      src: "images/04-alley-step.jpg", fallback: "door",
      alt: "Rodney and the younger boy sit side by side on a crate beside the broken side door. Connie is visible inside.",
      caption: "The alley, about twenty minutes after Rodney almost went fishing.",
      note: "Not pictured: the lake. Waiting.",
    },
    screwdriver: {
      src: "images/05-screwdriver.jpg", fallback: "screwdriver",
      alt: "In the alley, Whit holds out a screwdriver to Rodney while the boy kneels to fit a new board on the damaged door. Connie smiles from the doorway. The socket set sits open on the ground.",
      caption: "Exhibit F.",
      note: "Wait. Is this the hero edit?",
    },
    closing: {
      src: "images/06-closing-argument.jpg", fallback: "",
      alt: "Rodney sits in a Whit’s End booth beside a sundae and a cassette recorder with a microphone, gesturing as he talks. A page of crossed-out notes lies on the table.",
      caption: "The defense, dictating.",
    },
  };
  const CAST_PHOTO = {
    src: "images/08-cast-photo.jpg",
    alt: "Rodney, holding his metal box, scowls beside a group photo pinned to a corkboard. A sticky note under the photo reads, “You guys took the picture already?”",
  };
  const POSTER = {
    src: "images/07-wrath-of-rath.jpg",
    alt: "A dramatic movie-style poster titled “The Wrath of Rath.” Rodney stands in front of Whit’s End under a swirling red sky, gripping a metal box, a fishing pole over his shoulder. Tagline: “He came to fish. They made it personal.”",
  };

  const ART_ALT = {
    door: "Drawing of a splintered side door.",
    socketSet: "Drawing of an open toolbox with a ratchet inside.",
    metalBox: "Drawing of a closed gray metal box with a handle and two latches.",
    cashBox: "Drawing of a closed cash box with a handle and a key lock.",
    skateboard: "Drawing of a skateboard.",
    fishingPole: "Drawing of a fishing pole with a reel and a red and white bobber.",
    screwdriver: "Drawing of a red-handled screwdriver.",
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
   * Seen vs. Assumed                                                   *
   * ------------------------------------------------------------------ */
  const LEDGER = [
    { id: "box", seen: "Rodney running from the alley with a gray metal box.", assumed: "He had the fundraiser’s cash box.", fact: "His dad’s socket set. Forty-one sockets, zero dollars." },
    { id: "ran", seen: "He sped up when Connie called his name.", assumed: "He knew he’d been caught.", fact: "A scared kid had just reached the street. Rodney sped up to catch him." },
    { id: "cash", seen: "The cash box was gone from beside the register.", assumed: "Somebody stole it.", fact: "Mrs. Fenn moved it to the office for safekeeping. Every cent was there." },
    { id: "door", seen: "Fresh gouges around the side-door latch.", assumed: "Rodney broke in.", fact: "The door was never locked. Whoever pried at it never tried the handle." },
  ];

  /* ------------------------------------------------------------------ *
   * First impression + review                                          *
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
    ["board", "The skateboard still behind the counter", "The best clue was the thing nobody took."],
    ["unlocked", "The side door was never locked", "A damaged door that was never locked tells you a lot about whoever damaged it."],
    ["office", "The cash box, safe in the office", "Sometimes the missing thing is just in the next room."],
    ["toby", "Toby telling the truth himself", "Nothing settles a case like somebody telling the truth about himself."],
  ];
  const reviewQuestion = (vote) =>
    vote === "cash" ? "Which detail changed your mind?" :
    vote === "else" ? "Which detail backed up your hunch?" :
    "Which detail finally settled it for you?";

  /* ------------------------------------------------------------------ *
   * Exhibit 2: the tape                                                *
   * ------------------------------------------------------------------ */
  const TAPE = [
    {
      time: "10:42", heading: "Gone Fishing (Almost)", image: "map",
      blocks: [
        ["p", "Rodney Rathbone had a plan for Saturday, and it was a good one: one lake, one fishing pole, zero people."],
        ["p", "He also had his dad’s socket set. Borrowed with permission, which he would like entered into the record. The reel on his fishing pole had one loose nut that had been mocking him for two weeks."],
        ["think", "Rodney", "Is a whole socket set overkill for one nut? Yes. Is it the right tool for the job? Also yes. Probably."],
        ["p", "He cut through the alley behind Whit’s End because alleys have fewer people in them, and people in Odyssey tended to have opinions about Rodney."],
      ],
    },
    {
      time: "10:49", heading: "The Kid With the Screwdriver", art: "screwdriver",
      blocks: [
        ["p", "Halfway down the alley, Rodney spotted Toby Pruitt crouched by the side door of Whit’s End with a screwdriver. Toby was nine, lived two streets over, and had a skateboard sticker on everything he owned."],
        ["say", "Rodney", "Uh. Toby? What are you doing to Whit’s door?"],
        ["say", "Toby", "Mrs. Fenn took my skateboard ’cause I rode through the bake sale. It’s right inside. I’m just getting it back."],
        ["p", "Rodney opened his mouth to say several wise and mature things. Before any of them came out, Toby jammed the screwdriver into the gap by the latch and leaned on it."],
        ["note", "File this away: Toby never tried the handle."],
      ],
    },
    {
      time: "10:52", heading: "Rodney’s Account", image: "rodney",
      blocks: [
        ["p", "The same ten seconds Connie saw, from the other end of the alley. Same crash. Same box. Same shout. All of it true."],
        ["account", "rodney"],
      ],
    },
    {
      time: "10:52", heading: "Same Ten Seconds, Two Witnesses", compare: true,
      blocks: [
        ["p", "Put the two statements side by side. The highlighted details appear in both. Nobody lied. They were looking in different directions."],
      ],
    },
    {
      time: "10:55", heading: "“I Got Experience”",
      blocks: [
        ["p", "Rodney caught up with Toby at the corner by the hardware store, mostly because Toby had stopped to cry behind a mailbox."],
        ["say", "Toby", "I broke it. I broke Whit’s End. They’re gonna call my mom. They’re gonna call my mom <em>and</em> the police."],
        ["p", "Rodney had been on the wrong side of a lot of doors in his life. He knew exactly what that feeling in Toby’s stomach was."],
        ["say", "Rodney", "Relax. I’ll handle it. I got experience in this area."],
        ["p", "Toby looked up at him like a drowning kid looks at a lifeguard. Rodney liked that look more than he expected to."],
        ["p", "It was the last good feeling he had for about two hours."],
      ],
    },
  ];

  /* ------------------------------------------------------------------ *
   * Exhibit 3: the board                                               *
   * ------------------------------------------------------------------ */
  const CARDS = [
    {
      id: "sockets", label: "Exhibit B", title: "The Toolbox", art: "socketSet", tag: ["gray-box", "gray metal box"],
      claim: "“The loot.” Allegedly.",
      action: "Open the toolbox",
      ledger: ["box.fact"],
      reveal: [
        ["tag", "sockets-tag", "ratchet and sockets"],
        ["photo", "sockets"],
        ["say", "Rodney", "Connie. When you saw me running, did you see the cash box? Or did you see <em>a</em> box?"],
        ["say", "Connie", "…A box. Gray. Metal. With a handle."],
        ["p", "Two latches. One lid. Inside: forty-one sockets, one ratchet, zero dollars. Scratched into the lid: <em>PROPERTY OF R. RATHBONE SR. RODNEY, PUT IT BACK.</em>"],
      ],
      establishes: "The gray metal box Connie saw was a socket set. She saw <em>a</em> box. The town decided which one.",
    },
    {
      id: "cashbox", label: "Exhibit C", title: "The Cash Box", art: "cashBox", tag: ["cash-missing", "missing cash box"],
      claim: "Last seen: NOT with me.",
      action: "Ask where it went",
      ledger: ["cash.fact"],
      reveal: [
        ["say", "Mrs. Fenn", "Oh! The cash box. I moved it to the office around ten-thirty, dear. Too many people near the register. I meant to tell somebody."],
        ["p", "Whit’s office. On the desk, under a cardigan: one gray cash box, still locked. Inside, $312.50 and a roll of raffle tickets."],
      ],
      establishes: "Nothing was stolen. The cash box was in the office the whole time.",
    },
    {
      id: "board", label: "Exhibit D", title: "The Skateboard", art: "skateboard",
      claim: "Why is this still here???",
      action: "Look closer",
      reveal: [
        ["p", "Behind the counter, under the raffle table. Masking tape on the deck: <em>CONFISCATED: NO RIDING THROUGH THE BAKE SALE.</em>"],
        ["say", "Rodney", "If somebody broke in to steal stuff, why’s the most stealable thing in the building still sitting here? Who brought this in?"],
        ["say", "Mrs. Fenn", "I did, dear. A young man rode it straight through my lemon bars."],
      ],
      establishes: "Whoever went at the door never got in. The one thing they wanted never moved.",
    },
    {
      id: "door", label: "Exhibit E", title: "The Splintered Door", art: "door",
      claim: "Crime scene. (Probably.)",
      action: "Try the handle",
      ledger: ["door.fact"],
      reveal: [
        ["p", "Gouges by the latch. A bent kick plate. Rodney presses the handle. It turns easily, and the door swings open without a sound."],
        ["say", "Rodney", "Somebody put a lot of work into a door that was never locked. Who used this door this morning?"],
        ["say", "Mrs. Fenn", "Me again. I propped it unlocked at seven for setup. We carried tables in and out all morning."],
      ],
      establishes: "The door was unlocked all morning. Whoever pried at it never tried the handle.",
    },
  ];
  /* Red strings. Each runs between two anchors on the board. The first one moves when the toolbox is opened. */
  const CONNECTIONS = [
    {
      a: "gray-box", b: "cash-missing", bSolved: "sockets-tag", need: ["sockets"],
      ends: "“gray metal box” ↔ “missing cash box”", endsSolved: "“gray metal box” ↔ “ratchet and sockets”",
      theory: "BOTH GRAY. BOTH METAL. COINCIDENCE??",
      truth: "The string moved. The gray metal box was a ratchet and sockets. Connie saw <em>a</em> box, and the story filled in which one.",
    },
    {
      a: "pin-sockets", b: "pin-door", need: ["sockets", "door"], ends: "The Toolbox ↔ The Splintered Door",
      theory: "They think I used THESE on the door.",
      truth: "Pry marks come from a screwdriver, not a socket set. And the door was never locked anyway.",
    },
    {
      a: "pin-door", b: "pin-board", need: ["door", "board"], ends: "The Splintered Door ↔ The Skateboard",
      theory: "Skateboard = getaway vehicle???",
      truth: "Whoever pried at the door was after the skateboard. The skateboard never left.",
    },
    {
      a: "pin-board", b: "pin-cashbox", need: ["board", "cashbox"], ends: "The Skateboard ↔ The Cash Box",
      theory: "Mrs. Fenn knows something.",
      truth: "She did know something. She moved both of them for safekeeping. That’s the whole conspiracy.",
    },
  ];
  const cardTitle = (id) => CARDS.find((c) => c.id === id).title;

  /* ------------------------------------------------------------------ *
   * Exhibit 4: how the story spread                                    *
   * ------------------------------------------------------------------ */
  const SPREAD = [
    ["I saw Rodney running with a metal box.", "Connie Kendall, 10:53 a.m. (True, as far as it goes.)"],
    ["Rodney ran off with the cash box.", "Overheard at the bake table, 11:20 a.m."],
    ["Rodney broke into Whit’s End and took all the fundraiser money.", "Somebody’s cousin, 11:45 a.m."],
    ["I hear he had a getaway driver.", "The line at the hardware store, 12:10 p.m."],
  ];
  const ALIBI = [
    ["p", "By noon the story had reached the arcade, where two former Bones of Rath, Kirby and Moose, were waiting for Rodney like a welcoming committee nobody had asked for."],
    ["say", "Kirby", "Heard you knocked over Whit’s End. Here’s the deal. You were with us all morning. We’ll swear to it."],
    ["say", "Moose", "We’re good at this. We’ve been practicing on our parents for years."],
    ["p", "Rodney thought about it, and he thought about it seriously. It would probably work. No questions about Toby. No standing in front of Connie. He could be at the lake by two."],
    ["think", "Rodney", "Except if I was at the arcade all morning, I didn’t see anything. And I saw everything."],
    ["say", "Rodney", "That’s the nicest lie anybody’s ever offered me. I gotta pass."],
    ["say", "Kirby", "Your funeral."],
    ["say", "Rodney", "It’s a fundraiser, actually."],
  ];

  /* ------------------------------------------------------------------ *
   * The ending (the board goes quiet at scene 3)                       *
   * ------------------------------------------------------------------ */
  const QUIET_FROM = 2;
  const ENDING = [
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
    {
      time: "1:05 p.m. · The front step", heading: "Free to Go", art: "fishingPole", nextLabel: "Walk out the door",
      blocks: [
        ["p", "Rodney had his name back. His fishing pole was still leaning against the alley fence, and the lake hadn’t gone anywhere. All he had to do was leave."],
        ["think", "Rodney", "Not my door. Not my screwdriver. Not my problem. Technically I’m the victim here. A victim who is going fishing."],
      ],
    },
    {
      time: "1:06 p.m. · Overheard", heading: "Somebody Has to Pay",
      blocks: [
        ["p", "He had one foot on the front step when he heard Connie’s voice from the back room."],
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
    {
      time: "1:24 p.m. · Whit’s End", heading: "The Kid Testifies", ledger: ["ran.fact"],
      blocks: [
        ["p", "The bell over the door jingled. This time nobody looked at Rodney. They looked at the small kid standing in front of him."],
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
        ["p", "Then she picked up the phone behind the counter and went down the list of everyone she’d told. It was longer than she wanted to admit. Somewhere near the bottom was the line at the hardware store."],
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
      time: "2:10 p.m. · The alley door", heading: "Exhibit F: A Screwdriver", image: "screwdriver", interactive: "verdict",
      nextLabel: "Rodney’s Closing Argument (optional)",
      blocks: [
        ["p", "Whit carried a toolbox out to the alley, where Toby was already kneeling by the splintered trim. Whit held out a screwdriver. It was Toby’s, the one he’d dropped on the step that morning."],
        ["say", "Whit", "This door needs new trim and a straightened kick plate. I could use somebody who knows his way around a socket set. Will you help with the repair?"],
        ["p", "Rodney looked at the screwdriver. Then at Connie. Then back at the screwdriver."],
        ["say", "Rodney", "Before I touch this, can we get a witness?"],
        ["p", "Connie laughed for the first time all day."],
        ["say", "Connie", "I’ll stand right here."],
        ["stamp", "Case Closed", "images/case-closed.png"],
      ],
    },
    {
      time: "Later that afternoon · The back booth", heading: "Rodney’s Closing Argument", image: "closing", optional: true, interactive: "closing",
      blocks: [
        ["p", "Whit found an old cassette recorder in the back. As part of working off the door, Toby agreed to type up whatever Rodney said into it. He was told to type <em>everything</em>."],
      ],
    },
    {
      time: "Three weeks later · The Rathbones’ garage", heading: "A Knock on the Garage Door", image: "epilogue", interactive: "end",
      blocks: [
        ["p", "Saturday again. The reel on Rodney’s fishing pole finally clicked the way a reel is supposed to. The lake was waiting, and for once nobody in Odyssey was talking about him."],
        ["p", "Then Toby Pruitt came up the driveway, out of breath, walking a blue bike that wasn’t his. The chain dragged on the pavement."],
        ["say", "Toby", "It’s Lily Okafor’s. I knocked it over with my board in front of her house. The fender’s bent and the chain came off. She doesn’t know yet."],
        ["beat"],
        ["say", "Toby", "Will you come with me while I tell her?"],
        ["p", "Rodney looked at the fishing pole. He looked at the blue, lake-shaped Saturday he had planned."],
        ["p", "Then he set the pole against the wall and picked up his tools."],
        ["say", "Rodney", "Bring your four dollars."],
        ["say", "Toby", "I’ve got six now."],
        ["say", "Rodney", "Look at you. Growing."],
      ],
    },
  ];
  /* Version image URLs per deploy, so a CDN or browser never pairs a page with a stale or cached-404 image. */
  const V = typeof window.ASSET_V === "string" && window.ASSET_V && window.ASSET_V !== "__BUILD__" ? window.ASSET_V : "";
  const ver = (src) => (V && src && !src.includes("?") ? `${src}?v=${V}` : src);
  Object.values(IMAGES).forEach((im) => { im.src = ver(im.src); });
  Object.keys(ICONS).forEach((k) => { ICONS[k] = ver(ICONS[k]); });
  CAST_PHOTO.src = ver(CAST_PHOTO.src);
  POSTER.src = ver(POSTER.src);
  ENDING.forEach((sc) => sc.blocks.forEach((b) => { if (b[0] === "stamp" && b[2]) b[2] = ver(b[2]); }));
  const VERDICT_INDEX = ENDING.findIndex((s) => s.interactive === "verdict");
  const LAST_INDEX = ENDING.length - 1;

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

  const SECTIONS = [
    { id: "connie", num: "File 1", title: "What Connie Saw", nav: "Connie", scribble: "Star witness. (Allegedly.)", next: "Next: The Missing Ten Minutes" },
    { id: "rewind", num: "File 2", title: "The Missing Ten Minutes", nav: "Rewind", scribble: "The part NOBODY asked about.", next: "Next: Pin it on the board" },
    { id: "board", num: "File 3", title: "The Board", nav: "The Board", scribble: "It’s all connected.", next: "Next: How the story spread" },
    { id: "spread", num: "File 4", title: "How the Story Spread", nav: "The Story", scribble: "Like telephone, but about me.", next: "Next: Rodney’s own theory" },
    { id: "theory", num: "File 5", title: "Rodney’s Own Theory", nav: "My Theory", scribble: "Hear me out.", next: "Next: What happened after" },
    { id: "ending", num: "The Ending", title: "What Happened After", nav: "After", scribble: "", next: null },
  ];
  const sectionIndex = (id) => SECTIONS.findIndex((s) => s.id === id);

  /* ------------------------------------------------------------------ *
   * State                                                              *
   * ------------------------------------------------------------------ */
  const KEY = "rodney-wrath-v3";
  const fresh = () => ({ unlocked: 1, vote: null, tape: -1, tapeMax: -1, cards: [], spread: 1, theory: false, lifted: false, end: 0, endMax: 0, detail: null, ledger: [] });
  const load = () => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && Number.isInteger(s.unlocked)) {
        const st = Object.assign(fresh(), s);
        st.unlocked = Math.min(Math.max(1, st.unlocked), SECTIONS.length);
        st.tape = Math.min(st.tape, TAPE.length - 1);
        st.end = Math.min(Math.max(0, st.end), LAST_INDEX);
        st.spread = Math.min(Math.max(1, st.spread), SPREAD.length);
        return st;
      }
    } catch (e) { /* storage unavailable */ }
    return null;
  };
  const saved = load();
  let state = saved || fresh();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } };
  const has = (arr, v) => arr.indexOf(v) !== -1;
  const addTo = (arr, v) => { if (!has(arr, v)) { arr.push(v); return true; } return false; };
  const addLedger = (keys) => { let changed = false; (keys || []).forEach((k) => { changed = addTo(state.ledger, k) || changed; }); if (changed) renderLedger(); };

  /* ------------------------------------------------------------------ *
   * Rendering helpers                                                  *
   * ------------------------------------------------------------------ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const failedImages = new Set();
  const reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const smooth = () => (reduceMotion ? "auto" : "smooth");

  const artSlot = (key, alt, cls) => {
    const icon = ICONS[key];
    if (icon && !failedImages.has(icon)) {
      return `<div class="${cls}"><img src="${icon}" alt="${esc(alt)}" loading="lazy" data-fallback="${key}"></div>`;
    }
    return `<div class="${cls}" role="img" aria-label="${esc(alt)}">${drawing(key)}</div>`;
  };
  const drawingFigure = (key, caption, alt, i) =>
    `<figure class="art drawing line" style="--i:${i}">${artSlot(key, alt, "frame")}${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
  const imageFigure = (key, i) => {
    const im = IMAGES[key];
    if (failedImages.has(im.src)) return im.fallback ? drawingFigure(im.fallback, im.caption, im.alt, i) : "";
    const onErr = im.fallback ? `data-fallback="${im.fallback}"` : "data-remove-on-error";
    const note = im.note ? `<p class="scribble photo-note"><span class="sr-only">Rodney’s sticky note: </span>${im.note}</p>` : "";
    return `<figure class="art line" style="--i:${i}">${note}<div class="frame"><img src="${im.src}" alt="${esc(im.alt)}" width="${im.w || 1376}" height="${im.h || 768}" decoding="async" ${onErr}></div>${im.caption ? `<figcaption>${im.caption}</figcaption>` : ""}</figure>`;
  };

  const audioButton = (src, label) =>
    `<button type="button" class="btn btn-small" data-audio="${src}" data-label="${esc(label)}" hidden><span class="ico" aria-hidden="true">▶</span> <span class="lbl">Play ${label}</span></button>`;

  const accountHTML = (key, i) => {
    const a = ACCOUNTS[key];
    return `<section class="account line" style="--i:${i}" aria-label="${esc(a.title)}">
      <h3>${a.title}</h3><p class="sworn">${a.sworn}</p>
      <ol>${a.beats.map((b, n) => `<li><span class="beat-label">${n + 1} · ${b[0]}</span><p>${b[1]}</p></li>`).join("")}</ol>
      ${audioButton(a.audio, key === "connie" ? "Connie’s account" : "Rodney’s account")}
    </section>`;
  };
  const compareHTML = (i) => `
    <div class="compare line" style="--i:${i}">${accountHTML("connie", 0)}${accountHTML("rodney", 0)}</div>
    <p class="compare-key line" style="--i:${i + 1}">Highlighted details appear in both accounts: the crash, the gray metal box, “Rodney!”, and speeding up.</p>`;

  const blockHTML = (b, i) => {
    const st = `style="--i:${i}"`;
    switch (b[0]) {
      case "p": return `<p class="line" ${st}>${b[1]}</p>`;
      case "say": return `<p class="line say" ${st}><span class="who">${b[1]}</span><span class="q">“${b[2]}”</span></p>`;
      case "think": return `<p class="line think" ${st}><span class="who">${b[1]}, to himself</span><span class="q">${b[2]}</span></p>`;
      case "beat": return `<p class="line beat" ${st}><span aria-hidden="true">· · ·</span><span class="sr-only">A beat passes.</span></p>`;
      case "note": return `<p class="line note" ${st}>${b[1]}</p>`;
      case "tag": return `<p class="evtag" data-anchor="${b[1]}">${b[2]}</p>`;
      case "hand": return `<p class="line hand" ${st}>${b[1]}</p>`;
      case "stamp":
        if (b[2] && !failedImages.has(b[2])) {
          return `<p class="line stamp-wrap" ${st}><img class="stamp-img" src="${b[2]}" alt="${b[1]}" width="900" height="275" data-hide-on-error="stamp-text-${i}"><span class="stamp" id="stamp-text-${i}" hidden>${b[1]}</span></p>`;
        }
        return `<p class="line" ${st}><span class="stamp">${b[1]}</span></p>`;
      case "account": return accountHTML(b[1], i);
      case "photo": {
        const im = IMAGES[b[1]];
        if (failedImages.has(im.src)) return "";
        return `<figure class="photo"><img src="${im.src}" alt="${esc(im.alt)}" width="1376" height="768" loading="lazy" data-remove-on-error></figure>`;
      }
      default: return "";
    }
  };
  const blocksHTML = (blocks, start = 0) => blocks.map((b, k) => blockHTML(b, start + k)).join("");

  function play(el) {
    if (!el) return;
    el.classList.remove("play");
    void el.offsetWidth;
    el.classList.add("play");
  }
  function focusEl(el) {
    if (!el) return;
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }

  /* ------------------------------------------------------------------ *
   * Section shells                                                     *
   * ------------------------------------------------------------------ */
  const els = {};

  function sectionShell(s) {
    return `<section class="exhibit" id="ex-${s.id}" aria-labelledby="h-${s.id}">
      <div class="exhibit-head">
        <div class="exhibit-label"><span class="num">${s.num}</span><h2 id="h-${s.id}" tabindex="-1">${s.title}</h2></div>
        ${s.scribble ? `<p class="scribble" aria-hidden="true">${s.scribble}</p>` : ""}
      </div>
      <div id="body-${s.id}"></div>
      ${s.next ? `<div class="section-next" id="next-${s.id}"></div>` : ""}
    </section>`;
  }

  function renderSections() {
    els.sections.innerHTML = SECTIONS.slice(0, state.unlocked).map(sectionShell).join("");
    SECTIONS.slice(0, state.unlocked).forEach((s) => renderSection(s.id, false));
    renderNav();
    applyQuiet();
  }

  function renderNav() {
    els.nav.innerHTML = SECTIONS.map((s, k) => {
      if (k >= state.unlocked) return `<li><span aria-disabled="true"><span class="n">${k + 1}</span>${s.nav}</span></li>`;
      const cur = k === state.unlocked - 1;
      return `<li><a href="#ex-${s.id}" ${cur ? 'aria-current="true"' : ""}><span class="n">${k + 1}</span>${s.nav}</a></li>`;
    }).join("");
  }

  const GATES = {
    connie: () => (state.vote ? null : "Seal your first impression first."),
    rewind: () => (state.tapeMax >= TAPE.length - 1 ? null : "Play the tape all the way through."),
    board: () => (state.cards.length >= CARDS.length ? null : `Open all four cards. (${state.cards.length} of ${CARDS.length})`),
    spread: () => (state.spread >= SPREAD.length ? null : "Follow the story all the way down."),
    theory: () => (state.theory ? null : "Examine the exhibit."),
  };

  function renderNext(id) {
    const s = SECTIONS[sectionIndex(id)];
    const box = $(`#next-${id}`);
    if (!box || !s.next) return;
    const idx = sectionIndex(id);
    if (state.unlocked > idx + 1) { box.innerHTML = ""; return; }
    const gate = GATES[id] ? GATES[id]() : null;
    box.innerHTML = `<button type="button" class="btn btn-primary" data-unlock="${idx + 1}" ${gate ? "disabled" : ""}>${s.next} <span aria-hidden="true">→</span></button>
      ${gate ? `<p class="gate">${gate}</p>` : ""}`;
  }

  function unlock(n) {
    if (n < state.unlocked) return;
    state.unlocked = n + 1;
    save();
    const s = SECTIONS[n];
    // Remove the "next" button on the previous section, add the new section.
    renderNext(SECTIONS[n - 1].id);
    els.sections.insertAdjacentHTML("beforeend", sectionShell(s));
    renderSection(s.id, true);
    renderNav();
    const sec = $(`#ex-${s.id}`);
    sec.scrollIntoView({ behavior: smooth(), block: "start" });
    focusEl($(`#h-${s.id}`));
  }

  function renderSection(id, animate) {
    const body = $(`#body-${id}`);
    if (!body) return;
    switch (id) {
      case "connie": body.innerHTML = connieHTML(); bindVote(); addLedger(["box.seen", "ran.seen", "cash.seen", "door.seen"]); break;
      case "rewind": body.innerHTML = rewindHTML(); break;
      case "board": body.innerHTML = boardHTML(); observeBoard(); break;
      case "spread": body.innerHTML = spreadHTML(); break;
      case "theory": body.innerHTML = theoryHTML(); break;
      case "ending": body.innerHTML = endingShellHTML(); renderEnding(false); break;
    }
    checkImages(body);
    activateAudio(body);
    renderNext(id);
    if (animate) play(body);
  }

  /* ------------------------------------------------------------------ *
   * Exhibit 1 — What Connie Saw                                        *
   * ------------------------------------------------------------------ */
  function connieHTML() {
    const im = IMAGES.connie;
    return `<div class="cluster">
      <figure class="photo-pin pinned col-7 line" style="--i:0">
        ${failedImages.has(im.src) ? artSlot("metalBox", im.alt, "frame") : `<img src="${im.src}" alt="${esc(im.alt)}" width="1376" height="768" data-fallback="metalBox">`}
        <p class="scribble photo-note"><span class="sr-only">Rodney’s sticky note: </span>Villain angle. AGAIN.</p>
        <figcaption>What Connie saw from the side door. 10:52 a.m.</figcaption>
      </figure>
      <div class="col-5 line" style="--i:1">${accountHTML("connie", 0).replace(' class="account line"', ' class="account pinned pin-navy"')}</div>
      <div class="clipping torn pinned col-7 note-card line" style="--i:2">
        <p class="clip-paper">Back inside · 10:58 a.m.</p>
        <p class="clip-head">Two Things Missing</p>
        <p>The fundraiser’s cash box wasn’t in its usual spot beside the register. And the side door to the alley had fresh gouges around the latch.</p>
        <p>Connie wasn’t trying to be unfair. She remembered the Bones of Rath, the things that went missing back then, and the excuses that came after. When a stove has burned you more than once, you stop testing whether it’s hot.</p>
        <p class="say"><span class="who">Connie</span><span class="q">“I know what I saw.”</span></p>
        <p>She did. She just didn’t know yet which parts she’d seen and which parts she’d filled in.</p>
      </div>
      <div class="col-5 line" style="--i:3">${voteHTML()}</div>
    </div>`;
  }

  function voteHTML() {
    if (state.vote) {
      const opt = VOTE.options.find((o) => o[0] === state.vote);
      return `<div class="paper vote pinned"><p class="sealed" id="sealed">Your first impression: <strong>“${opt[1]}.”</strong></p><p class="response">${opt[2]}</p><p class="private" style="margin:12px 0 0">Private. Only you can see this. It stays on this device.</p></div>`;
    }
    return `<form class="paper vote pinned" id="vote-form" novalidate>
      <fieldset>
        <legend>${VOTE.question}</legend>
        <p class="private">Private. Nobody else sees your answer. It stays on this device, and the case file hands it back to you at the end.</p>
        ${VOTE.options.map((o) => `<label class="choice"><input type="radio" name="vote" value="${o[0]}"> <span>${o[1]}</span></label>`).join("")}
      </fieldset>
      <button type="submit" class="btn btn-red">Seal my answer</button>
      <p class="hint" id="vote-hint" aria-live="polite"></p>
    </form>`;
  }

  function bindVote() {
    const form = $("#vote-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = form.querySelector("input[name=vote]:checked");
      if (!v) { $("#vote-hint").textContent = "Pick one first. It stays private."; form.querySelector("input").focus(); return; }
      state.vote = v.value;
      save();
      form.outerHTML = voteHTML();
      renderNext("connie");
      focusEl($("#sealed"));
    });
  }

  /* ------------------------------------------------------------------ *
   * Exhibit 2 — The Missing Ten Minutes                                *
   * ------------------------------------------------------------------ */
  const fmt = (mins) => `10:${String(mins).padStart(2, "0")}`;
  function rewindHTML() {
    const rewound = state.tape >= 0;
    const f = rewound ? TAPE[state.tape] : null;
    const counter = rewound ? f.time : "10:52";
    const dots = TAPE.map((_, k) => `<span class="${rewound && k <= state.tape ? "on" : ""}"></span>`).join("");
    const controls = rewound
      ? `<button type="button" class="btn btn-small" data-tape="prev" ${state.tape === 0 ? "disabled" : ""}><span aria-hidden="true">◀</span> Back</button>
         <button type="button" class="btn btn-small btn-red" data-tape="next" ${state.tape === TAPE.length - 1 ? "disabled" : ""}>Play forward <span aria-hidden="true">▶</span></button>
         <button type="button" class="btn btn-small" data-tape="rewind"><span aria-hidden="true">◀◀</span> Rewind again</button>`
      : `<button type="button" class="btn btn-red" data-tape="rewind"><span aria-hidden="true">◀◀</span> Rewind ten minutes</button>`;
    let frame;
    if (!rewound) {
      frame = `<p class="frame-time">Cued to 10:52</p>
        <h3 id="frame-title" tabindex="-1">The Moment Everybody Saw</h3>
        <p>The tape is cued to the ten seconds Connie saw: a crash, a gray metal box, and “Rodney!”</p>
        <p class="hand">Rewind it. The good part is the ten minutes BEFORE that.</p>`;
    } else {
      let i = 0;
      frame = `<p class="frame-time">${f.time} a.m. · Frame ${state.tape + 1} of ${TAPE.length}</p>
        <h3 id="frame-title" tabindex="-1">${f.heading}</h3>`;
      if (f.image) frame += imageFigure(f.image, i++);
      else if (f.art) frame += drawingFigure(f.art, "", ART_ALT[f.art], i++);
      frame += `<div class="blocks">${blocksHTML(f.blocks, i)}</div>`;
      if (f.compare) frame += compareHTML(i + f.blocks.length);
    }
    return `<div class="deck" id="deck">
      <div class="deck-top">
        <div class="reels" aria-hidden="true"><span class="reel"></span><span class="reel"></span></div>
        <p class="deck-label">Tape: Saturday, the alley behind Whit’s End</p>
        <span class="counter" id="tape-counter" role="timer" aria-label="Tape counter">${counter}</span>
      </div>
      <div class="deck-controls" role="group" aria-label="Tape controls">${controls}</div>
      <div class="frame-dots" aria-hidden="true" style="margin-top:12px">${dots}</div>
      <div class="frame-wrap" id="frame-wrap" aria-live="off">${frame}</div>
    </div>`;
  }

  let rewinding = false;
  function tapeTo(k, focusTitle = true) {
    state.tape = k;
    state.tapeMax = Math.max(state.tapeMax, k);
    save();
    const body = $("#body-rewind");
    body.innerHTML = rewindHTML();
    checkImages(body);
    activateAudio(body);
    renderNext("rewind");
    play($("#frame-wrap"));
    if (focusTitle) {
      const deck = $("#deck");
      if (deck.getBoundingClientRect().top < 0) deck.scrollIntoView({ behavior: smooth(), block: "start" });
      focusEl($("#frame-title"));
    }
  }
  function rewindTape() {
    if (rewinding) return;
    const from = state.tape >= 0 ? Number(TAPE[state.tape].time.slice(3)) : 52;
    const deck = $("#deck");
    const counter = $("#tape-counter");
    if (reduceMotion || from <= 42) { tapeTo(0); return; }
    rewinding = true;
    deck.classList.add("rewinding");
    deck.querySelectorAll("[data-tape]").forEach((b) => { b.disabled = true; });
    const start = performance.now();
    const dur = 1100;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      counter.textContent = fmt(Math.round(from - (from - 42) * p));
      if (p < 1) requestAnimationFrame(step);
      else { rewinding = false; tapeTo(0); }
    };
    requestAnimationFrame(step);
  }

  /* ------------------------------------------------------------------ *
   * Exhibit 3 — The Board                                              *
   * ------------------------------------------------------------------ */
  const cardOpen = new Set(state.cards);
  function cardHTML(c) {
    const examined = has(state.cards, c.id);
    const open = examined && cardOpen.has(c.id);
    return `<li class="card${examined ? " examined" : ""}" data-pin="${c.id}">
      <span class="pin-dot" aria-hidden="true" data-anchor="pin-${c.id}"></span>
      <p class="card-kind">${c.label}</p>
      <h3>${c.title}</h3>
      <p class="claim"><span class="sr-only">Rodney’s note: </span>${c.claim}</p>
      ${c.tag ? `<p class="evtag" data-anchor="${c.tag[0]}">${c.tag[1]}</p>` : ""}
      ${artSlot(c.art, ART_ALT[c.art], "mini")}
      <button type="button" class="btn btn-small" data-card="${c.id}" aria-expanded="${open}" aria-controls="card-${c.id}">${open ? "Close card" : examined ? "Reopen card" : c.action}</button>
      <div class="card-reveal" id="card-${c.id}" ${open ? "" : "hidden"}>
        ${blocksHTML(c.reveal).replace(/ class="line/g, ' class="')}
        <p class="establishes"><strong>What this actually establishes</strong>${c.establishes}</p>
      </div>
    </li>`;
  }
  const connSolved = (cn) => cn.need.every((id) => has(state.cards, id));
  function connectionsHTML() {
    return `<div class="paper connections pinned pin-navy">
      <h3>Rodney’s Red Strings</h3>
      <p class="private" style="margin:0">Each red string is one of Rodney’s theories. Open the cards it touches to test it.</p>
      <ol>${CONNECTIONS.map((cn) => {
        const solved = connSolved(cn);
        return `<li class="${solved ? "solved" : ""}">
          <span class="ends">${solved && cn.endsSolved ? cn.endsSolved : cn.ends}</span>
          <span class="theory"><span class="sr-only">Rodney’s theory: </span>${cn.theory}</span>
          ${solved ? `<span class="truth"><strong>Actually:</strong> ${cn.truth}</span>` : `<span class="pending">Open ${cn.need.map((id) => cardTitle(id).replace(/^The /, "the ")).join(" and ")} to test it.</span>`}
        </li>`;
      }).join("")}</ol>
    </div>`;
  }
  function boardHTML() {
    const n = state.cards.length;
    return `<p class="board-count" id="board-count" aria-live="polite">${n === CARDS.length ? "All four examined. Huh." : `${n} of ${CARDS.length} examined. Follow the string.`}</p>
      <div class="board" id="board">
        <svg class="strings back" id="strings" aria-hidden="true"></svg>
        <svg class="strings front" id="strings-front" aria-hidden="true"></svg>
        <ul class="cards">${CARDS.map(cardHTML).join("")}</ul>
      </div>
      <div id="connections">${connectionsHTML()}</div>`;
  }

  function toggleCard(id) {
    if (addTo(state.cards, id)) {
      cardOpen.add(id);
      if (window.RathMusic) window.RathMusic.stinger(id === "sockets");
      addLedger(CARDS.find((c) => c.id === id).ledger);
    } else if (cardOpen.has(id)) cardOpen.delete(id);
    else cardOpen.add(id);
    save();
    const li = $(`li.card[data-pin="${id}"]`);
    const tmp = document.createElement("ul");
    tmp.innerHTML = cardHTML(CARDS.find((c) => c.id === id));
    const fresh = tmp.firstElementChild;
    li.replaceWith(fresh);
    checkImages(fresh);
    $("#connections").innerHTML = connectionsHTML();
    const n = state.cards.length;
    $("#board-count").textContent = n === CARDS.length ? "All four examined. Huh." : `${n} of ${CARDS.length} examined. Follow the string.`;
    renderNext("board");
    drawStrings(true);
    focusEl(fresh.querySelector("[data-card]"));
  }

  /* Find where a string attaches. Falls back to the card's pin if the anchor is hidden. */
  function anchorPoint(board, br, id) {
    let el = board.querySelector(`[data-anchor="${id}"]`);
    if (el && el.offsetParent === null) el = null;
    if (!el) {
      const hidden = board.querySelector(`[data-anchor="${id}"]`);
      const card = hidden && hidden.closest("li.card");
      el = card ? card.querySelector(".pin-dot") : null;
    }
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const isTag = el.classList.contains("evtag");
    return [(isTag ? r.left + 9 : r.left + r.width / 2) - br.left, r.top + r.height / 2 - br.top];
  }
  let prevPts = null;
  let tweening = false;
  function stringTargets() {
    const board = $("#board");
    const br = board.getBoundingClientRect();
    return CONNECTIONS.map((cn) => {
      const a = anchorPoint(board, br, cn.a);
      const b = anchorPoint(board, br, connSolved(cn) && cn.bSolved ? cn.bSolved : cn.b);
      return a && b ? [a[0], a[1], b[0], b[1]] : null;
    });
  }
  /* Strings 2-4 run behind the cards (visible across the cork). String 1 and the number badges sit in front. */
  function paintStrings(pts) {
    const board = $("#board");
    const back = $("#strings");
    const front = $("#strings-front");
    const br = board.getBoundingClientRect();
    [back, front].forEach((svg) => {
      svg.setAttribute("width", br.width);
      svg.setAttribute("height", br.height);
      svg.setAttribute("viewBox", `0 0 ${br.width} ${br.height}`);
    });
    const cards = [...board.querySelectorAll("li.card")].map((c) => {
      const r = c.getBoundingClientRect();
      return [r.left - br.left - 6, r.top - br.top - 6, r.right - br.left + 6, r.bottom - br.top + 6];
    });
    const onCard = (x, y) => cards.some((r) => x > r[0] && x < r[2] && y > r[1] && y < r[3]);
    let backSvg = "", frontSvg = "", badges = "";
    const used = [];
    pts.forEach((p, k) => {
      if (!p) return;
      const [ax, ay, bx, by] = p;
      const span = Math.hypot(bx - ax, by - ay);
      const sag = Math.min(60, 18 + span * 0.12) + k * 4;
      const cx = (ax + bx) / 2;
      const cy = Math.max(ay, by) + sag;
      const at = (t) => [
        (1 - t) * (1 - t) * ax + 2 * (1 - t) * t * cx + t * t * bx,
        (1 - t) * (1 - t) * ay + 2 * (1 - t) * t * cy + t * t * by,
      ];
      const cls = connSolved(CONNECTIONS[k]) ? "solved" : "";
      const path = `<path class="${cls}" d="M${ax} ${ay} Q${cx} ${cy} ${bx} ${by}"/>`;
      if (k === 0) frontSvg += path; else backSvg += path;
      // Put the number badge on a stretch of string that isn't covered by a card.
      const clear = ([x, y]) => !onCard(x, y) && used.every(([ux, uy]) => Math.hypot(ux - x, uy - y) > 26);
      const spot = k === 0 ? at(0.5) : [0.5, 0.42, 0.58, 0.34, 0.66, 0.26, 0.74, 0.2, 0.8].map(at).find(clear);
      if (spot) used.push(spot);
      if (spot) badges += `<circle class="${cls}" cx="${spot[0]}" cy="${spot[1]}" r="11"/><text x="${spot[0]}" y="${spot[1]}">${k + 1}</text>`;
    });
    back.innerHTML = backSvg;
    front.innerHTML = frontSvg + badges;
  }
  function drawStrings(animate = false) {
    const board = $("#board");
    const svg = $("#strings");
    if (!board || !svg) return;
    if (window.matchMedia("(max-width: 760px)").matches) { svg.innerHTML = ""; $("#strings-front").innerHTML = ""; prevPts = null; return; }
    if (tweening) return;
    const target = stringTargets();
    if (!animate || reduceMotion || !prevPts) { paintStrings(target); prevPts = target; return; }
    const from = prevPts;
    const t0 = performance.now();
    const dur = 750;
    tweening = true;
    const ease = (x) => 1 - Math.pow(1 - x, 3);
    const frame = (now) => {
      const p = ease(Math.min(1, (now - t0) / dur));
      const to = stringTargets();
      const pts = to.map((t, k) => (t && from[k] ? t.map((v, j) => from[k][j] + (v - from[k][j]) * p) : t));
      paintStrings(pts);
      if (p < 1) requestAnimationFrame(frame);
      else { tweening = false; prevPts = to; }
    };
    requestAnimationFrame(frame);
  }
  let boardObserver = null;
  function observeBoard() {
    const board = $("#board");
    if (!board) return;
    if (boardObserver) boardObserver.disconnect();
    if ("ResizeObserver" in window) {
      boardObserver = new ResizeObserver(() => drawStrings(false));
      boardObserver.observe(board);
    }
    requestAnimationFrame(drawStrings);
  }

  function ledgerHTML() {
    const rows = LEDGER.filter((r) => has(state.ledger, r.id + ".seen"));
    if (!rows.length) return { sub: "Nothing on file yet.", list: "" };
    const solved = rows.filter((r) => has(state.ledger, r.id + ".fact")).length;
    return {
      sub: `${solved} of ${LEDGER.length} assumptions tested against the evidence.`,
      list: rows.map((r) => {
        const ok = has(state.ledger, r.id + ".fact");
        return `<li class="ledger-row${ok ? " solved" : ""}"><dl>
          <dt>Seen <span class="tagline">(a fact)</span></dt><dd>${r.seen}</dd>
          <dt>Assumed <span class="tagline">(a guess)</span></dt><dd class="assumed">${r.assumed}</dd>
          <dt>Evidence shows</dt><dd>${ok ? `<span class="fact">${r.fact}</span>` : '<span class="pending">Under investigation.</span>'}</dd>
        </dl></li>`;
      }).join(""),
    };
  }
  function renderLedger() {
    const h = ledgerHTML();
    document.querySelectorAll("[data-ledger-list]").forEach((el) => { el.innerHTML = h.list; });
    document.querySelectorAll("[data-ledger-sub]").forEach((el) => { el.textContent = h.sub; });
    const solved = LEDGER.filter((r) => has(state.ledger, r.id + ".fact")).length;
    const badge = $("#ledger-badge");
    if (badge) badge.textContent = `${solved}/${LEDGER.length}`;
  }

  /* ------------------------------------------------------------------ *
   * Exhibit 4 — How the Story Spread                                   *
   * ------------------------------------------------------------------ */
  function spreadHTML() {
    const shown = SPREAD.slice(0, state.spread);
    const done = state.spread >= SPREAD.length;
    return `<ol class="chain" id="chain">${shown.map((n, k) => `
        ${k > 0 ? '<li class="arrow" aria-hidden="true">↓ told to somebody else ↓</li>' : ""}
        <li><div class="rumor pinned${k === 0 ? " pin-navy" : ""}"><q>${n[0]}</q><span class="who">${n[1]}</span></div></li>`).join("")}
      </ol>
      ${done
        ? `<p class="sticky reply" id="reply"><span class="sr-only">Rodney’s handwritten reply: </span>Who? I’d like a ride home.</p>`
        : `<div class="spread-actions"><button type="button" class="btn btn-red" id="pass-it-on">Pass it on <span aria-hidden="true">→</span></button></div>`}
      <details class="clipping torn">
        <summary>Clipping: Meanwhile, at the arcade…</summary>
        <div class="blocks">${blocksHTML(ALIBI).replace(/ class="line/g, ' class="')}</div>
      </details>`;
  }
  function passItOn() {
    state.spread = Math.min(SPREAD.length, state.spread + 1);
    save();
    const body = $("#body-spread");
    body.innerHTML = spreadHTML();
    renderNext("spread");
    const items = body.querySelectorAll(".chain .rumor");
    const last = items[items.length - 1];
    if (!reduceMotion) last.animate([{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "none" }], { duration: 350, easing: "ease-out" });
    const btn = $("#pass-it-on");
    if (btn) btn.focus();
    else focusEl($("#reply"));
  }

  /* ------------------------------------------------------------------ *
   * Exhibit 5 — Rodney's Own Theory                                    *
   * ------------------------------------------------------------------ */
  function theoryHTML() {
    const castMissing = failedImages.has(CAST_PHOTO.src);
    const photo = castMissing
      ? `<div class="cast-fallback">[Photo: everybody, smiling. Suspiciously.]</div>`
      : `<img src="${CAST_PHOTO.src}" alt="${esc(CAST_PHOTO.alt)}" width="1376" height="768" data-hide-on-error="cast-fallback"><div class="cast-fallback" id="cast-fallback" hidden>[Photo: everybody, smiling. Suspiciously.]</div>`;
    const stack = state.lifted
      ? `<figure class="photo-pin pinned poster-pin" id="poster">
           <img src="${POSTER.src}" alt="${esc(POSTER.alt)}" width="848" height="1264" data-hide-on-error="poster-fallback">
           <div class="cast-fallback" id="poster-fallback" hidden>[A movie poster. You had to be there.]</div>
           <figcaption>This is how they see me. (Okay, I made this one. It was a long lunch. Not evidence.)</figcaption>
         </figure>
         <p style="text-align:center;margin-top:14px"><button type="button" class="btn btn-small" id="put-back">Put the photo back</button></p>`
      : `<div class="stack"><figure class="photo-pin pinned cast">${photo}</figure>
           <button type="button" class="peek" id="peek" aria-label="Lift the photo. Something is pinned behind it.">something’s behind this →</button></div>`;
    return `<div class="theory-board">
      <div>${stack}</div>
      <div class="theory-notes">
        <p class="sticky"><span class="sr-only">Rodney’s handwritten note: </span>Everybody was in on it.</p>
        <button type="button" class="btn btn-red" id="examine-theory" aria-expanded="${state.theory}" aria-controls="theory-reveal" ${state.theory ? "disabled" : ""}>${state.theory ? "Examined" : "Examine the exhibit"}</button>
        <div id="theory-reveal" ${state.theory ? "" : "hidden"}>
          <p class="sticky" style="transform:rotate(2.5deg);background:#fbf7ea"><span class="sr-only">A second note, in Rodney’s handwriting: </span>Fine. I have no evidence of this. Still a weird picture.</p>
        </div>
      </div>
    </div>`;
  }
  function rerenderTheory(focusSel) {
    const body = $("#body-theory");
    body.innerHTML = theoryHTML();
    checkImages(body);
    renderNext("theory");
    if (focusSel) focusEl($(focusSel));
  }

  /* ------------------------------------------------------------------ *
   * The Ending                                                         *
   * ------------------------------------------------------------------ */
  function endingShellHTML() {
    return `<div class="ending" id="ending">
      <article class="ending-stage" id="ending-stage"></article>
      <div class="controls" role="group" aria-label="Scene controls">
        <button type="button" class="btn" id="end-prev"><span aria-hidden="true">←</span> Back</button>
        <button type="button" class="btn" id="end-replay">↺ Replay scene</button>
        <button type="button" class="btn btn-primary" id="end-next">Next <span aria-hidden="true">→</span></button>
        <div class="progress"><span id="end-progress"></span><div class="progress-bar" aria-hidden="true"><span id="end-fill"></span></div></div>
      </div>
    </div>`;
  }

  function verdictExtrasHTML(i) {
    const first = state.vote
      ? `<p class="sealed">Your original guess, before you heard Rodney’s side: <strong>“${voteLabel(state.vote)}.”</strong></p>`
      : `<p class="sealed">You didn’t record a first impression. The case went on without you, which is how most of Odyssey found out about it too.</p>`;
    const chosen = DETAILS.find((d) => d[0] === state.detail);
    return `<p class="line hand" style="--i:${i}">Verdict: not guilty. Also: hired.</p>
      <section class="review line" style="--i:${i + 1};padding:20px 22px" aria-label="Your first impression">
        ${first}
        <form id="detail-form" novalidate style="margin-top:14px">
          <fieldset>
            <legend>${reviewQuestion(state.vote)}</legend>
            <p class="private">Also private. Pick the one that mattered most.</p>
            ${DETAILS.map((d) => `<label class="choice"><input type="radio" name="detail" value="${d[0]}" ${state.detail === d[0] ? "checked" : ""}> <span>${d[1]}</span></label>`).join("")}
          </fieldset>
          <button type="submit" class="btn">Note it in the file</button>
          <p class="response" id="detail-response" aria-live="polite">${chosen ? chosen[2] : ""}</p>
        </form>
        <div class="account-replay">
          <button type="button" class="btn" id="replay-accounts" aria-expanded="false" aria-controls="accounts-again">↺ Replay both accounts</button>
        </div>
        <div id="accounts-again" hidden></div>
      </section>
      <p class="line scribble last-line" style="--i:${i + 2}"><span class="sr-only">Rodney’s last handwritten note: </span>Turns out everybody was working off the same bad clue. Including me.</p>
      <p class="line" style="--i:${i + 3}"><button type="button" class="btn-link" data-end="${LAST_INDEX}">Skip the closing argument and go to the epilogue →</button></p>`;
  }

  function closingHTML(i) {
    return `<div class="transcript line" style="--i:${i}">
      <p class="transcript-head">${CLOSING.head}</p>
      ${CLOSING.paras.map((p) => `<p>${p}</p>`).join("")}
      ${CLOSING.tail.map((t) => (t[0] === "typist" ? `<p class="typist">${t[1]}</p>` : `<p>${t[1]}</p>`)).join("")}
    </div>`;
  }

  function endHTML(i) {
    return `<div class="end-actions line" style="--i:${i}">
      <button type="button" class="btn" id="read-again">Read the case again from the top</button>
      <button type="button" class="btn" data-goto-section="board">Back to the board</button>
      <button type="button" class="btn" data-open-script>Read the audio script</button>
    </div>`;
  }

  function renderEnding(focus) {
    const stage = $("#ending-stage");
    if (!stage) return;
    const sc = ENDING[state.end];
    state.endMax = Math.max(state.endMax, state.end);
    addLedger(sc.ledger);
    let i = 0;
    let html = `<div class="scene-meta"><span class="file-label">Scene ${state.end + 1} of ${ENDING.length}</span>
      <span>${sc.optional ? '<span class="optional-tag">Optional</span>' : ""}<span class="timestamp">${sc.time}</span></span></div>
      <h3 class="scene-title" id="scene-title" tabindex="-1">${sc.heading}</h3>`;
    if (sc.image) html += imageFigure(sc.image, i++);
    else if (sc.art) html += drawingFigure(sc.art, "", ART_ALT[sc.art], i++);
    html += `<div class="blocks">${blocksHTML(sc.blocks, i)}</div>`;
    i += sc.blocks.length;
    if (sc.interactive === "verdict") html += verdictExtrasHTML(i);
    if (sc.interactive === "closing") html += closingHTML(i);
    if (sc.interactive === "end") html += endHTML(i);
    stage.innerHTML = html;
    checkImages(stage);
    activateAudio(stage);
    bindEndingScene(sc);

    const prev = $("#end-prev"), next = $("#end-next");
    prev.disabled = state.end === 0;
    next.disabled = state.end === LAST_INDEX;
    const label = state.end === LAST_INDEX ? "The End" : (sc.nextLabel || "Next");
    next.innerHTML = `${label}${state.end === LAST_INDEX ? "" : ' <span aria-hidden="true">→</span>'}`;
    $("#end-progress").textContent = `Scene ${state.end + 1} of ${ENDING.length}`;
    $("#end-fill").style.width = `${Math.round(((state.end + 1) / ENDING.length) * 100)}%`;
    applyQuiet();
    save();
    play(stage);
    if (focus) {
      $("#ending").scrollIntoView({ behavior: smooth(), block: "start" });
      focusEl($("#scene-title"));
    }
  }
  function endGo(k) {
    state.end = Math.min(Math.max(0, k), LAST_INDEX);
    renderEnding(true);
  }
  function applyQuiet() {
    const quiet = state.unlocked === SECTIONS.length && state.end >= QUIET_FROM;
    els.case.classList.toggle("quiet", quiet);
    if (window.RathMusic) window.RathMusic.setMood(quiet ? "quiet" : "sneaky");
  }

  function bindEndingScene(sc) {
    if (sc.interactive !== "verdict") return;
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
        focusEl(box.querySelector(".account"));
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * Images: fall back when a file is missing                           *
   * ------------------------------------------------------------------ */
  function swapImage(img) {
    const src = img.getAttribute("src");
    failedImages.add(src);
    if (img.dataset.fallback) {
      const holder = img.parentElement;
      const key = img.dataset.fallback;
      const wrap = document.createElement("div");
      if (holder.tagName === "FIGURE") {
        // Image sits directly in a pinned figure: swap only the image.
        wrap.className = "frame";
        wrap.setAttribute("role", "img");
        wrap.setAttribute("aria-label", img.alt);
        wrap.innerHTML = drawing(key);
        img.replaceWith(wrap);
        holder.classList.add("drawing");
        return;
      }
      wrap.className = holder.className;
      wrap.setAttribute("role", "img");
      wrap.setAttribute("aria-label", img.alt);
      wrap.innerHTML = drawing(key);
      holder.replaceWith(wrap);
      const fig = wrap.closest("figure");
      if (fig) fig.classList.add("drawing");
    } else if (img.hasAttribute("data-remove-on-error")) {
      const fig = img.closest("figure");
      if (fig) fig.remove(); else img.remove();
    } else if (img.dataset.hideOnError) {
      img.hidden = true;
      const alt = document.getElementById(img.dataset.hideOnError);
      if (alt) alt.hidden = false;
    }
  }
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (t instanceof HTMLImageElement && (t.dataset.fallback || t.dataset.hideOnError || t.hasAttribute("data-remove-on-error"))) swapImage(t);
  }, true);
  document.addEventListener("load", (e) => {
    if (e.target instanceof HTMLImageElement && e.target.closest("#board")) drawStrings(false);
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
    if (!btn || !btn.isConnected) return;
    btn.querySelector(".ico").textContent = on ? "❚❚" : "▶";
    btn.querySelector(".lbl").textContent = `${on ? "Pause" : "Play"} ${btn.dataset.label}`;
  };
  const duck = (v) => { if (window.RathMusic) window.RathMusic.duck(v); };
  player.addEventListener("play", () => { setPlaying(playingBtn, true); duck(true); });
  player.addEventListener("pause", () => { setPlaying(playingBtn, false); duck(false); });
  player.addEventListener("ended", () => { setPlaying(playingBtn, false); duck(false); });
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
      <dl class="cast-list">${S.cast.map((c) => `<dt>${c[0]}</dt><dd>${c[1] || "&nbsp;"}</dd>`).join("")}</dl>
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
    $("#script-section").scrollIntoView({ behavior: smooth(), block: "start" });
    $("#script-heading").focus({ preventScroll: true });
  }

  /* ------------------------------------------------------------------ *
   * Init                                                               *
   * ------------------------------------------------------------------ */
  function openCase() {
    const first = els.case.hidden;
    const front = $("#frontpage");
    const reveal = () => {
      els.case.hidden = false;
      if (first) renderSections();
      renderLedger();
      const target = state.unlocked > 1 ? SECTIONS[state.unlocked - 1].id : null;
      if (target) {
        $(`#ex-${target}`).scrollIntoView({ behavior: "auto", block: "start" });
        focusEl($(`#h-${target}`));
      } else {
        els.case.scrollIntoView({ behavior: "auto", block: "start" });
        focusEl($("#board-title"));
      }
    };
    if (!first || reduceMotion) { reveal(); if (!reduceMotion) return; else return; }
    // The front page folds down into a clipping, then the board appears with it pinned up.
    front.classList.add("handoff");
    setTimeout(() => {
      reveal();
      const clip = $("#exhibit-a");
      if (clip) clip.classList.add("pin-in");
    }, 650);
  }

  function init() {
    els.case = $("#case");
    els.sections = $("#case-sections");
    els.nav = $("#case-nav");

    checkImages(document);
    if (saved && state.unlocked > 1) $("#resume-note").hidden = false;

    $("#open-case").addEventListener("click", openCase);
    const toggles = [...document.querySelectorAll(".music-toggle")];
    if (window.RathMusic) {
      const sync = (isOn) => toggles.forEach((b) => {
        b.setAttribute("aria-pressed", String(isOn));
        b.textContent = isOn ? b.dataset.labelOn : b.dataset.labelOff;
      });
      toggles.forEach((b) => b.addEventListener("click", () => window.RathMusic.toggle()));
      window.RathMusic.onChange(sync);
    } else {
      toggles.forEach((b) => { b.hidden = true; });
    }
    const dlg = $("#ledger-dialog");
    $("#ledger-open").addEventListener("click", () => {
      renderLedger();
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    });
    $("#ledger-close").addEventListener("click", () => { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); });
    dlg.addEventListener("click", (e) => { if (e.target === dlg && dlg.close) dlg.close(); });
    $("#restart").addEventListener("click", () => {
      if (!window.confirm("Start the case over? Your sealed first impression and notes will be cleared.")) return;
      state = fresh();
      cardOpen.clear();
      save();
      renderSections();
      renderLedger();
      els.case.hidden = true;
      $("#frontpage").classList.remove("handoff");
      $("#frontpage").scrollIntoView({ behavior: "auto" });
      $("#open-case").focus({ preventScroll: true });
    });

    document.addEventListener("click", (e) => {
      const t = e.target;
      const audio = t.closest("button[data-audio]");
      if (audio) { toggleAudio(audio); return; }
      const card = t.closest("button[data-card]");
      if (card) { toggleCard(card.dataset.card); return; }
      const un = t.closest("button[data-unlock]");
      if (un) { unlock(Number(un.dataset.unlock)); return; }
      const tape = t.closest("button[data-tape]");
      if (tape) {
        const a = tape.dataset.tape;
        if (a === "rewind") rewindTape();
        else if (a === "next") tapeTo(Math.min(TAPE.length - 1, state.tape + 1));
        else if (a === "prev") tapeTo(Math.max(0, state.tape - 1));
        return;
      }
      if (t.closest("#pass-it-on")) { passItOn(); return; }
      if (t.closest("#examine-theory")) { if (window.RathMusic) window.RathMusic.stinger(false); state.theory = true; save(); rerenderTheory("#theory-reveal .sticky"); return; }
      if (t.closest("#peek")) { if (window.RathMusic) window.RathMusic.stinger(true); state.lifted = true; save(); rerenderTheory("#poster figcaption"); return; }
      if (t.closest("#put-back")) { state.lifted = false; save(); rerenderTheory("#peek"); return; }
      if (t.closest("#end-next")) { endGo(state.end + 1); return; }
      if (t.closest("#end-prev")) { endGo(state.end - 1); return; }
      if (t.closest("#end-replay")) { play($("#ending-stage")); focusEl($("#scene-title")); return; }
      const ej = t.closest("[data-end]");
      if (ej) { endGo(Number(ej.dataset.end)); return; }
      const gs = t.closest("[data-goto-section]");
      if (gs) { const id = gs.dataset.gotoSection; $(`#ex-${id}`).scrollIntoView({ behavior: smooth(), block: "start" }); focusEl($(`#h-${id}`)); return; }
      if (t.closest("#read-again")) {
        state.end = 0; save(); applyQuiet();
        renderEnding(false);
        $("#ex-connie").scrollIntoView({ behavior: smooth(), block: "start" });
        focusEl($("#h-connie"));
        return;
      }
      if (t.closest("[data-open-script]")) openScript();
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

    // Arrow keys step through the tape or the ending when focus is inside them.
    document.addEventListener("keydown", (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const t = e.target;
      if (t.closest("input, textarea, select, [contenteditable]")) return;
      const fwd = e.key === "ArrowRight";
      if (t.closest("#ending")) {
        const k = state.end + (fwd ? 1 : -1);
        if (k >= 0 && k <= LAST_INDEX) { e.preventDefault(); endGo(k); }
      } else if (t.closest("#deck") && state.tape >= 0 && !rewinding) {
        const k = state.tape + (fwd ? 1 : -1);
        if (k >= 0 && k < TAPE.length) { e.preventDefault(); tapeTo(k); }
      }
    });

    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => drawStrings(false), 120); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
