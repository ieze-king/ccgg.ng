/**
 * CCGG content layer.
 *
 * Seed data below is taken from the 2026 Master Project & Implementation
 * Workbook. When the Sanity project exists, `lib/sanity/queries.ts` takes
 * over and these exports become the fallback — the shapes are identical,
 * so no page component changes.
 *
 * Anything marked PLACEHOLDER needs a real value before launch.
 */

export const org = {
  name: "CCGG",
  fullName: "The Church for Community Care & Good Governance",
  tagline: "Faith that cares, leadership that serves",
  rhythm: "Pray • Serve • Empower • Transform",
  geography: "Enugu State, Nigeria",
  principle:
    "Facts before opinions; evidence before claims; service before publicity; common good before personal interest.",
  nature:
    "A Church-inspired, non-partisan civic education and community-care initiative.",
  // PLACEHOLDER — supply real contact details
  email: "hello@ccgg.ng",
  phone: "+234 000 000 0000",
  address: "Enugu State, Nigeria",
  socials: {
    youtube: "#",   // PLACEHOLDER — channel URL
    facebook: "#",  // PLACEHOLDER
    instagram: "#", // PLACEHOLDER
    tiktok: "#",    // PLACEHOLDER
    x: "#",         // PLACEHOLDER
  },
} as const;

export const vision =
  "To build informed, responsible and engaged citizens who contribute to a just, peaceful and prosperous Enugu State, while promoting a culture of servant leadership, accountability and care for the common good.";

export const mission =
  "To provide continuous civic education, promote responsible citizenship, facilitate constructive engagement between citizens and government, support community development, and advance the principles of good governance inspired by faith, human dignity, justice and the common good.";

export const values = [
  "Truth", "Integrity", "Service", "Justice", "Accountability",
  "Human Dignity", "Participation", "Peace", "Transparency", "Community",
] as const;

export type Pillar = {
  slug: string;
  title: string;
  purpose: string;
  activities: string[];
};

export const pillars: Pillar[] = [
  {
    slug: "civic-education",
    title: "Civic Education",
    purpose: "Equip citizens with knowledge and practical civic skills.",
    activities: [
      "Voter education",
      "Rights and responsibilities",
      "Taxation literacy",
      "Misinformation awareness",
      "Democratic participation",
    ],
  },
  {
    slug: "good-governance",
    title: "Good Governance",
    purpose:
      "Help citizens understand and assess public administration using evidence.",
    activities: [
      "Governance conversations",
      "Public-data explainers",
      "Project monitoring",
      "Scorecard methodology",
      "Citizen feedback",
    ],
  },
  {
    slug: "community-care",
    title: "Community Care",
    purpose:
      "Turn the Church's concern for the common good into practical service.",
    activities: [
      "Scholarships",
      "Health outreach",
      "Youth empowerment",
      "Skills training",
      "Elderly and vulnerable-person support",
      "Community grants",
    ],
  },
  {
    slug: "digital-evangelisation",
    title: "Digital Evangelisation",
    purpose:
      "Use professional media to make civic education accessible, engaging and continuous.",
    activities: [
      "Podcasts",
      "Short videos",
      "Documentaries",
      "Parish content",
      "Live conversations",
      "WhatsApp distribution",
    ],
  },
];


export type Campaign = {
  src: string;
  title: string;
  blurb: string;
};

/** Published campaign graphics, as distributed on social and via parishes. */
export const campaigns: Campaign[] = [
  {
    src: "/posters/how-to-think.jpg",
    title: "We don't tell people what to think",
    blurb:
      "We help citizens learn how to think, ask the right questions, and make informed decisions.",
  },
  {
    src: "/posters/good-governance.jpg",
    title: "What is good governance, in simple terms?",
    blurb:
      "Good governance is evident when public power is exercised fairly, transparently and effectively to deliver human development and respect rights.",
  },
  {
    src: "/posters/beyond-the-vote.jpg",
    title: "Beyond the vote — seek accountability",
    blurb:
      "It is not enough only to vote. The real task is holding leaders accountable to their promises.",
  },
  {
    src: "/posters/true-nationhood.jpg",
    title: "True nationhood is built by care for the community",
    blurb:
      "Any strong nation begins with citizens who take responsibility for one another and the places they call home.",
  },
];

export type Programme = {
  title: string;
  format: string;
  purpose: string;
};

export const programmes: Programme[] = [
  { title: "CCGG Civic Conversations", format: "30–45 min podcast", purpose: "Deep conversations on citizenship, governance and society." },
  { title: "Good Governance 101", format: "3–8 min", purpose: "Simple explanations of governance concepts." },
  { title: "Ask the Citizen", format: "Short field interviews", purpose: "Capture authentic community experiences and concerns." },
  { title: "The People's Question", format: "Weekly", purpose: "Answer questions submitted by citizens." },
  { title: "Follow the Money", format: "10–20 min", purpose: "Explain revenue, budgets, spending and project delivery." },
  { title: "Tax & Citizen", format: "15–30 min", purpose: "Tax education and taxpayer–government dialogue." },
  { title: "Before You Vote", format: "10–20 min", purpose: "Non-partisan electoral and voter education." },
  { title: "The Young Citizen", format: "15–30 min", purpose: "Youth leadership, participation and opportunity." },
  { title: "My Parish, My Community", format: "3–5 min documentary", purpose: "Show community strengths, challenges and proposed solutions." },
  { title: "60 Seconds of Citizenship", format: "60 sec video", purpose: "Fast, shareable civic lessons." },
  { title: "Fact or Fiction?", format: "Short explainer", purpose: "Teach citizens to identify misinformation and verify claims." },
  { title: "Church & Society", format: "20–40 min", purpose: "Catholic social teaching, public ethics and the common good." },
];

