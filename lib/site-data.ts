export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  short: string;
  description: string;
  problem: string;
  outcomes: string[];
  stack: string[];
  quote: string;
};

export type Project = {
  name: string;
  category: string;
  image: string | null;
  description: string;
  tags: string[];
  link: string | null;
  type: "Client Work" | "Selected Projects" | "Internal / Experimental";
};

export const company = {
  name: "Corvo Technologies",
  tagline: "Build Smarter. Scale Faster.",
  email: "corvotechnologies@gmail.com",
  phone: "+91-9045146904",
  location: "Dehradun, Uttarakhand, India",
  linkedin: "https://www.linkedin.com/company/corvotechnologies/",
  linkedinLabel: "Corvo Technologies LinkedIn",
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    eyebrow: "AI Engineering",
    short: "AI products and workflows that turn business context into practical systems.",
    description:
      "Corvo helps teams translate operational workflows into AI-powered products, assistants, and internal systems that people can actually use.",
    problem:
      "Many teams explore AI without a clear operating model, resulting in isolated experiments that do not connect to business workflows or data.",
    outcomes: [
      "AI assistants for support and operations",
      "Workflow automation that removes manual steps",
      "Knowledge systems grounded in business context",
    ],
    stack: ["LLMs", "RAG", "Python", "Next.js", "APIs", "Vector search"],
    quote: "Built to turn scattered knowledge into dependable AI workflows.",
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    eyebrow: "Product Engineering",
    short: "From product strategy to production deployment, built end to end.",
    description:
      "Corvo designs and delivers digital products with clear product thinking, modern architecture, and engineering discipline from interface to infrastructure.",
    problem:
      "Growing businesses often need product delivery without the overhead of a large internal engineering team or fragmented vendors.",
    outcomes: [
      "Customer-facing platforms and portals",
      "Internal dashboards and business operations tools",
      "Scalable product foundations for growth",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    quote: "Designed to move from MVP to product maturity without losing speed.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Mobile Product Experiences",
    short: "Native-feeling digital experiences built for conversion, retention, and speed.",
    description:
      "Corvo creates mobile experiences that support business goals, integrate with backend systems, and feel polished in the hands of real users.",
    problem:
      "Many mobile products are built without a strong product strategy, reliable API integrations, or long-term maintainability in mind.",
    outcomes: [
      "iOS and Android product experiences",
      "Cross-platform applications with backend integration",
      "A clearer path from mobile MVP to scale",
    ],
    stack: ["React Native", "Expo", "REST APIs", "Auth", "Push", "Analytics"],
    quote: "Built for product teams that need real-world usability, not just a screen mockup.",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Agentic Systems",
    eyebrow: "Automation Systems",
    short: "Autonomous digital workflows designed around clear tasks and business rules.",
    description:
      "Corvo designs agentic systems that can reason through multi-step work, integrate with internal tools, and handle defined operational flows with guardrails.",
    problem:
      "Teams often need AI to do real operational work, yet many implementations stop at chat interfaces without process design or system boundaries.",
    outcomes: [
      "Task orchestration across business tools",
      "Operational agents with controlled execution paths",
      "Automation built around outcomes, not hype",
    ],
    stack: ["AI Agents", "LLM orchestration", "FastAPI", "Workflows", "Integrations"],
    quote: "Created to support real business actions instead of just generating text.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    eyebrow: "Intelligent Workflows",
    short: "Automation systems that remove repetitive work and improve decision speed.",
    description:
      "Corvo builds AI-enabled automations for teams that need faster internal processes, smarter routing, and less manual work without overengineering the stack.",
    problem:
      "Operational teams lose time on repetitive tasks, fragmented tools, and information silos when business logic is spread across disconnected systems.",
    outcomes: [
      "Automated triage and routing",
      "Knowledge extraction and summarization",
      "Workflow orchestration across tools and processes",
    ],
    stack: ["Python", "N8N", "APIs", "AI", "Triggers", "Business rules"],
    quote: "Structured around the work your team already does, not abstract automation theory.",
  },
  {
    slug: "saas-development",
    title: "SaaS & Product Development",
    eyebrow: "SaaS Product Engineering",
    short: "Product strategy and engineering support for startups and scaling companies.",
    description:
      "Corvo helps founders and product teams bring new software products to life with the right architecture, user experience, and technical foundation for growth.",
    problem:
      "Founders often need product delivery speed but do not have the internal capacity to design, build, and iterate a reliable MVP and roadmap.",
    outcomes: [
      "MVPs, product design systems, and scalable backends",
      "SaaS platforms with strong internal foundations",
      "A clearer path from validation to growth",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Auth", "Billing", "Cloud"],
    quote: "Built for product teams moving from idea to execution without unnecessary drag.",
  },
  {
    slug: "rag-llm",
    title: "RAG & LLM Applications",
    eyebrow: "AI Product Systems",
    short: "Conversational and knowledge systems grounded in your actual context and documents.",
    description:
      "Corvo builds LLM applications that retrieve relevant information, respond reliably, and connect to your real business data sources and workflows.",
    problem:
      "Generic chatbot experiences often fail because they are disconnected from business context, document quality, and operational rules.",
    outcomes: [
      "Document Q&A and research assistants",
      "Knowledge retrieval for teams and customers",
      "LLM experiences that are useful in practice",
    ],
    stack: ["RAG", "Embeddings", "Vector DB", "LLMs", "Python", "Search"],
    quote: "Grounded in the right information, rather than relying on generic AI output.",
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    eyebrow: "Business Systems",
    short: "Purpose-built systems that match your process, users, and operational realities.",
    description:
      "Corvo creates custom software that supports business workflows, internal operations, and customer experiences with a practical approach to architecture and delivery.",
    problem:
      "Off-the-shelf tools rarely fit a company’s actual process, data flow, or growth constraints without friction and compromises.",
    outcomes: [
      "Business platforms tailored to team workflows",
      "Customer portals and operations tooling",
      "System design built around business clarity",
    ],
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "Auth", "Cloud"],
    quote: "Designed for operational clarity and long-term maintainability.",
  },
  {
    slug: "backend-api",
    title: "Backend & API Engineering",
    eyebrow: "System Architecture",
    short: "Reliable infrastructure, integrations, and APIs built for scale and maintainability.",
    description:
      "Corvo engineers the systems behind the product: APIs, services, data flow, integrations, and infrastructure that make product features dependable.",
    problem:
      "Poorly structured backend systems create friction for product teams, slow delivery, and make growth harder to support cleanly.",
    outcomes: [
      "Clean API layers and integrations",
      "Scalable system design for growing product complexity",
      "More reliable backend foundations for every release",
    ],
    stack: ["Node.js", "FastAPI", "Python", "PostgreSQL", "REST", "Cloud"],
    quote: "Built to keep the product moving without chaos behind the scenes.",
  },
];

