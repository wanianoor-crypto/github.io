/* =====================================================================
   YOUR PORTFOLIO CONTENT  —  edit this file, nothing else.
   =====================================================================
   This is the ONLY file you need to change for normal edits.
   The page reads everything below and builds itself from it.

   New here? Open the website and read the friendly "Start here" box at
   the top — it walks you through the first steps. (You can hide that box
   later: see GUIDE below.)

   How this file works:
     • Lines starting with //  are comments (notes to you). They are
       ignored by the website. You can read them or delete them.
     • Each setting looks like   key: "value",
       Change the text inside the "quotes". Keep the quotes and the
       comma at the end.
     • A 👉 EDIT marker means "this is a thing you'll probably change".

   If something breaks after an edit, you most likely deleted a quote,
   a comma, or a curly brace { }. Undo your last change and try again.
   (Tip: edit in VS Code — it's free and colours the text, so a missing
   quote is easy to spot.)
   ===================================================================== */


/* =====================================================================
   ⭐ QUICK START — edit these 6 things first (5 minutes)
   ---------------------------------------------------------------------
   1. your name ........... HERO → name
   2. your tagline ........ HERO → tagline
   3. your photo .......... ABOUT → photo  (drop a file in /assets/img)
   4. one project ......... PROJECTS → first item in the list
   5. your email .......... CONTACT → email   (and SOCIAL → mail)
   6. the accent colour ... THEME → palette   ("slate" "forest" "sunset" "violet" "rose" "ocean" "mono")
      (and try THEME → style  "soft" or "flat"  for a whole different look)

   The example content below is GENERIC on purpose — it fits anyone
   (student, designer, writer, maker, career-changer…). Replace it with
   your own. Everything already looks finished, so take your time.
   ===================================================================== */