export const careProgrammes = [
  { title: "CCGG Scholarship Fund", purpose: "Support deserving students using transparent criteria." },
  { title: "CCGG Health Outreach", purpose: "Basic health education and screening through qualified partners." },
  { title: "CCGG Skills Academy", purpose: "Digital, vocational, agricultural and entrepreneurial skills." },
  { title: "CCGG Community Support", purpose: "Targeted assistance to vulnerable persons and families." },
  { title: "CCGG Elderly Care", purpose: "Visits, companionship and practical support." },
  { title: "CCGG Disability Inclusion", purpose: "Advocacy, access and support for persons with disabilities." },
  { title: "CCGG Youth Service", purpose: "Structured youth volunteering in community projects." },
  { title: "CCGG Community Impact Grant", purpose: "Fund selected parish and community solutions." },
];

export const governanceIndicators = [
  "Education", "Healthcare", "Infrastructure", "Water & Sanitation",
  "Security", "Economy & Jobs", "Agriculture", "Youth",
  "Social Protection", "Taxation", "Transparency", "Accountability",
  "Participation", "Environment", "Institutions",
];

/** Published so citizens can see how CCGG assesses any administration. */
export const assessmentSequence = [
  "What was promised?",
  "What was budgeted?",
  "What was done?",
  "What was the outcome?",
  "What do citizens say?",
  "What remains to be done?",
  "What should happen next?",
];

export const festival = {
  name: "CCGG Community & Civic Festival",
  theme: "Our Faith • Our Community • Our Future",
  categories: [
    { name: "Music", items: "Choir · solo singing · original song · civic song · hymn arrangement" },
    { name: "Culture", items: "Igbo proverbs · cultural dance · storytelling · drama · cultural presentation" },
    { name: "Civic Intelligence", items: "Public speaking · debate · civic quiz · essay · My Vision for Enugu · Youth Parliament" },
    { name: "Digital", items: "60-second civic video · parish documentary · civic interview · podcast" },
    { name: "Sports", items: "Football · volleyball · tennis · table tennis · basketball · athletics · chess · scrabble" },
    { name: "Community Impact", items: "Community Solution Challenge · service project · environmental action" },
  ],
};

export const calendar2026 = [
  { period: "September", label: "Preparation", detail: "Governance, editorial code, research protocols, parish registration, presenter training, competition rules, pilot recordings." },
  { period: "October", label: "Grand Launch", detail: "Official CCGG launch, studio and podcast launch, parish competitions, civic education series." },
  { period: "November", label: "Community Month", detail: "Parish activities, field interviews, documentaries, youth programmes, community-care interventions." },
  { period: "December", label: "Grand Finale", detail: "Competition finals, awards, scholarships, community-impact grants, annual impact presentation." },
];

export const weeklyRhythm = [
  { day: "Monday", item: "Good Governance Monday" },
  { day: "Tuesday", item: "Citizen Question" },
  { day: "Wednesday", item: "Parish Spotlight" },
  { day: "Thursday", item: "60 Seconds of Civic Education" },
  { day: "Friday", item: "CCGG Civic Conversation" },
  { day: "Saturday", item: "Competition Saturday" },
  { day: "Sunday", item: "Faith & the Common Good" },
];

/** §4 of the workbook. Names are PLACEHOLDER until supplied. */
export const leadership = [
  { role: "Governing Board", responsibility: "Institutional oversight, strategic direction, integrity and policy approval." },
  { role: "Executive Coordinator", responsibility: "Overall implementation, coordination and reporting." },
  { role: "Director, Civic Education", responsibility: "Curriculum, civic programmes, training and educational materials." },
  { role: "Director, Media & Digital Evangelisation", responsibility: "Studio, podcasting, video, social media and brand consistency." },
  { role: "Director, Community Care", responsibility: "Scholarship, health, welfare, skills and community-impact programmes." },
  { role: "Director, Youth & Parish Engagement", responsibility: "Parish mobilisation, youth activities and competitions." },
  { role: "Research & Governance Unit", responsibility: "Evidence, public documents, project information, research briefs and scorecards." },
  { role: "Legal & Compliance Adviser", responsibility: "Electoral and media compliance, safeguarding, permissions and risk advice." },
  { role: "Finance & Administration", responsibility: "Budgeting, procurement, records, payments and financial reporting." },
  { role: "Monitoring & Evaluation Unit", responsibility: "Targets, data, surveys, dashboards, impact measurement and annual reporting." },
];

/** PLACEHOLDER — replace with the real YouTube IDs once the channel is live. */
export const featuredVideoId = "";