export const projects: Project[] = [
  {
    name: "AI Media & Content Generator",
    category: "AI Media",
    image: "/images/projects/ai-media-content-generator.png",
    description: "An AI-powered media workflow that turns source content into structured writing and publishing-ready drafts.",
    tags: ["AI", "Content", "Automation"],
    link: null,
    type: "Selected Projects",
  },
  {
    name: "Salary Predictor AI",
    category: "AI",
    image: "/images/projects/salary-ai.png",
    description: "A practical AI-driven salary estimation experience designed to make compensation guidance easier to understand and explore.",
    tags: ["AI", "Web App", "UX"],
    link: null,
    type: "Selected Projects",
  },
  {
    name: "Alex Chatbot",
    category: "AI Assistant",
    image: "/images/projects/alex-chatbot.png",
    description: "A conversational product experience focused on delivering useful, structured answers within a clear user flow.",
    tags: ["Chatbot", "AI", "UX"],
    link: null,
    type: "Selected Projects",
  },
  {
    name: "Medical Chatbot",
    category: "Healthcare AI",
    image: "/images/projects/medical-chatbot.png",
    description: "A healthcare-focused conversational interface designed to support information retrieval and guided interactions.",
    tags: ["AI", "Healthcare", "Automation"],
    link: null,
    type: "Client Work",
  },
  {
    name: "Gym CRM",
    category: "Business Platform",
    image: "/images/projects/gym-crm.png",
    description: "A member operations and workflow dashboard designed to help teams manage engagement and daily operations more efficiently.",
    tags: ["CRM", "Dashboard", "Web App"],
    link: null,
    type: "Selected Projects",
  },
];

