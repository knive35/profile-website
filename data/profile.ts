export interface SocialLink {
  name: string;
  url: string;
  iconName: "github" | "linkedin" | "twitter" | "mail" | "globe";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string; // e.g. 'Advanced', 'Proficient'
    icon?: string;
  }[];
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  about: {
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  contact: {
    email: string;
    location: string;
    availability: string;
  };
  socials: SocialLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
}

export const profileData: ProfileData = {
  name: "Kamesh",
  title: "Full Stack Software Engineer",
  subtitle: "Building modern, scalable web applications & seamless user experiences.",
  bio: "Passionate software engineer specialized in modern web technologies, cloud solutions, and intuitive UI design. Focused on creating performant applications that solve real-world problems.",
  about: {
    paragraphs: [
      "Hello! I'm a passionate full-stack engineer who loves crafting clean code and high-performance digital products.",
      "With experience across modern web technologies like Next.js, React, Node.js, and Cloud services, I bridging frontend design with robust backend architecture.",
      "When I'm not coding, you can find me exploring open-source projects, writing technical posts, or learning about new technologies and AI tools."
    ],
    highlights: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Completed", value: "15+" },
      { label: "Technologies Mastered", value: "12+" },
      { label: "Client / User Satisfaction", value: "100%" }
    ]
  },
  contact: {
    email: "kamesh@example.com",
    location: "San Francisco, CA (Open to Remote)",
    availability: "Available for full-time roles & freelance opportunities"
  },
  socials: [
    { name: "GitHub", url: "https://github.com", iconName: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", iconName: "linkedin" },
    { name: "X (Twitter)", url: "https://twitter.com", iconName: "twitter" },
    { name: "Email", url: "mailto:kamesh@example.com", iconName: "mail" }
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Software Engineer",
      period: "2024 - Present",
      location: "San Francisco, CA",
      description: "Leading frontend architecture and building scalable web applications with Next.js, TypeScript, and micro-frontends.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"]
    },
    {
      company: "Digital Innovations Lab",
      role: "Full Stack Developer",
      period: "2022 - 2024",
      location: "Remote",
      description: "Developed cloud-native web services, REST APIs, and responsive user interfaces for enterprise clients.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"]
    },
    {
      company: "Creative Web Studio",
      role: "Frontend Developer",
      period: "2021 - 2022",
      location: "Austin, TX",
      description: "Crafted pixel-perfect interactive landing pages, web tools, and web design component systems.",
      technologies: ["JavaScript", "React", "CSS3/Sass", "REST APIs", "Git"]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "AI-Powered Task Manager",
      description: "A smart productivity platform that uses AI to categorize, prioritize, and summarize your daily workflows.",
      longDescription: "Features real-time collaboration, automatic scheduling, intelligent task tagging, and customizable dashboards.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Prisma"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true
    },
    {
      id: "project-2",
      title: "E-Commerce Analytics Dashboard",
      description: "Comprehensive analytics tool providing real-time sales metrics, customer insights, and inventory tracking.",
      longDescription: "Built with high-performance charts, dark mode support, exportable reports, and seamless payment gateway integrations.",
      tags: ["React", "Recharts", "Node.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true
    },
    {
      id: "project-3",
      title: "Cloud File Vault & Sharing",
      description: "Secure, end-to-end encrypted file storage and instant sharing web application.",
      longDescription: "Includes link expiration, password protection, file previewers, and drag-and-drop uploads.",
      tags: ["Next.js", "AWS S3", "TypeScript", "Tailwind CSS", "NextAuth.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true
    },
    {
      id: "project-4",
      title: "Developer Portfolio Template",
      description: "Modern, clean, and fast personal portfolio template built with Next.js App Router and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: false
    }
  ],
  skillCategories: [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: "Advanced" },
        { name: "TypeScript / JavaScript", level: "Advanced" },
        { name: "Tailwind CSS / HTML5 / CSS3", level: "Advanced" },
        { name: "State Management (Zustand, Redux)", level: "Proficient" }
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "REST APIs & GraphQL", level: "Advanced" },
        { name: "PostgreSQL / MongoDB", level: "Proficient" },
        { name: "Prisma ORM", level: "Proficient" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git / GitHub Actions", level: "Advanced" },
        { name: "Vercel / AWS Cloud", level: "Proficient" },
        { name: "Docker", level: "Intermediate" },
        { name: "Jest / React Testing Library", level: "Proficient" }
      ]
    }
  ]
};
