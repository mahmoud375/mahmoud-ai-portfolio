// ============================================
// TypeScript Interfaces for Portfolio Data
// ============================================

export interface Profile {
  name: string;
  title: string;
  bio: string[];
  email: string;
  location: string;
  imagePath?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    scholar?: string;
    website?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  highlights?: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  year: string;
  gpa?: string;
  honors?: string[];
  thesis?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  type: "Conference" | "Journal" | "Workshop" | "Preprint" | "Book Chapter";
  url?: string;
  pdf?: string;
  abstract?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string[];
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
  featured: boolean;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

// ============================================
// Portfolio Content Data
// ============================================

export const profile: Profile = {
  name: "Mahmoud Elgendy",
  title: "AI / ML Engineer",
  bio: [
    "AI/ML Engineer & Researcher focused on building scalable machine learning systems and driving innovation in deep learning.",
    "My current work emphasizes novel research directions in AI safety, interpretability, and the optimization of high-performance models for production.",
  ],
  email: "mahmoud.elgendy.2182003@gmail.com",
  location: "Tanta, Gharbia, Egypt",
  imagePath: "/profile.jpg", 
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mahmoud-elgendy2003",
    github: "https://github.com/mahmoud375",
  },
};

export const experiences: Experience[] = [
  {
    id: "pub-placeholder",
    role: "Publications/Research",
    company: "Coming Soon",
    location: "Not Yet Available",
    startDate: "",
    endDate: "",
    description: [
      "Please check back soon! I am currently working on research related to AI/ML and deep learning.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "M.S.",
    field: "Computer Science",
    institution: "Stanford University",
    institutionUrl: "https://stanford.edu",
    location: "Stanford, CA",
    year: "2018",
    gpa: "3.9/4.0",
    honors: ["Graduated with Distinction", "Research Excellence Award"],
    thesis: "Neural Network Optimization for Resource-Constrained Environments",
  },
  {
    id: "edu-2",
    degree: "B.S.",
    field: "Computer Engineering",
    institution: "University of California, Berkeley",
    institutionUrl: "https://berkeley.edu",
    location: "Berkeley, CA",
    year: "2016",
    gpa: "3.8/4.0",
    honors: ["Summa Cum Laude", "Dean's List (8 semesters)"],
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Efficient Transformer Models for Low-Resource Languages",
    authors: ["Your Name", "Co-Author A", "Co-Author B"],
    venue: "NeurIPS 2023",
    year: "2023",
    type: "Conference",
    url: "https://arxiv.org/abs/example",
    abstract:
      "We propose a novel approach to training transformer models for low-resource languages using cross-lingual transfer learning and efficient attention mechanisms.",
  },
  {
    id: "pub-2",
    title: "Scalable Distributed Training for Deep Neural Networks",
    authors: ["Co-Author X", "Your Name", "Co-Author Y"],
    venue: "ICML 2022",
    year: "2022",
    type: "Conference",
    url: "https://arxiv.org/abs/example2",
    abstract:
      "A comprehensive study on distributed training strategies for large-scale neural networks, achieving linear scalability up to 1000 GPUs.",
  },
  {
    id: "pub-3",
    title: "Real-Time Object Detection for Autonomous Systems",
    authors: ["Your Name", "Advisor Name"],
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: "2021",
    type: "Journal",
    url: "https://ieeexplore.ieee.org/example",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "YouTube Trending EDA",
    description:
      "Every content creator dreams of making it to the trending page. But what does it actually take? This project tells a story with data, revealing the common threads that connect the most popular videos on the platform.",
    technologies: ["Python", "Data Analysis", "Pandas", "EDA", "Visualization"],
    github: "https://github.com/mahmoud375/YouTube-Trending-EDA.git",
    featured: true,
    year: "2025",
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "C++", "SQL", "Rust"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Redux", "WebGL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Django", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "ML/AI",
    items: ["PyTorch", "TensorFlow", "Transformers", "scikit-learn", "MLflow"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "CI/CD"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "VS Code", "Jupyter", "Figma", "Postman"],
  },
];

// ============================================
// Navigation Data
// ============================================

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Publications", href: "#publications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  // Uncomment below when these sections are implemented:
  // { name: "Education", href: "#education" },
  // { name: "Experience", href: "#experience" },
  // { name: "Skills", href: "#skills" },
];

// ============================================
// Helper Functions
// ============================================

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getRecentPublications(count: number = 5): Publication[] {
  return publications
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, count);
}

export function getCurrentExperience(): Experience | undefined {
  return experiences.find((exp) => exp.endDate === "Present");
}
