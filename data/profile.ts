export interface SocialLink {
  name: string;
  url: string;
  iconName: "github" | "linkedin" | "mail";
}

export interface StatusRow {
  k: string;
  v: string;
}

export interface Counter {
  label: string;
  target: number;
  suffix?: string;
}

export interface Skill {
  name: string;
  level: string;
  used: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface ProjectDetail {
  k: string;
  v: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  badges: string[];
  techLine: string;
  detail: ProjectDetail[];
  githubUrl: string;
}

export interface ArchNode {
  name: string;
  tooltip: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  experienceYears: string;
  company: string;
  companyRole: string;
  location: string;
  availability: string;
  education: string;
  navLinks: { href: string; label: string }[];
  statusRows: StatusRow[];
  counters: Counter[];
  currentFocus: { headline: string; techLine: string };
  about: { paragraphs: string[] };
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  architecture: ArchNode[];
  socials: SocialLink[];
  email: string;
  resumeUrl: string;
  leetcodeUsername: string;
  leetcodeUrl: string;
}

export const profileData: ProfileData = {
  name: "Kamesh Burde",
  title: "Senior Software Engineer · Full Stack & Cloud",
  tagline:
    "I turn ideas into scalable, production-ready software. Engineering elegant systems across frontend, backend, and cloud.",
  experienceYears: "7+",
  company: "Infosys",
  companyRole: "Specialist Programmer",
  location: "Bangalore, India",
  availability: "Open to opportunities",
  education: "B.Tech, Mathematics and Computing — IIT Guwahati (2014–2018)",

  navLinks: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#architecture", label: "Architecture" },
    { href: "#activity", label: "Activity" },
    { href: "#contact", label: "Contact" },
  ],

  statusRows: [
    { k: "Experience", v: "7+ Years" },
    { k: "Focus", v: "Full Stack Engineering" },
    { k: "Cloud", v: "AWS" },
    { k: "Frontend", v: "React / Next.js / Angular" },
    { k: "Backend", v: "Java / Node.js" },
    { k: "Architecture", v: "Microservices / Micro-Frontends" },
    { k: "Location", v: "Bangalore, India" },
    { k: "Status", v: "Open to opportunities" },
  ],

  counters: [
    { label: "Years experience", target: 7, suffix: "+" },
    { label: "Core technologies", target: 20, suffix: "+" },
    { label: "Architecture patterns", target: 3 },
    { label: "Engineers led", target: 10 },
  ],

  currentFocus: {
    headline:
      "Building scalable full-stack platforms across React, Next.js, Angular and Spring Boot services on AWS — leading a team of 10 engineers.",
    techLine: "React · Next.js · Angular · Node.js · Java · Spring Boot · AWS",
  },

  about: {
    paragraphs: [
      "Senior Full Stack Engineer with 7+ years of experience delivering enterprise-scale applications using React, Next.js, Angular, Java, Spring Boot, Node.js and AWS — with particular depth in micro-frontend architecture, system design and performance optimization.",
      "At Infosys I lead a team of 10 engineers across the Equinox platform suite — from module-federated frontends to the microservices and cloud infrastructure behind them — conducting code reviews, mentoring, and turning architectural decisions into software that ships reliably.",
      "B.Tech in Mathematics and Computing from IIT Guwahati (2014–2018).",
    ],
  },