export const processSteps = [
  { step: "01", title: "Discover", text: "Understand the business, users and requirements." },
  { step: "02", title: "Define", text: "Turn requirements into a clear technical and product roadmap." },
  { step: "03", title: "Design", text: "Create the experience and architecture." },
  { step: "04", title: "Build", text: "Develop the product using modern engineering practices." },
  { step: "05", title: "Validate", text: "Test, refine and optimize." },
  { step: "06", title: "Launch", text: "Deploy and support the product." },
  { step: "07", title: "Scale", text: "Improve, integrate and evolve." },
];

export const industries = [
  "Startups & New Ventures",
  "SaaS & Technology",
  "E-commerce & Retail",
  "Finance & FinTech",
  "Healthcare",
  "Education",
  "Logistics & Operations",
  "Professional Services",
];

export const capabilityStrip = [
  "AI Engineering",
  "Full-Stack Development",
  "Mobile Applications",
  "SaaS Products",
  "Automation",
  "Cloud & APIs",
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const serviceFocus = [
  "AI assistants",
  "AI agents",
  "RAG systems",
  "LLM applications",
  "intelligent workflows",
  "document intelligence",
  "AI-powered business tools",
  "automation systems",
  "AI integrations",
];

export const solutions = [
  {
    title: "AI-Powered Business Solutions",
    problem: "Teams need better ways to use data, automate decisions, and support employees without adding operational drag.",
    result: "Corvo builds AI-enabled systems around real workflows, from internal tools to customer experiences.",
  },
  {
    title: "Workflow Automation",
    problem: "Manual work keeps teams stuck in repetitive processes that slow delivery and create inconsistency.",
    result: "Corvo creates automations that route work, summarize information, and reduce repetitive handling.",
  },
  {
    title: "Digital Product Development",
    problem: "Businesses need digital experiences that work in the real world, not just in concept decks or prototypes.",
    result: "Corvo builds product experiences that align with business goals, product clarity, and technical quality.",
  },
  {
    title: "Internal Business Platforms",
    problem: "Internal systems need to fit how teams actually operate instead of forcing them into rigid tools.",
    result: "Corvo designs internal tools that organize workflows, data, and operational decision-making.",
  },
  {
    title: "Data & Intelligence Systems",
    problem: "Information is often scattered across documents, tools, and teams, which makes decisions slower and less accurate.",
    result: "Corvo builds retrieval, classification, and intelligence systems that connect information to action.",
  },
  {
    title: "SaaS Product Engineering",
    problem: "Founders and scaling teams need a product foundation that supports growth, product iteration, and technical confidence.",
    result: "Corvo helps shape product strategy, architecture, and product delivery from the earliest MVP stages onward.",
  },
];

export const faqs = [
  {
    question: "What kinds of projects does Corvo take on?",
    answer: "Corvo works with startups, growing businesses, agencies, founders, and established teams that need practical software, AI systems, and digital products.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. Corvo is positioned to work with businesses across global markets, including North America, Europe, the UAE, Singapore, Australia, and beyond.",
  },
  {
    question: "Can you help from idea validation to launch?",
    answer: "Yes. Corvo supports strategy, design, architecture, development, integration, deployment, and ongoing product iteration.",
  },
  {
    question: "What is the typical engagement model?",
    answer: "Engagements vary based on scope and team fit, ranging from focused product sprints to end-to-end product and platform delivery.",
  },
];
