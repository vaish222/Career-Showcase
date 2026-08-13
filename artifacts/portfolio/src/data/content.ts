// ============================================================
// Portfolio content — swap out placeholder values with your real info
// ============================================================

export const personal = {
  name: "Vaishali Goel",
  title: "Senior Software Engineer → Product Manager",
  tagline:
    "I build software and now I ship products — bridging engineering depth with product intuition to turn complex problems into things people actually love.",
  email: "vaishali221@gmail.com",
  github: "https://github.com/vaish222",
  linkedin: "https://www.linkedin.com/in/vaishaligoel221/",
  resumeUrl: "/resume.pdf", // Replace with your actual resume file path
  location: "San Francisco Bay Area",
  bio: `I'm a Senior Software Engineer with 8+ years of experience building scalable systems at companies ranging from early-stage startups to Fortune 500s. After years of shipping code and watching products succeed (and fail), I've developed a deep intuition for what makes products great — and I'm now channeling that into a full transition to Product Management.

My engineering background means I ask the right questions, understand technical tradeoffs, and earn the trust of the teams I work with. My product instincts come from years of sitting in discovery calls, reading metrics, and caring deeply about why features exist — not just how they're built.

I'm looking for a PM role where I can bring both sides of that equation to a team that builds things that matter.`,
};

export const projects = [
  {
    id: 1,
    title: "Unified Analytics Platform",
    description:
      "Led product thinking and engineering for an internal analytics platform that consolidated 7 disparate dashboards into a single source of truth. Reduced time-to-insight for data teams by 60%.",
    status: "Launched" as const,
    tags: ["Product Strategy", "Data", "React", "PostgreSQL"],
    impact: "60% faster insight delivery, adopted by 200+ internal users",
    year: "2024",
    link: null,
  },
  {
    id: 2,
    title: "Developer Onboarding Redesign",
    description:
      "Identified friction in the developer onboarding flow through data analysis and user interviews. Drove cross-functional redesign that cut time-to-first-API-call from 3 days to 4 hours.",
    status: "Launched" as const,
    tags: ["User Research", "Developer Experience", "Node.js"],
    impact: "Activation rate improved 38% in 30 days post-launch",
    year: "2023",
    link: null,
  },
  {
    id: 3,
    title: "Real-Time Collaboration Engine",
    description:
      "Architected and built a real-time collaborative editing system inspired by operational transformation. Currently exploring the product surface for enterprise use cases.",
    status: "In Research" as const,
    tags: ["Distributed Systems", "WebSockets", "Go"],
    impact: "Sub-50ms sync latency across regions",
    year: "2024",
    link: null,
  },
  {
    id: 4,
    title: "Customer Feedback Intelligence",
    description:
      "Prototyping an LLM-powered system to classify and prioritize customer feedback from multiple channels into structured product signals for PM teams.",
    status: "In Progress" as const,
    tags: ["AI/ML", "Product Intelligence", "Python"],
    impact: "Prototype reduces triage time by ~70%",
    year: "2024",
    link: null,
  },
];

export const skills = {
  engineering: [
    "TypeScript / JavaScript",
    "React & Node.js",
    "Go",
    "Python",
    "PostgreSQL",
    "Distributed Systems",
    "System Design",
    "REST & GraphQL APIs",
    "Docker / Kubernetes",
    "AWS / GCP",
  ],
  product: [
    "Product Strategy",
    "User Research & Interviews",
    "Jobs-to-be-Done",
    "Roadmap Planning",
    "A/B Testing",
    "OKRs & Metrics",
    "PRD Writing",
    "Stakeholder Alignment",
    "Go-to-Market",
    "Agile / Scrum",
  ],
  tools: [
    "Figma",
    "Amplitude",
    "Mixpanel",
    "Linear",
    "Notion",
    "Jira",
    "Productboard",
    "SQL / Data Studio",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Meridian Technologies",
    role: "Senior Software Engineer",
    period: "2021 – Present",
    description:
      "Tech lead for the Developer Platform team. Own the roadmap for 3 internal developer tools used by 500+ engineers. Drive cross-functional initiatives from discovery through launch, collaborating closely with product and design.",
    highlights: [
      "Drove 0-to-1 launch of unified analytics platform, now core to company data strategy",
      "Mentored 4 junior engineers through growth to mid-level in 18 months",
      "Partnered with PM to define Q3 roadmap priorities; outcome: 2 highest-impact features shipped on time",
    ],
  },
  {
    id: 2,
    company: "Stratum Labs",
    role: "Software Engineer",
    period: "2018 – 2021",
    description:
      "Full-stack engineer on the growth team. Built and iterated on user-facing features tied directly to activation, retention, and revenue metrics.",
    highlights: [
      "Built A/B testing infrastructure used by the entire product org",
      "Redesigned onboarding flow — 38% lift in Day-7 activation",
      "Collaborated directly with PMs on spec refinement and success metrics",
    ],
  },
  {
    id: 3,
    company: "Nova Systems (Startup)",
    role: "Software Engineer",
    period: "2016 – 2018",
    description:
      "Early engineer at a 12-person startup building enterprise workflow software. Wore many hats — from infra to customer success — and learned how products live or die on user adoption.",
    highlights: [
      "Sole engineer on real-time notification system serving 10k daily active users",
      "Led customer discovery calls alongside CEO, directly influencing product direction",
    ],
  },
];

export const education = [
  {
    institution: "University of California, Berkeley",
    degree: "B.S. Electrical Engineering & Computer Sciences",
    period: "2012 – 2016",
    notes: "Dean's List · Capstone: Distributed key-value store in Go",
  },
  {
    institution: "Reforge",
    degree: "Product Strategy & Growth Intensive",
    period: "2023",
    notes: "Cohort-based PM upskilling program",
  },
  {
    institution: "PM School",
    degree: "Product Management Certificate",
    period: "2022",
    notes: "Focused on user research, roadmap prioritization, and GTM",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Why Engineers Make Dangerous PMs (In the Best Way)",
    excerpt:
      "The instincts that make engineers great at shipping code can be a superpower — or a trap — when you step into a product role. Here's what I've learned in the transition.",
    date: "October 2024",
    readTime: "6 min read",
    tags: ["Career", "Product Management"],
    url: null,
  },
  {
    id: 2,
    title: "The Spec Nobody Writes: Defining What 'Done' Means for Your Team",
    excerpt:
      "Every PM writes PRDs. Far fewer define what success looks like in a way the whole team can agree on before a line of code is written. Here's the framework I use.",
    date: "August 2024",
    readTime: "5 min read",
    tags: ["Product Management", "Process"],
    url: null,
  },
  {
    id: 3,
    title: "Distributed Systems Thinking Applied to Product Strategy",
    excerpt:
      "CAP theorem, eventual consistency, partition tolerance — turns out these concepts map surprisingly well onto how product teams make tradeoffs. A mental model transfer.",
    date: "June 2024",
    readTime: "8 min read",
    tags: ["Engineering", "Product Strategy"],
    url: null,
  },
  {
    id: 4,
    title: "On Running Customer Interviews as an Engineer",
    excerpt:
      "I sat in on my first user interview as an engineer and walked away with a completely different understanding of why we were building what we were building. Here's what changed.",
    date: "March 2024",
    readTime: "4 min read",
    tags: ["User Research", "Career"],
    url: null,
  },
];