  skillGroups: [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: "Advanced", used: "Woodside Energy automation platform, Infosys Equinox suite" },
        { name: "Next.js", level: "Advanced", used: "Infosys Equinox Ultra Storefront" },
        { name: "Angular", level: "Proficient", used: "Infosys Equinox analytics dashboards" },
        { name: "JavaScript / TypeScript", level: "Advanced", used: "Core language across all frontend work" },
        { name: "Redux", level: "Proficient", used: "State management across dashboard applications" },
        { name: "Material UI", level: "Advanced", used: "Custom components for Woodside Energy, enterprise dashboards" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Java", level: "Advanced", used: "Enterprise platform services at Infosys" },
        { name: "Spring Boot", level: "Advanced", used: "Enterprise microservices" },
        { name: "Node.js / Express", level: "Advanced", used: "Internal APIs and platform services" },
        { name: "REST APIs", level: "Advanced", used: "All backend integration work" },
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS EC2 / S3 / Lambda", level: "Proficient", used: "Application hosting, storage & event-driven tasks" },
        { name: "Docker", level: "Proficient", used: "Containerized service deployment" },
        { name: "Jenkins / GitHub Actions", level: "Proficient", used: "CI/CD pipelines" },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: "Proficient", used: "Website builder & content-driven platforms" },
        { name: "MySQL", level: "Proficient", used: "Enterprise relational data" },
        { name: "PostgreSQL", level: "Proficient", used: "Enterprise relational data" },
      ],
    },
    {
      name: "Architecture",
      skills: [
        { name: "Microservices", level: "Advanced", used: "Enterprise platform suite" },
        { name: "Micro Frontends", level: "Advanced", used: "Infosys Equinox Ultra Storefront" },
        { name: "Module Federation", level: "Advanced", used: "Shared-shell frontend architecture" },
      ],
    },
    {
      name: "Data & Visualization",
      skills: [
        { name: "Esri Maps", level: "Proficient", used: "Woodside Energy geospatial platform" },
        { name: "DataGrid", level: "Proficient", used: "Large-dataset rendering, Woodside Energy" },
        { name: "Highcharts", level: "Proficient", used: "Analytics dashboards, Infosys Equinox" },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git / GitHub", level: "Advanced", used: "Daily version control & collaboration" },
        { name: "Strapi CMS", level: "Proficient", used: "Infosys Equinox Ultra Storefront content layer" },
        { name: "Data Structures & Algorithms", level: "Proficient", used: "Problem-solving & interviews" },
      ],
    },
  ],

  experience: [
    {
      role: "Specialist Programmer",
      company: "Infosys",
      period: "Jul 2018 — Present",
      description:
        "Leading a team of 10 engineers delivering enterprise-scale applications across frontend, backend and cloud — spanning system architecture, micro-frontend composition and performance optimization on the Equinox platform suite.",
      achievements: [
        "Led a team of 10 engineers delivering enterprise applications",
        "Built cloud-native solutions on AWS EC2, S3 and Lambda",
        "Conducted code reviews and mentored engineers",
        "Received multiple Outstanding Performance Ratings, client appreciation emails and Employee of the Year awards",
      ],
      tech: ["React", "Next.js", "Angular", "Node.js", "Java", "Spring Boot", "AWS", "Microservices"],
    },
  ],

  projects: [
    {
      id: "woodside-energy",
      title: "Woodside Energy — Geophysics Automation Platform",
      description:
        "An automation platform for geophysicists, built to streamline geospatial data workflows with heavy interactive visualization.",
      badges: ["Data Visualization", "Enterprise"],
      techLine: "React · TypeScript · Material UI · Esri Maps · DataGrid · Highcharts",
      detail: [
        { k: "Overview", v: "An automation platform for geophysicists at Woodside Energy, built to streamline geospatial data workflows." },
        { k: "Architecture", v: "React/TypeScript frontend with custom Material UI components, Esri Maps for geospatial rendering and Highcharts for data visualization." },
        { k: "My contribution", v: "Built custom Material UI components, enhanced Esri Maps with DataGrid integration, implemented Highcharts visualizations and optimized rendering of large datasets." },
        { k: "Challenge", v: "Rendering and interacting with large geospatial datasets without degrading performance." },
        { k: "Impact", v: "Gave geophysicists a faster, more responsive automation workflow for large-scale datasets." },
      ],
      githubUrl: "https://github.com/knive35",
    },
    {
      id: "equinox-ultra-storefront",
      title: "Infosys Equinox Ultra Storefront",
      description:
        "A white-labelled micro-frontend e-commerce storefront platform enabling multiple brands to ship independently.",
      badges: ["Micro Frontend", "E-Commerce"],
      techLine: "Next.js · React · Module Federation · Strapi CMS · REST APIs",
      detail: [
        { k: "Overview", v: "A white-labelled micro-frontend e-commerce storefront platform enabling multiple brands to ship independently." },
        { k: "Architecture", v: "Next.js/React micro-frontend shell with Module Federation, backed by a Strapi CMS content pipeline and enterprise REST APIs." },
        { k: "My contribution", v: "Integrated Strapi CMS, implemented reusable components, semantic URLs, dynamic SEO and plugin integrations." },
        { k: "Challenge", v: "Giving each brand storefront independent deployability without breaking the shared UI contract or SEO." },
        { k: "Impact", v: "Enabled multiple brand storefronts to ship from one codebase with dynamic SEO and independent release cycles." },
      ],
      githubUrl: "https://github.com/knive35",
    },
    {
      id: "infosys-equinox",
      title: "Infosys Equinox",
      description:
        "The core Infosys Equinox platform: analytics dashboards, reporting modules and a drag-and-drop website builder.",
      badges: ["Analytics", "Full Stack"],
      techLine: "React · Angular · Material UI · Highcharts · Spring Boot",
      detail: [
        { k: "Overview", v: "The core Infosys Equinox platform: analytics dashboards, reporting modules and a drag-and-drop website builder." },
        { k: "Architecture", v: "React and Angular frontends with Highcharts visualizations, Material UI components and Spring Boot services." },
        { k: "My contribution", v: "Built analytics dashboards, reporting modules and drag-and-drop website builder functionality; improved performance through lazy loading and reusable components." },
        { k: "Challenge", v: "Keeping a large, feature-rich enterprise dashboard fast and maintainable as functionality grew." },
        { k: "Impact", v: "Improved frontend performance through lazy loading and a reusable component library adopted across the platform." },
      ],
      githubUrl: "https://github.com/knive35",
    },
  ],

  architecture: [
    { name: "React / Next.js Micro-Frontends", tooltip: "Independently deployable UI modules composed at runtime via Module Federation." },
    { name: "API Gateway", tooltip: "Single entry point routing frontend requests to the right backend service." },
    { name: "Spring Boot Services", tooltip: "Java microservices handling business logic, each owning its own domain." },
    { name: "Data Layer", tooltip: "MongoDB, MySQL and PostgreSQL — storage tuned to each service's needs." },
    { name: "AWS (EC2 / S3 / Lambda)", tooltip: "Hosting, storage and event-driven compute underneath the services." },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/knive35", iconName: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kamesh35/", iconName: "linkedin" },
    { name: "Email", url: "mailto:kameshburde35@gmail.com", iconName: "mail" },
  ],

  email: "kameshburde35@gmail.com",
  resumeUrl: "/resume.pdf",
  leetcodeUsername: "burde",
  leetcodeUrl: "https://leetcode.com/u/burde/",
};
