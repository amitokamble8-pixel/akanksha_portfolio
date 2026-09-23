
export const PROFILE = {
  first: "Akanksha",
  last: "Janke",
  fullName: "Akanksha Janke",
  tagline: "Building intelligent solutions • Exploring complex questions • Leading with purpose",
  location: "",
  email: "",
  phone: "",
  bio: [
    "I believe the most meaningful innovations happen where technology, research, and human understanding intersect. My journey has been shaped by a curiosity to ask difficult questions, analyse evidence, and create solutions that make a tangible difference.",
    "Hello! I'm Akanksha, a high school student passionate about Artificial Intelligence, Data Science, Public Policy, and Economics. I enjoy working on problems that require both analytical thinking and creativity. Whether I'm exploring patterns in data, designing technology to address real-world challenges, or participating in discussions on international affairs, I am driven by the opportunity to learn, question assumptions, and build meaningful solutions.",
    "Over the years, I have explored diverse experiences that span research, technology, leadership, writing, and communication. While these areas may seem different at first glance, they are connected by a common goal — to better understand people, systems, and the decisions that shape our world.",
    "For me, learning is not about collecting achievements; it is about developing the ability to think critically, collaborate effectively, and approach every challenge with curiosity and purpose.",
  ],
  drivenBy: [
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder.pdf", 
  photo: "",
  aboutPhoto: "/placeholder.jpg",
};

export const WHAT_DRIVES_ME =
  "I am motivated by problems that require both technical thinking and human understanding. I enjoy exploring questions that don't have obvious answers — whether through analysing data, researching public policy, building AI-powered solutions, or engaging in meaningful dialogue with people from different perspectives. What excites me most is the opportunity to transform ideas into impact. Every experience, whether in research, leadership, or technology, has strengthened my belief that innovation is most powerful when it is guided by empathy, evidence, and a genuine desire to improve the lives of others.";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Impact", to: "/volunteering" },
  { label: "Creative Expression", to: "/sports" },
];

export const EXPERIENCE = [
  {
    slug: "college-tip-in",
    role: "Content Writing Intern",
    org: "College.tip.in",
    logo: "",
    location: "", 
    dates: "", 
    meta: "",
    badge: "Internship",
    desc: "Contributed to an education-focused platform by developing content that helped students navigate academic and career decisions. Through researching complex topics and presenting them in an accessible way, I learned the importance of clarity, accuracy, and audience-focused communication.",
    bullets: [],
    tags: ["Educational Content", "Career Research", "Editorial Writing", "Content Strategy"],
    featured: true,
  },
  {
    slug: "kshitiksha-foundation",
    role: "Content Writer",
    org: "Kshitiksha Foundation",
    logo: "",
    location: "",
    dates: "",
    meta: "",
    badge: "Non-profit",
    desc: "Worked with a non-profit organisation to create educational and awareness-driven content that supported community outreach initiatives. This experience reinforced the role of communication in driving engagement and creating social impact.",
    bullets: [],
    tags: ["Social Impact Communication", "Awareness Campaigns", "Blog & Digital Content", "Community Outreach"],
    featured: true,
  },
];

/* ---- Research & writing (renders as "Projects") ---- */

export const PROJECTS = [
  {
    name: "The Origins Project",
    org: "Independent Research", // NOTE: no affiliated organisation was named in the source — inferred.
    meta: "Econometric Research",
    icon: "📊",
    desc: "Investigated the relationship between world leaders' backgrounds and national economic outcomes through statistical analysis and large-scale datasets.",
    tags: ["Econometrics", "Data Analysis", "Public Policy"],
    featured: true,
  },
  {
    name: "VoyagHER.ai",
    org: "Independent Project", // NOTE: inferred — no organisation named.
    meta: "AI-Powered Travel Safety Chatbot",
    icon: "🤖",
    desc: "Designed and developed a Retrieval-Augmented Generation (RAG) chatbot that provides travel safety guidance for women across Southeast Asia.",
    tags: ["Artificial Intelligence", "NLP & RAG", "Product Development"],
    featured: true,
  },
  {
    name: "Civic Technology Research",
    org: "Independent Research", // NOTE: inferred — no organisation named.
    meta: "Policy Research",
    icon: "🌍",
    desc: "Conducted policy-focused research on accessibility, governance, and technology, exploring how evidence-based solutions can improve public systems.",
    tags: ["Policy Research", "Civic Technology", "Accessibility"],
    featured: true,
  },
];

