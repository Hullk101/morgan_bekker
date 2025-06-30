export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  accomplishments: string[];
  order: number;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
  order: number;
}

export interface PortfolioSettings {
  id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const portfolioSettings: PortfolioSettings = {
  id: 1,
  name: "Morgan Bekker",
  title: "RPA Technical Lead & AI Enthusiast",
  description: "I craft beautiful robotic automation and intelligent solutions, bringing ideas to life.",
  email: "morgsbogiee@gmail.com",
  phone: "Upon request",
  location: "Vancouver, BC",
  githubUrl: "https://github.com/Hulk101",
  linkedinUrl: "https://www.linkedin.com/in/morgan-bekker/",
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "RPA Technical Lead/Developer",
    company: "Government of Canada",
    period: "2022 - Present",
    description: "Technical Advisor and Core Developer on RPA Projects. Mentoring junior developers and driving technical decisions.",
    accomplishments: [
      "Automating various workflows to allow departments to structure their time on more valuable items",
      "Building and leading the team in standardized documentation and best practiceses",
      "Leading many automation projects end-to-end and provided 100% success rate"
    ],
    order: 1,
  },
  {
    id: 2,
    title: "Senior Business Analyst",
    company: "Giant Tiger",
    period: "2021 - 2022",
    description: "Lead Business Anlayst on modernizing current IT systems to be API focused.",
    accomplishments: [
      "Transformed a heavy waterfall reliant company into an Agile way of work",
      "Integrated third-party E-Comm APIs into exiting system infrastructure",
    ],
    order: 2,
  },
  {
    id: 3,
    title: "IT Business/Systems Analyst",
    company: "Hard Rock Casio",
    period: "2019 - 2021",
    description: "Where I started my Canadian professional journey.",
    accomplishments: [
      "Brought a fresh world-class approach in working methodologies to restructure an out-of-date business",
      "Automated complex HR systems to be autonomus while building out datasets and visulizations for the buiness",
    ],
    order: 3,
  },
];

export const skills: Skill[] = [
  // Ways of Working
  { id: 1, name: "Analysis & Systems Design", category: "Core Competencies", icon: "፨", order: 1 },
  { id: 2, name: "Requirements Management", category: "Core Competencies", icon: "📋", order: 2 },
  { id: 3, name: "Agile", category: "Core Competencies", icon: "🏋️‍♂️", order: 3 },
  { id: 4, name: "Stakeholder Engagement ", category: "Core Competencies", icon: "🗣️", order: 4 },
  { id: 5, name: "Data Analyses", category: "Core Competencies", icon: "💾", order: 5 },
  { id: 6, name: "Hunger to learn", category: "Core Competencies", icon: "✏️", order: 6 },

  // Technical Skills
  { id: 7, name: "Blue Prism", category: "Technical", icon: "🟢", order: 1 },
  { id: 8, name: "Python", category: "Technical", icon: "🐍", order: 2 },
  { id: 9, name: "Power Automate", category: "Technical", icon: "🚀", order: 3 },
  { id: 10, name: "SQL", category: "Technical", icon: "🗃️", order: 3 },

  // Tools
  { id: 11, name: "Git", category: "tools", icon: "📝", order: 1 },
  { id: 12, name: "Azure", category: "tools", icon: "☁️", order: 2 },
  { id: 13, name: "AWS", category: "tools", icon: "☁️", order: 3 },
  { id: 14, name: "Grafana", category: "tools", icon: "〽️", order: 4 },
  { id: 15, name: "OpenAI", category: "tools", icon: "👾", order: 5 },
  { id: 16, name: "CrewAI", category: "tools", icon: "👾", order: 6 },
  { id: 17, name: "MCP", category: "tools", icon: "👾", order: 7 },
  
];

// Utility functions
export const generateSessionId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadFile = (content: string, filename: string, contentType: string) => {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};