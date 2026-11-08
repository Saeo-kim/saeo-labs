/**
 * The single list behind the Home preview and the /ventures page.
 * Order here is display order.
 *
 * To launch a project: set `stage` to "live" and fill in `link` and `preview`.
 * To show a real screen before launch: fill in `preview` and keep the stage.
 * Only add a `link` that is publicly reachable, and only add a `preview`
 * that is a real screen cleared for public viewing.
 *
 * `status` drives the label on every card and the project's place in the
 * Approach cycle. Set "Revenue-generating" only once revenue actually exists.
 */
export const businessCategories = [
  {
    name: "Software & Technology",
    description: "Applications, tools, and technical systems built to do a specific job.",
  },
  {
    name: "Digital Products",
    description: "Self-serve products people can use directly on the web.",
  },
  {
    name: "Content & Media",
    description: "Knowledge platforms, learning material, and editorial work.",
  },
  {
    name: "Services & Solutions",
    description: "Ways of applying what is built here to someone else's problem.",
  },
  {
    name: "Industry Exploration",
    description: "Following fields and technologies before committing to a product.",
  },
] as const;

export type BusinessCategory = (typeof businessCategories)[number]["name"];

export type VentureStatus =
  | "Exploring"
  | "Building"
  | "Testing"
  | "Operating"
  | "Revenue-generating";

export type Preview = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MotifKind =
  | "flow"
  | "join"
  | "blueprint"
  | "vault"
  | "tower"
  | "radar"
  | "playground";

export type Venture = {
  name: string;
  subtitle?: string;
  category: string;
  description: string;
  /** Set when the description was inferred from the name and awaits owner review. */
  descriptionInferred?: true;
  /** Shown in the Home preview. A featured venture needs a `preview`. */
  featured?: true;
  stage: "live" | "development";
  status: VentureStatus;
  /** Primary business area first; further entries are related areas. */
  businessAreas: [BusinessCategory, ...BusinessCategory[]];
  /** What verifiably exists today. Shown under Project Details. */
  currentState: string;
  link: string | null;
  preview: Preview | null;
  icon?: string;
  /** Concept visual shown while there is no public `preview`. */
  motif?: MotifKind;
  /** Column width out of 12 in the In Development grid. */
  span?: 4 | 5 | 7;
};

const conceptState =
  "Concept stage. Not available to use yet; the visual is an illustration and the description is a working summary.";

export const ventures: Venture[] = [
  {
    name: "Lingua Space",
    category: "LANGUAGE / LEARNING",
    description: "A space to collect words, explore languages, and build your own learning archive.",
    featured: true,
    stage: "live",
    status: "Operating",
    businessAreas: ["Digital Products", "Content & Media"],
    currentState: "Public and online. The preview is a capture of the live home page.",
    link: "https://liguaspace.onrender.com/",
    icon: "/ventures/lingua-space-icon.png",
    preview: {
      src: "/ventures/lingua-space-home.png",
      alt: "Lingua Space home screen with Chinese, Japanese, Spanish, and Korean learning spaces",
      width: 1440,
      height: 900,
    },
  },
  {
    name: "THE EXPANSION",
    category: "KNOWLEDGE / TECHNOLOGY",
    description: "A growing knowledge platform exploring technology, computing, systems, and the ideas that connect them.",
    featured: true,
    stage: "live",
    status: "Operating",
    businessAreas: ["Content & Media", "Industry Exploration"],
    currentState: "Public and online. The preview is a capture of the live home page.",
    link: "https://the-expansion.gringang.workers.dev/",
    preview: {
      src: "/ventures/the-expansion-home.png",
      alt: "THE EXPANSION home page with the headline Understand what makes the world work",
      width: 1440,
      height: 900,
    },
  },
  {
    name: "FocusFlow",
    subtitle: "Freelance Manager",
    category: "PRODUCTIVITY / MANAGEMENT",
    description: "A workspace designed to make projects, tasks, and progress easier to understand.",
    featured: true,
    stage: "development",
    status: "Building",
    businessAreas: ["Software & Technology", "Digital Products"],
    currentState: "A working application in private development. The preview is a real screen; there is no public release yet.",
    link: null,
    preview: {
      src: "/ventures/focusflow-home.png",
      alt: "FocusFlow overview screen with the next best action, today's progress, and a priority-ranked task list",
      width: 1440,
      height: 900,
    },
    motif: "flow",
    span: 7,
  },
  {
    name: "SQLD Lab",
    category: "DATA / LEARNING",
    description: "A personal learning lab for exploring SQL beyond memorization, through realistic data mysteries.",
    stage: "development",
    status: "Building",
    businessAreas: ["Digital Products", "Content & Media"],
    currentState: "In development. The preview is a real screen; there is no public release yet.",
    link: null,
    preview: {
      src: "/ventures/sqld-lab-home.png",
      alt: "SQLD Lab home screen with today's SQL quest and learning features",
      width: 1440,
      height: 900,
    },
    motif: "join",
    span: 5,
  },
  {
    name: "Engineering Academy",
    category: "ENGINEERING / EDUCATION",
    description: "A concept for a learning project that builds engineering knowledge step by step.",
    descriptionInferred: true,
    stage: "development",
    status: "Exploring",
    businessAreas: ["Content & Media"],
    currentState: conceptState,
    link: null,
    preview: null,
    motif: "blueprint",
    span: 5,
  },
  {
    name: "ERROR VAULT",
    category: "DEVELOPMENT / DEBUGGING",
    description: "A concept for a vault that captures errors, their causes, and the fixes worth keeping.",
    descriptionInferred: true,
    stage: "development",
    status: "Exploring",
    businessAreas: ["Software & Technology"],
    currentState: conceptState,
    link: null,
    preview: null,
    motif: "vault",
    span: 7,
  },
  {
    name: "AI CONTROL TOWER",
    category: "AI / OPERATIONS",
    description: "A concept for one place to watch over AI tools and workflows as they run.",
    descriptionInferred: true,
    stage: "development",
    status: "Exploring",
    businessAreas: ["Software & Technology", "Services & Solutions"],
    currentState: conceptState,
    link: null,
    preview: null,
    motif: "tower",
    span: 4,
  },
  {
    name: "GLOBAL TECH RADAR",
    category: "TECHNOLOGY / TRENDS",
    description: "A concept for following the technologies moving around the world and what they could mean.",
    descriptionInferred: true,
    stage: "development",
    status: "Exploring",
    businessAreas: ["Industry Exploration", "Content & Media"],
    currentState: conceptState,
    link: null,
    preview: null,
    motif: "radar",
    span: 4,
  },
  {
    name: "BRAIN PLAYGROUND",
    category: "PLAY / COGNITION",
    description: "A concept for playful experiments in memory and logic, made for curious minds.",
    descriptionInferred: true,
    stage: "development",
    status: "Exploring",
    businessAreas: ["Digital Products"],
    currentState: conceptState,
    link: null,
    preview: null,
    motif: "playground",
    span: 4,
  },
];

export const ventureNumber = (venture: Venture) =>
  String(ventures.indexOf(venture) + 1).padStart(2, "0");

export const statusLabel = (venture: Venture) => venture.status.toUpperCase();

/** Anchor id of a venture's card on /ventures. */
export const ventureSlug = (venture: Venture) =>
  venture.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Looks a venture up by name so a typo in a cross-reference fails the build. */
export const ventureNamed = (name: string) => {
  const venture = ventures.find((candidate) => candidate.name === name);
  if (!venture) throw new Error(`Unknown venture: ${name}`);
  return venture;
};