export const AWARDS = [
  {
    icon: "🤖",
    title: "Data Science & Machine Learning",
    meta: "Techgyan Technologies · BITS Pilani Hyderabad Campus",
    detail: "An intensive programme covering machine learning fundamentals, data preprocessing, feature engineering, model evaluation, and practical applications using Python.",
    link: "",
    featured: true,
  },
  {
    icon: "⛓️",
    title: "Blockchain & Web3",
    meta: "Techgyan Technologies · BITS Pilani Hyderabad Campus",
    detail: "Explored blockchain architecture, cryptography, consensus mechanisms, smart contracts, and the foundations of decentralised technologies.",
    link: "",
    featured: true,
  },
  {
    icon: "📊",
    title: "Junior MBA Programme",
    meta: "Clever Harvey · Callido Learning",
    detail: "Completed experiential business modules in entrepreneurship, digital marketing, branding, product strategy, and business analytics through real-world industry challenges.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "Python Programming",
    meta: "Teks Academy",
    detail: "Built a strong foundation in Python programming through practical exercises covering algorithms, object-oriented programming, and problem solving.",
    link: "",
    featured: false,
  },
  {
    icon: "🌐",
    title: "Full Stack Development & Coding",
    meta: "WhiteHat Jr.",
    detail: "Completed an extensive coding programme focused on programming fundamentals, logical thinking, algorithms, and application development through hands-on projects.",
    link: "",
    featured: false,
  },
  {
    icon: "🏊",
    title: "Swimming — Multiple Gold & Silver Medals",
    meta: "Interschool & National-level Competitions",
    detail: "Competed in interschool and national-level swimming competitions, winning multiple gold and silver medals.",
    link: "",
    featured: false,
  },
  {
    icon: "🏃",
    title: "Running — Gold Medals",
    meta: "Interschool Competitions",
    detail: "Earned gold medals in interschool running competitions.",
    link: "",
    featured: false,
  },
];

export const ARTICLES = [
  {
    title: "Artificial Intelligence & Data Science",
    outlet: "Exploring machine learning, RAG systems, and how data can address real-world challenges",
    link: "",
  },
  {
    title: "Public Policy & Economics",
    outlet: "Econometric research and policy-focused analysis of governance and civic systems",
    link: "",
  },
  {
    title: "Creative Writing",
    outlet: "Original poems and short stories published at the school and district level, plus co-authored short-form fiction",
    link: "",
  },
  {
    title: "International Affairs & Diplomacy",
    outlet: "Model United Nations, international press coverage, and cross-cultural dialogue",
    link: "",
  },
];



export const VOLUNTEER = {
  stats: [
    { value: "Vice Head of School", label: "Student Leadership" },
    { value: "Model United Nations", label: "Global Leadership" },
    { value: "International Press", label: "Media & Communication" },
  ],
  orgs: [
    {
      name: "Vice Head of School",
      role: "Student Leadership",
      desc: "Represented the student community and worked closely with school leadership, strengthening the ability to communicate effectively, understand different perspectives, and contribute to initiatives that enhanced student life.",
    },
    {
      name: "Model United Nations",
      role: "Delegate & Executive Board Member",
      desc: "One of the most defining parts of the journey so far — from representing countries as a delegate to serving as Director-General, Chair, Vice Chair, Rapporteur and Executive Board member, developing a deeper understanding of diplomacy, global affairs, and collaborative leadership.",
    },
    {
      name: "International Press",
      role: "Press Team Member",
      desc: "Documented committee proceedings, captured key moments, and communicated complex discussions with clarity, strengthening analytical writing and observation skills.",
    },
    {
      name: "Conference & Event Management",
      role: "Head of Organising Committee",
      desc: "Contributed to organising conferences — from coordinating logistics to supporting delegates and managing event operations — strengthening planning, teamwork, and organisational skills.",
    },
  ],
};


export const SPORTS = [
  {
    icon: "",
    name: "Writing",
    desc: "Published original poems and short stories at the school and district level, and co-authored short-form fiction, contributing to plot development and storytelling. Enjoys writing as a way to explore ideas, perspectives, and creativity.",
  },
  {
    icon: "",
    name: "Theatre",
    desc: "Participated in school theatre productions, exploring storytelling through performance, collaboration, and improvisation, and enjoyed bringing different characters and narratives to life on stage.",
  },
  {
    icon: "",
    name: "Music",
    desc: "Trained in both violin and guitar, exploring Western classical and contemporary music through regular practice — music remains a creative outlet alongside academics.",
  },
  {
    icon: "",
    name: "Swimming & Athletics",
    desc: "Competed in interschool and national-level swimming competitions, winning multiple gold and silver medals, and earned gold medals in interschool running competitions — developing a lasting appreciation for discipline, consistency, and perseverance through sport.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Skills Strengthened",
    items: ["Data Analytics", "Artificial Intelligence", "Research", "Programming", "Problem Solving"],
  },
  {
    group: "Areas of Interest",
    items: ["Artificial Intelligence", "Data Science", "Public Policy", "Economics", "Civic Technology"],
  },
  {
    group: "Profile Highlights",
    items: ["AI & Emerging Technologies", "Research & Data Analytics", "Leadership & Global Engagement", "Communication & Storytelling"],
  },
  {
    group: "Languages",
    items: ["English", "Telugu", "Hindi", "French"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "", // NOTE: no school name given anywhere in the source content — add manually.
    location: "",
    level: "Senior Secondary (CBSE)",
    dates: "", // NOTE: no graduation date given.
    gpa: "",
    coursework: ["Mathematics", "Physics", "Chemistry", "English", "French"],
  },
];

// NOTE: no standardised test scores (SAT/AP/language exams etc.) are given for
// Akanksha in the source PDF, unlike the reference file's subject. Left empty.
export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Impact", to: "/volunteering" },
  { label: "Creative Expression", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin }, // NOTE: empty until a LinkedIn URL is added to PROFILE.socials.
];
