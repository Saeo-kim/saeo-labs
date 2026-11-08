/** Philosophy, direction, solo-operation model, and legal references for /about. */

export const tenets = [
  { title: "Independent thinking and execution", text: "Define the problem, make the decision, and carry it through." },
  { title: "Continuous learning", text: "Treat each gap in ability as something to study, then apply it to real work." },
  { title: "Connection to outside knowledge", text: "Build on what other people, tools, and fields already know." },
  { title: "Exploration across fields", text: "Look beyond one industry, because useful ideas often start elsewhere." },
  { title: "Solving real problems", text: "Judge a project by whether it helps someone, not by how it presents." },
  { title: "Responsible operation", text: "Stay accountable for the outcome, whoever or whatever helped produce it." },
];

export const directions = [
  { title: "Independent Business", meaning: "Owning the decisions and the results of the work.", leadsTo: "Running ventures under SAEO LABS, from first idea to daily operation." },
  { title: "Continuous Learning", meaning: "Building business ability on purpose, not by accident.", leadsTo: "Working through the SAEO LABS Academy curriculum and recording its outcomes." },
  { title: "Product Development", meaning: "Turning ideas into things people can actually use.", leadsTo: "Building and improving the projects in the Ventures portfolio." },
  { title: "Business Operations", meaning: "Making recurring work dependable and repeatable.", leadsTo: "Documenting processes and automating what repeats." },
  { title: "Sustainable Revenue", meaning: "Having projects eventually fund their own continuation.", leadsTo: "Researching and testing revenue models through the Monetize phase." },
  { title: "Knowledge Expansion", meaning: "Keeping what is learned and making it reusable.", leadsTo: "Publishing research and reasoning in the History journal." },
  { title: "Technology & Innovation", meaning: "Using new tools where they make a real difference.", leadsTo: "Applying AI and automation to development and operations, with human review." },
  { title: "Cross-industry Exploration", meaning: "Staying curious beyond a single market.", leadsTo: "Keeping early-stage ideas in several fields under exploration." },
];

export const operatorRemit = [
  "Strategy & Planning",
  "Research & Analysis",
  "Product Development",
  "Engineering",
  "Marketing & Content",
  "Finance & Accounting",
  "Operations & Management",
  "Business Development",
];

export const accountabilityRules = [
  "AI is a tool that supports the work.",
  "A person reviews what AI produces.",
  "The operator makes the important decisions.",
  "Results and final responsibility rest with the operator.",
  "Solo operation does not mean doing every task personally.",
  "Outside specialists and collaborators are used when the work calls for them.",
];

export const workModes = [
  { name: "Human-led", text: "The operator does the work and makes the call.", appliesTo: "Strategy, priorities, pricing, final approval." },
  { name: "AI-assisted", text: "AI contributes a draft or analysis that the operator checks and changes.", appliesTo: "Research, code review, content drafts." },
  { name: "Automated", text: "A defined process runs without step-by-step attention and is monitored.", appliesTo: "Deployments, recurring checks, routine reminders." },
  { name: "External Collaboration", text: "A specialist or partner is brought in for work that needs their expertise.", appliesTo: "Tax, legal review, specialized production." },
] as const;

export type WorkMode = (typeof workModes)[number]["name"];

export const workAreas: { name: string; scope: string; modes: WorkMode[] }[] = [
  { name: "Business Strategy", scope: "Which ventures to pursue, pause, or stop.", modes: ["Human-led", "AI-assisted"] },
  { name: "Product & Technology", scope: "Design, engineering, testing, and releases.", modes: ["Human-led", "AI-assisted", "Automated"] },
  { name: "Research & Development", scope: "Market and technology investigation, and prototypes.", modes: ["Human-led", "AI-assisted"] },
  { name: "Marketing & Sales", scope: "Content, search visibility, outreach, and conversion.", modes: ["Human-led", "AI-assisted", "Automated"] },
  { name: "Finance & Accounting", scope: "Revenue, costs, cash flow, tax, and budgets.", modes: ["Human-led", "Automated", "External Collaboration"] },
  { name: "Customer Relations", scope: "Support, feedback, and communication with users.", modes: ["Human-led", "AI-assisted"] },
  { name: "Administration", scope: "Registrations, contracts, and records.", modes: ["Human-led", "External Collaboration"] },
  { name: "Operations", scope: "Keeping services running and workflows in order.", modes: ["Human-led", "Automated"] },
];

export const aiPrinciples = [
  { title: "Research and analysis", text: "Use AI to gather and compare information, then verify anything that matters against its source." },
  { title: "Automating repetition", text: "Automate work that repeats and is easy to check, so attention stays on judgment." },
  { title: "Development and code review", text: "Use AI to help write and review code. Changes are tested and understood before they ship." },
  { title: "First drafts of content", text: "Let AI produce a starting point. What gets published is edited and owned by the operator." },
  { title: "Process support", text: "Use AI to structure plans, checklists, and routine steps." },
  { title: "Review and quality control", text: "Every AI result is checked. Responsibility for it stays with the operator." },
];

export const weeklyExample = [
  { day: "Mon", focus: "Research & Planning", detail: "Review open questions and set the week's priorities." },
  { day: "Tue", focus: "Product Development", detail: "Uninterrupted build time on the current venture." },
  { day: "Wed", focus: "Product Development", detail: "Continue building, then test what changed." },
  { day: "Thu", focus: "Content & Marketing", detail: "Write, publish, and review what reached people." },
  { day: "Fri", focus: "Business Operations", detail: "Maintenance, automation, and administration." },
  { day: "Sat", focus: "Finance Review", detail: "Record income and costs, and check the budget." },
  { day: "Sun", focus: "Weekly Evaluation", detail: "Compare the plan with what happened and adjust." },
];

export const legal = {
  statute: {
    name: "1인 창조기업 육성에 관한 법률",
    href: "https://www.law.go.kr/법령/1인창조기업육성에관한법률",
    version: "Act No. 21284, in force March 31, 2026 (as shown on the official site when checked on November 9, 2026)",
    authority: "Ministry of SMEs and Startups (중소벤처기업부)",
  },
  portal: { name: "National Law Information Center (국가법령정보센터)", href: "https://www.law.go.kr/" },
  definition:
    "Article 2 of the Act defines a one-person creative enterprise (1인 창조기업) as one person, or joint business operators numbering fewer than five, with creativity and expertise, running a business without regular employees. Industries set by Presidential Decree, such as real estate, are excluded.",
  statusNote:
    "SAEO LABS makes no claim here to be recognized under this Act or to receive support through it.",
  operatingNotes: [
    "Check eligibility and support conditions against the current text of the law and its decree before relying on them.",
    "Keep records of revenue and costs from the start, so that later questions can be answered from documents.",
    "Ask a qualified professional about specific legal or tax decisions.",
  ],
};