const SITE = {

  /* ===================================================================
     ===== THEME (colours & font) =====================================
     ===================================================================
     Pick ONE palette name below. To preview another, change the word
     and refresh — OR just click the colour buttons in the "Start here"
     box on the website. Want fully custom colours? Open css/styles.css
     and edit the variables at the very top — the README shows you how. */
  theme: {
    palette: "slate",        // 👉 EDIT — colour: "slate" "forest" "sunset" "violet" "rose" "ocean" "mono"
    style: "soft",           // 👉 EDIT — the "look": "soft" (rounded, default) or "flat" (squared/editorial)
    defaultMode: "auto",     // "auto" follows the visitor's device · or force "light" / "dark"
    font: "system",          // "system" (fast, no download) or a Google Font name — see README
  },

  /* ===================================================================
     ===== GUIDE (the "Start here" help box on the website) ===========
     ===================================================================
     A friendly box at the top of your site that teaches you what to do.
     Only YOU really need it. When you're finished setting up, set
     show: false to remove it for good. (Visitors can also click ✕ to
     hide it in their own browser.) */
  guide: {
    show: true,              // 👉 EDIT — set to false when you're done setting up
  },

  /* ===================================================================
     ===== COMMUNITY  (where this template comes from) ================
     ===================================================================
     A friendly link to the portfolio community — a place to find more
     templates, get help, and share the site you build. It appears in
     the "Start here" box while you set up. Set show: false to hide it. */
  community: {
    show: true,
    label: "Portfolio Community",
    url: "https://example.com/portfolio-community",   // 👉 EDIT — the community's web address
  },

  /* ===================================================================
     ===== SITE / SEO  (how your site looks in Google & when shared) ==
     ===================================================================
     Fill these in once your site is online. The url is the address
     people will visit (you get it from GitHub Pages — see the README). */
  site: {
    url: "https://christian-y-wu.github.io/portfolio-starter-kit/",   // 👉 EDIT — your live web address
    title: "Wania Noor — Personal Portfolio",              // 👉 EDIT — shows in the browser tab & Google
    description:                                          // 👉 EDIT — 1 sentence Google shows under your title
      "Welcome to my personal portfolio — my projects, my story, and how to get in touch.",
    ogImage: "assets/img/og-image.svg",   // 👉 EDIT — the picture shown when your link is shared (1200×630)
    locale: "en",                          // language code, e.g. "en", "pt", "da"
  },

  /* ===================================================================
     ===== NAVBAR  (the bar pinned to the top) ========================
     =================================================================== */
  nav: {
    brand: "Wania Noor",       // 👉 EDIT — your name or logo text (top-left)
    showThemeToggle: true,   // the light/dark switch
    showDotRail: true,       // the little dots on the right that show which section you're in (set false to hide)
    commandPalette: true,    // the quick search (press Ctrl/⌘ + K or "/") — jump anywhere, switch theme, copy email
  },

  /* ===================================================================
     ===== HERO  (the big first screen — your headline moment) ========
     =================================================================== */
  hero: {
    statusText: "Available for new opportunities",  // 👉 EDIT — e.g. "Based in your city" or "Open to freelance"
    statusOpen: true,                  // true = green dot, false = grey dot
    eyebrow: "Hi, my name is",         // the small line above your name
    name: "Wania Noor",                  // 👉 EDIT — your full name
    nameHighlight: "Noor",              // part of your name to underline in the accent colour ("" for none)
    tagline:                           // 👉 EDIT — one or two sentences about you
      "Hi, I'm Wania Noor, an Information Security Engineering student at NUST. I'm passionate about cybersecurity, ethical hacking, and protecting digital systems. I'm continuously developing my programming and security skills through learning, projects, and practical experience.",
    typewriter: false,                 // OPTIONAL typing animation on the name (off under reduced-motion)

    // The two buttons under your tagline. The "href" jumps to a section.
    primaryCta:   { label: "View my work", href: "#projects" },  // 👉 EDIT
    secondaryCta: { label: "About me",     href: "#about" },     // 👉 EDIT

    // "Download CV" button → put your real PDF at assets/cv.pdf (keep the name).
    // Not got a CV? Set show: false to hide the button.
    cv: { show: true, label: "Download CV", file: "assets/cv.pdf" },

    // The "At a glance" card on the right. Each row scrolls to a section.
    // icon names: user · briefcase · graduation · wrench · folder · pen · map-pin · mail
    glanceTitle: "At a glance",
    glance: [
  { icon: "map-pin",   label: "Based in",   value: "Pakistan",             href: "#about" },
  { icon: "user",      label: "About",      value: "Information Security", href: "#about" },
  { icon: "briefcase", label: "Experience", value: "Learning & Internships", href: "#experience" },
  { icon: "folder",    label: "Projects",   value: "Cybersecurity Projects", href: "#projects" },
],
  },

  /* ===================================================================
     ===== SECTION ORDER & VISIBILITY  (the "section registry") =======
     ===================================================================
     This single list controls which sections appear AND their order.
       • To HIDE a section:    change show: true  →  show: false
       • To REORDER sections:  move a whole line up or down
       • To RENAME a nav link: change the "nav" text
     The "id" must stay the same (the code matches content to it). */
  sections: [
    { id: "about",        nav: "About",        show: true  },
    { id: "now",          nav: "Now",          show: true  },  // safe to delete
    { id: "stats",        nav: "Highlights",   show: false },  // safe to delete · "by the numbers" — set true to show
    { id: "experience",   nav: "Experience",   show: true  },
    { id: "education",    nav: "Education",     show: true  },
    { id: "skills",       nav: "Skills",       show: true  },
    { id: "projects",     nav: "Projects",     show: true  },
    { id: "gallery",      nav: "Gallery",      show: true  },  // safe to delete · photo grid
    { id: "writing",      nav: "Writing",      show: true  },  // safe to delete
    { id: "testimonials", nav: "References",   show: true  },  // safe to delete
    { id: "contact",      nav: "Contact",      show: true  },
  ],

  /* ===================================================================
     ===== ABOUT ======================================================
     =================================================================== */
  about: {
    intro: "A little about me",                 // the short line under the section title
    photo: "assets/img/portrait.svg",           // 👉 EDIT — your photo (square works best, ~600×600)
    photoAlt: "A photo of Wania Noor",            // 👉 EDIT — describe the photo (for screen readers)
    // Each item in this list becomes a paragraph. Write a few genuine
    // sentences about yourself. Add or remove paragraphs freely.
    paragraphs: [
  "Hi, I'm Wania Noor, an Information Security Engineering student at NUST with a growing interest in cybersecurity and digital security.",
  "I'm developing my programming skills and exploring areas such as ethical hacking, vulnerability detection, and protecting information systems. I enjoy learning through practical tasks, projects, seminars, and internships.",
  "Beyond academics, I enjoy volunteering and contributing to meaningful community initiatives. I'm always looking for opportunities to learn, improve my skills, and make a positive impact.",
],
   interests: ["Cybersecurity", "Ethical Hacking", "Programming", "Information Security", "Volunteering", "Continuous Learning"],
    // Optional quick facts. Delete a line to hide it, or set quickFacts: [] to hide all.
    quickFacts: [
  { label: "Location",  value: "Pakistan" },
  { label: "Field",     value: "Information Security Engineering" },
  { label: "Languages", value: "English, Urdu" },
  { label: "Email",     value: "wnoor.beis25mcs@student.nust.edu.pk" },
],
  },

  /* ===================================================================
     ===== NOW  (what you're up to right now) — safe to delete ========
     ===================================================================
     A friendly "currently" list. icon names: wrench · pen · folder · user */
  now: {
    intro: "What I'm up to right now",
    items: [
      { icon: "folder", text: "Working on a project I'm genuinely excited about." }, // 👉 EDIT
      { icon: "pen",    text: "Learning a new skill, a little bit every day." },
      { icon: "user",   text: "Hoping to meet more people who care about their craft." },
    ],
  },

  /* ===================================================================
     ===== HIGHLIGHTS / STATS  ("by the numbers") — safe to delete ====
     ===================================================================
     A row of big numbers that gently count up when scrolled into view.
     OFF by default — set the "stats" line in the section list above to
     show: true to switch it on.
       value · any text — "5+", "100%", "30"
       label · what the number means */
  stats: {
    intro: "A few highlights",
    items: [
      { value: "5+",   label: "Years doing what I love" }, // 👉 EDIT
      { value: "30",   label: "Projects completed" },      // 👉 EDIT
      { value: "12",   label: "Happy collaborators" },     // 👉 EDIT
      { value: "100%", label: "Made with care" },          // 👉 EDIT
    ],
  },

  /* ===================================================================
     ===== EXPERIENCE  (your history — a timeline) ====================
     ===================================================================
     This works for ANY field — jobs, internships, volunteering, clubs.
     Copy a whole { ... } block to add another entry. Each block:
       title  · your role / position
       org    · the place (company, school, group…)
       dates  · any text, e.g. "2022 — Present"
       logo   · OPTIONAL small image path, or "" for none
       bullets· 1–3 short lines about what you did (a list) */
  
experience: {
  intro: "My Technology Internships",
  items: [
    {
      title: "Programming Intern",
      org: "Arch Technologies",
      dates: "Feb - May 2026",
      logo: "",
      bullets: [
        "Gained practical exposure to technology through internship activities.",
        "Developed technical knowledge and learned through hands-on experience.",
        "Strengthened problem-solving and professional skills.",
      ],
    },
    {
      title: "Cybersecurity Intern",
      org: "ARZENS",
      dates: "June - September 2026",
      logo: "",
      bullets: [
        "Explored cybersecurity concepts and practical security learning.",
        "Expanded knowledge of information security and related tools.",
        "Continued developing technical and analytical skills.",
      ],
    },
  ],
},


  /* ===================================================================
     ===== EDUCATION  (same timeline pattern, simpler) ================
     =================================================================== */
  education: {
  intro: "My Academic Journey",
  items: [
    {
      title: "Bachelor's Degree in Information Security Engineering",
      org: "National University of Sciences and Technology (NUST)",
      dates: "Currently Enrolled",
      logo: "",
      bullets: [
        "Studying information security, programming, and cybersecurity fundamentals.",
        "Developing technical skills through coursework and practical projects."
      ],
    },
    {
      title: "Higher Secondary School Certificate (FSc Pre-Engineering)",
      org: "APS Fort Road",
      dates: "Completed",
      logo: "",
      bullets: [
        "Achieved 92% in FSc Pre-Engineering."
      ],
    },
    {
      title: "Matriculation",
      org: "APS JS Rawalpindi",
      dates: "Completed",
      logo: "",
      bullets: [
        "Achieved 95% in Matriculation."
      ],
    },
  ],
},

  /* ===================================================================
     ===== SKILLS / TOOLKIT  (grouped tags) ===========================
     ===================================================================
     Group your skills however makes sense for YOU. Rename the groups,
     add your own. Each group has a "name" and a list of "items". */
  skills: {
  intro: "Technical skills and areas I'm developing",
  groups: [
    {
      name: "Programming",
      items: ["C++", "Java", "Python"]
    },
    {
      name: "Cybersecurity",
      items: ["Information Security", "Ethical Hacking Fundamentals", "OSINT Fundamentals"]
    },
    {
      name: "Tools",
      items: ["GitHub", "Kali Linux", "VirtualBox", "Canva"]
    },
    {
      name: "Professional Skills",
      items: ["Problem-solving", "Teamwork", "Communication", "Research"]
    },
  ],
},

  /* ===================================================================
     ===== PROJECTS  (your work — the star of the show) ===============
     ===================================================================
     "Projects" can be anything you've made or done — paid or personal,
     big or small. Copy a whole { ... } block to add one. Each block:
       featured · true makes the card big & wide (use for your best one)
       title, description · what it is
       image · a picture path, or "" to show a neutral placeholder
       tags  · a few short labels (skills, topics — your call)
       links · buttons on the card. Set a url to "" to hide that button.
               type can be "demo", "source", or any label you like. */
projects: {
  intro: "My Projects",
  items: [
  {
    featured: true,
    title: "OTP Verification System",
    description:
      "A Java-based verification system developed to explore secure user authentication. The project includes a graphical interface and features such as OTP expiry, resend functionality, and email validation.",
    image: "assets/img/project-1.svg",
    tags: ["Java", "Authentication", "Cybersecurity"],
    links: [
      { type: "demo", label: "Live Demo", url: "" },
      { type: "source", label: "Source Code", url: "" },
    ],
  },
  {
    featured: false,
    title: "Password Strength Analyzer",
    description:
      "A programming project focused on evaluating password strength and understanding how password complexity contributes to better account security.",
    image: "assets/img/project-2.svg",
    tags: ["Cybersecurity", "Programming", "Password Security"],
    links: [
      { type: "demo", label: "Live Demo", url: "" },
      { type: "source", label: "Source Code", url: "" },
    ],
  },
  {
    featured: false,
    title: "Data Structures and Algorithms in C++",
    description:
      "A collection of C++ practice exercises covering arrays, singly linked lists, and doubly linked lists, with a focus on traversal, insertion, deletion, and searching.",
    image: "assets/img/project-3.svg",
    tags: ["C++", "Data Structures", "Problem-solving"],
    links: [
      { type: "demo", label: "Live Demo", url: "" },
      { type: "source", label: "Source Code", url: "" },
    ],
  },
],
},
  /* ===================================================================
     ===== GALLERY  (a photo grid) — safe to delete ===================
     ===================================================================
     Click a photo to enlarge it (a simple built-in lightbox). Drop your
     images in /assets/img and list them here. Square-ish photos look best.
       image   · the picture path
       caption · OPTIONAL — shown under the photo and in the viewer ("" hides it) */
  gallery: {
    intro: "A few moments & visuals",
    items: [
      { image: "assets/img/gallery-1.svg", caption: "Add a caption — or leave it blank" }, // 👉 EDIT
      { image: "assets/img/gallery-2.svg", caption: "Click a photo to enlarge it" },
      { image: "assets/img/gallery-3.svg", caption: "" },
      { image: "assets/img/gallery-4.svg", caption: "Swap these for your own pictures" },
      { image: "assets/img/gallery-5.svg", caption: "" },
      { image: "assets/img/gallery-6.svg", caption: "Add or remove as many as you like" },
    ],
  },

  /* ===================================================================
     ===== WRITING  (optional blog/notes teasers) — safe to delete ====
     ===================================================================
     These are just static cards for now. The GROWING.md guide explains
     how to load real posts from a blog or notes app later. */
  writing: {
    intro: "Notes & things I've written",
    items: [
      {
        title: "What I learned starting something new",   // 👉 EDIT
        date: "2024-11-02",                                // 👉 EDIT — YYYY-MM-DD
        blurb: "A few honest reflections on beginning a project from scratch — the nerves, the small wins, and what I'd do differently.",
        url: "https://example.com/post-one",               // 👉 EDIT
      },
      {
        title: "On staying motivated",
        date: "2024-08-19",
        blurb: "Simple habits that help me keep going when a project gets hard or the excitement wears off.",
        url: "https://example.com/post-two",
      },
      {
        title: "My favourite tools this year",
        date: "2024-05-30",
        blurb: "A short, friendly round-up of the apps and gear that made my year a little easier.",
        url: "https://example.com/post-three",
      },
    ],
  },

  /* ===================================================================
     ===== TESTIMONIALS / REFERENCES  — safe to delete ================
     =================================================================== */
  testimonials: {
    intro: "Kind words",
    items: [
      {
        quote: "A pleasure to work with — thoughtful, dependable, and always willing to help. I'd happily team up again.", // 👉 EDIT
        name: "Sam Rivera",          // 👉 EDIT
        role: "Colleague",           // 👉 EDIT
      },
      {
        quote: "Brings good energy and real care to everything they do. The kind of person who makes a team better.",
        name: "Jordan Lee",
        role: "Mentor",
      },
    ],
  },

  /* ===================================================================
     ===== CONTACT ====================================================
     =================================================================== */
  contact: {
    intro: "Say hello",
    heading: "Let's connect",                       // 👉 EDIT
    text: "I'm always happy to chat — about work, ideas, or just to say hi. Drop me a line and I'll get back to you.", // 👉 EDIT
    email: "wnoor.beis25mcs@student.nust.edu.pk",                     // 👉 EDIT — your email address
    emailButtonLabel: "Send me an email",

    // OPTIONAL contact form (an add-on). It is OFF by default because it
    // needs a free third-party service to receive messages.
    // To turn it on:
    //   1. Make a free form at https://formspree.io  (or use Netlify Forms)
    //   2. They give you an address like  https://formspree.io/f/abcwxyz
    //   3. Paste it into formAction below and set form: true
    // See the README "Turn on the contact form" recipe for details.
    form: false,                                    // 👉 EDIT — true to show the form
    formAction: "https://formspree.io/f/your-id",   // 👉 EDIT — your Formspree (or other) endpoint
  },

  /* ===================================================================
     ===== FOOTER =====================================================
     =================================================================== */
  footer: {
   tagline: "Learning, building, and securing the digital world.",
    // A small link in the footer — e.g. a friendly nudge to your GitHub
    // repo so visitors can see the code or give it a ⭐. Set url to "" to hide.
    repo: {
      label: "View the code on GitHub",     // 👉 EDIT
     url: "https://github.com/wanianoor-crypto/github.io",  // 👉 EDIT — your repo (or "" to hide)
    },
    showCredit: true,   // the small "Built with the Starter portfolio template" line — set false to remove
  },

  /* ===================================================================
     ===== SOCIAL LINKS  (used in the hero, contact, and footer) ======
     ===================================================================
     Add, remove, or reorder. Set a url to "" to hide that icon.
     Available icon names:
       github · linkedin · x (twitter) · instagram · dribbble · mastodon
       bluesky · youtube · codepen · globe (website) · mail (email)
     For "mail", write the address with mailto:  — see below. */
 social: [
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/wanianoor-crypto"
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/wania-noor-b37176294/"
  },
  {
    icon: "instagram",
    label: "Instagram",
    url: ""
  },
  {
    icon: "globe",
    label: "Portfolio",
    url: "https://wanianoor-crypto.github.io/github.io/"
  },
  {
    icon: "mail",
    label: "Email",
    url: "mailto:wnoor.beis25mcs@student.nust.edu.pk"
  },
],

};

/* Make the config available to the page. (Leave this line alone.) */
window.SITE = SITE;
