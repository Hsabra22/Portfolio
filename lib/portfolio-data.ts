export const profile = {
  name: "Hassan Sabra",
  role: "Full-Stack AI Engineer",
  tagline:
    "Final-year Computer Science student building production-ready web platforms with Next.js, Laravel and Supabase — and layering in AI where it earns its place.",
  email: "hassan.sabra2005@gmail.com",
  phone: "+961 81 829 462",
  location: "Beirut, Lebanon",
  github: "https://github.com/Hsabra22",
  githubHandle: "Hsabra22",
  linkedin: "https://www.linkedin.com/in/hassan-sabra",
  linkedinHandle: "Hassan Sabra",
  portfolio: "https://portfolio-ten-tealh2k9g74e23.vercel.app",
  image: "/Image.jpg",
};

export const about = {
  paragraph:
    "I'm a full-stack developer and final-year Computer Science student at Antonine University, graduating December 2026. My work spans modern frontends in Next.js and React, Laravel/PHP backends, and Supabase for auth, storage and data — deployed through Azure CI/CD pipelines. Alongside that, I build AI-powered features with Groq and careful prompt engineering, and I've completed a QA internship stress-testing a full ERP/POS system.",
  highlights: [
    {
      title: "Full-stack delivery",
      detail: "From database schema to deployed UI, shipped end to end.",
    },
    {
      title: "AI, applied",
      detail: "Prompt-engineered features that solve a real user problem.",
    },
    {
      title: "Cloud & CI/CD",
      detail: "Azure pipelines and Docker for repeatable deployments.",
    },
    {
      title: "Quality-minded",
      detail: "QA internship experience testing a production ERP/POS system.",
    },
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "React Native (basic)"],
  },
  {
    category: "Backend",
    items: ["Laravel (PHP)", "Supabase (Auth, Database, Storage)", "REST APIs"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "shadcn/ui", "Responsive Design"],
  },
  {
    category: "State & Data",
    items: ["Zustand", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Azure", "Azure Portal", "Azure Pipelines", "CI/CD", "Docker"],
  },
  {
    category: "Authentication",
    items: ["Token-based Auth", "JWT (jsonwebtoken, jose)"],
  },
  {
    category: "AI & Tools",
    items: ["Groq AI", "Prompt Engineering", "AI Integration", "Vercel", "GitHub", "Axios"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "QA Intern — ERP / POS Systems",
    org: "ERP & POS Software Company, Lebanon",
    dates: "Jan 2026 – Mar 2026",
    bullets: [
      "Tested a full Point-of-Sale (POS) and ERP system covering sales, inventory, and reporting modules.",
      "Performed manual and functional software testing to detect bugs, system errors, and usability issues.",
      "Executed test cases across workflows including transactions, product management, and user role actions.",
      "Documented and reported bugs clearly to the development team, then verified fixes post-update.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-Services Admin Platform",
    description:
      "A full-stack government e-services portal where public entities publish services — identity documents, family records and more — and citizens browse and purchase them, with multi-role authentication and order tracking.",
    stack: ["Laravel", "Next.js", "Supabase"],
    featured: true,
  },
  {
    title: "Football XP",
    description:
      "A football companion platform with an AI chatbot at its core — I prompt-engineered a Groq-powered assistant that helps players with guidance and support, wired into a Next.js and Supabase stack.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Groq AI"],
    demo: "https://lebanese-football-xp.vercel.app/",
    featured: true,
  },
  {
    title: "Resumify",
    description:
      "An AI resume generator built on prompt engineering with Groq. Handles authentication, form validation, cloud storage and dynamic resume generation from a user's raw input.",
    stack: ["Next.js", "TypeScript", "Supabase", "Groq AI"],
    demo: "https://resumify-2ddk.vercel.app/",
  },
  {
    title: "TrainiFy",
    description:
      "An AI-driven fitness plan generator that turns a short intake form into a personalized workout program, with full authentication and a production deployment on Vercel.",
    stack: ["Next.js", "TypeScript", "Supabase", "Groq AI"],
    demo: "https://trainifygen.vercel.app/",
  },
  {
    title: "Design Helo",
    description:
      "A furniture design and catalog platform with a modern, responsive interface for browsing and presenting pieces, built on a Next.js and Supabase stack.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    demo: "https://design-helo.vercel.app/",
  },
  {
    title: "Library Management Platform",
    description:
      "A full library system covering authentication, a searchable book catalog and borrowing workflows, backed end to end by Supabase.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    demo: "https://e-library-eight-plum.vercel.app/",
  },
  {
    title: "Hotel Management System",
    description:
      "A hotel booking and administration platform — room management, reservations and a responsive interface for both guests and staff.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    demo: "https://hotel-management-system-indol-pi.vercel.app/",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Antonine University",
  location: "Baabda, Lebanon",
  dates: "2023 – Dec 2026",
  note: "Third year · expected graduation December 2026",
};

export type Certification = {
  title: string;
  issuer: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    title: "MERN Stack Development",
    issuer: "Udemy",
    detail:
      "HTML, CSS, JavaScript, React and Express.js — currently completing the Express.js & NoSQL (MongoDB) module.",
  },
];

export type Language = {
  name: string;
  level: "Native" | "Communicative" | "Basic";
};

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Communicative" },
  { name: "French", level: "Basic" },
];