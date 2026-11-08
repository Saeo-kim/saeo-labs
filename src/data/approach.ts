import { ventures, type Venture, type VentureStatus } from "./ventures";

/**
 * The operating cycle shown on /approach. A venture's place in the cycle
 * comes from its `status`, so updating ventures.ts updates this page too.
 */
export type CyclePhase = {
  id: string;
  name: string;
  status: VentureStatus;
  purpose: string;
  summary: string;
  tasks: string[];
  doneWhen: string;
  handsOff: string;
};

export const cycle: CyclePhase[] = [
  {
    id: "research",
    name: "RESEARCH",
    status: "Exploring",
    purpose: "Find a problem worth the time.",
    summary: "Investigate markets, users, problems, and opportunities before committing to a build.",
    tasks: ["Market Research", "User Research", "Problem Discovery", "Competitor Analysis", "Opportunity Analysis"],
    doneWhen: "The problem, the person who has it, and the reason to act now can each be stated in one sentence.",
    handsOff: "A defined problem and the smallest thing that could test it.",
  },
  {
    id: "build",
    name: "BUILD",
    status: "Building",
    purpose: "Make the smallest real version.",
    summary: "Turn what the research found into a product, service, or piece of content.",
    tasks: ["Product Planning", "Design", "Engineering", "MVP Development", "Content Creation"],
    doneWhen: "Someone other than the operator could use it for its core purpose.",
    handsOff: "A usable version and a list of what it is meant to prove.",
  },
  {
    id: "validate",
    name: "VALIDATE",
    status: "Testing",
    purpose: "Check that it solves the problem.",
    summary: "Test whether the result solves the real problem, for real users, at acceptable quality.",
    tasks: ["User Feedback", "Product Testing", "Quality Assurance", "Market Validation", "Performance Analysis"],
    doneWhen: "There is evidence to continue, change direction, or stop, and a decision has been made.",
    handsOff: "A product judged ready to run, or a finding that sends it back to Research.",
  },
  {
    id: "operate",
    name: "OPERATE",
    status: "Operating",
    purpose: "Keep it running and improving.",
    summary: "Run the service day to day, and automate what repeats.",
    tasks: ["Service Management", "Maintenance", "Automation", "Customer Support", "Workflow Management"],
    doneWhen: "It runs reliably with routine effort, and usage shows what people value.",
    handsOff: "A stable service and real usage to base a revenue model on.",
  },
  {
    id: "monetize",
    name: "MONETIZE",
    status: "Revenue-generating",
    purpose: "Make it pay for itself.",
    summary: "Design and test a revenue model that can sustain the work.",
    tasks: ["Revenue Model", "Pricing", "Sales", "Marketing", "Cost Management", "Profitability"],
    doneWhen: "Revenue covers the cost of running it, or the numbers show why it cannot.",
    handsOff: "What customers paid for, and what they did not, as the next round of Research.",
  },
];

export const venturesInPhase = (phase: CyclePhase) =>
  ventures.filter((venture) => venture.status === phase.status);

export const phaseOf = (venture: Venture) => {
  const phase = cycle.find((candidate) => candidate.status === venture.status);
  if (!phase) throw new Error(`No cycle phase for status: ${venture.status}`);
  return phase;
};
