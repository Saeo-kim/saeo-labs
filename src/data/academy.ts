import { ventureNamed, type Venture } from "./ventures";

/**
 * SAEO LABS ACADEMY, shown on /about.
 *
 * Status rule: "Completed" only when the study was actually finished, and
 * "In Progress" only with real work behind it. `records` lists outcomes that
 * exist; leave it empty rather than filling it with intentions.
 */
export type CourseStatus = "Planned" | "In Progress" | "Completed";

export type LearningRecord = {
  label: string;
  href: string;
};

export type Course = {
  number: string;
  title: string;
  titleKo: string;
  goal: string;
  topics: string[];
  appliedTo: string;
  relatedProjects: Venture[];
  records: LearningRecord[];
  status: CourseStatus;
};

export const courseStatuses: CourseStatus[] = ["In Progress", "Planned", "Completed"];

export const courses: Course[] = [
  {
    number: "01",
    title: "Business Fundamentals",
    titleKo: "사업의 기본 원리",
    goal: "Understand how a business creates value and why customers would pay for it.",
    topics: ["How a business is structured", "Markets and customers", "Value propositions", "Finding problems", "Basic principles of running a business"],
    appliedTo: "Deciding which problems a venture should take on.",
    relatedProjects: [ventureNamed("Lingua Space"), ventureNamed("FocusFlow")],
    records: [],
    status: "Planned",
  },
  {
    number: "02",
    title: "Business Models",
    titleKo: "사업 모델 설계",
    goal: "Be able to design and compare ways for a project to sustain itself.",
    topics: ["Business Model Canvas", "Revenue Models", "Pricing Strategies", "Cost Structure", "Value Creation", "Customer Segments"],
    appliedTo: "Choosing a revenue model when a venture reaches the Monetize phase.",
    relatedProjects: [ventureNamed("Lingua Space"), ventureNamed("THE EXPANSION")],
    records: [],
    status: "Planned",
  },
  {
    number: "03",
    title: "Product Development",
    titleKo: "제품 및 서비스 개발",
    goal: "Take an idea from validation through to a working product, and keep improving it.",
    topics: ["Idea Validation", "Product Planning", "UX/UI", "Software Development", "MVP", "Testing", "Product Iteration"],
    appliedTo: "Every venture in the Build and Operate phases.",
    relatedProjects: [ventureNamed("Lingua Space"), ventureNamed("THE EXPANSION"), ventureNamed("FocusFlow"), ventureNamed("SQLD Lab")],
    records: [
      { label: "Lingua Space (public)", href: "https://liguaspace.onrender.com/" },
      { label: "THE EXPANSION (public)", href: "https://the-expansion.gringang.workers.dev/" },
    ],
    status: "In Progress",
  },
  {
    number: "04",
    title: "Business Operations",
    titleKo: "사업 운영",
    goal: "Run recurring work through reliable processes instead of memory and effort.",
    topics: ["Work processes", "Project management", "Task automation", "Using AI", "Operating systems for the business", "Quality control", "Working efficiently"],
    appliedTo: "Day-to-day running of public ventures.",
    relatedProjects: [ventureNamed("FocusFlow"), ventureNamed("AI CONTROL TOWER")],
    records: [],
    status: "Planned",
  },
  {
    number: "05",
    title: "Finance & Accounting",
    titleKo: "재무 및 회계",
    goal: "Read the financial position of a business and make decisions from it.",
    topics: ["Revenue and costs", "Profit and loss", "Cash flow", "Budgeting", "Tax", "Accounting basics", "Financial analysis"],
    appliedTo: "Budgeting ventures and reviewing their costs.",
    relatedProjects: [],
    records: [],
    status: "Planned",
  },
  {
    number: "06",
    title: "Marketing & Sales",
    titleKo: "마케팅과 판매",
    goal: "Reach the right people and turn their interest into lasting customers.",
    topics: ["Market research", "Content marketing", "SEO", "Advertising", "Customer acquisition", "Conversion rate", "Sales and customer management"],
    appliedTo: "Bringing public ventures to the people they are built for.",
    relatedProjects: [ventureNamed("Lingua Space"), ventureNamed("THE EXPANSION")],
    records: [],
    status: "Planned",
  },
  {
    number: "07",
    title: "Independent Operation",
    titleKo: "독립적 사업 운영",
    goal: "Bring every discipline together to run a sustainable business as one accountable operator.",
    topics: ["Running a one-person company", "Decision-making", "Prioritizing work", "Using outside resources", "AI-based operations", "Risk management", "Sustainable business structure"],
    appliedTo: "The operating model of SAEO LABS itself.",
    relatedProjects: [],
    records: [],
    status: "Planned",
  },
];
