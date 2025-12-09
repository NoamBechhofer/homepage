export const contactAndSocialsWithIconNames: {
  icon: string;
  label: string;
  href?: string;
}[] = [
  { icon: "map-pin", label: "New York, United States" },
  {
    icon: "mail",
    label: "noam.bechhofer@gmail.com",
    href: "mailto:noam.bechhofer@gmail.com",
  },
  { icon: "phone", label: "(845) 263-4510", href: "tel:(845)263-4510" },
  {
    icon: "linkedin",
    label: "noam-bechhofer",
    href: "https://www.linkedin.com/in/noam-bechhofer/",
  },
  {
    icon: "github",
    label: "noambechhofer",
    href: "https://www.github.com/NoamBechhofer",
  },
];
export type ListItem = string | [string, ListItem[]];
type Position = {
  title: string;
  company: string;
  companyIndustry: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  bullets: ListItem[];
};
const rossEnergy: Position = {
  company: "Ross Energy Consulting, LLC",
  companyIndustry: "Energy Consultancy",
  companyUrl: "https://www.rossenergyllc.com/",
  title: "Junior Software Developer",
  location: "New York, NY",
  startDate: "2025-01-20",
  description:
    "Developing internal web applications to streamline business processes, improve data management, and automate reporting tasks using modern web technologies",
  bullets: [
    "Typescript and Next.js for full stack development",
    "Postgres with Prisma ORM for database management",
    "Javascript for dynamic report templating",
    [
      "Numerous API integrations including:",
      [
        "Airtable",
        "Asana",
        "Energy Star Portfolio Manager",
        "Fastfield Forms",
        "Google Drive",
        "Google Sheets",
      ],
    ],
  ],
};
const columbiaTA: Position = {
  company: "Columbia University",
  companyIndustry: "University",
  companyUrl: "https://www.columbia.edu/",
  title: "Teaching Assistant",
  location: "New York, NY",
  startDate: "2022-09-01",
  endDate: "2025-05-01",
  description:
    'Assisted with teaching 500+ student "Introduction to Computer Science" and "Data Structures" courses taught in Java',
  bullets: [
    "Held office hours to assist students with coursework, programming and problem solving",
    "Monitored and provided assistance on course discussion board",
    "Graded programming and written assignments",
    "Assisted students in debugging spaghetti code",
  ],
};
const columbiaResearch: Position = {
  company: "Columbia University Software Systems Laboratory",
  companyIndustry: "University",
  companyUrl: "https://systems.cs.columbia.edu/",
  title: "Research Assistant",
  location: "New York, NY",
  startDate: "2024-01-01",
  endDate: "2024-05-01",
  description:
    "Generalizing Arm Confidential Compute Architecture to protect confidential containers, providing finer-grain data protection, better performance, and smaller trusted computing base over confidential virtual machines",
  bullets: [
    "Worked on team of 3 students",
    "Developed in C",
    "Implemented system calls for a modified host linux to handle writing to containers running encrypted file systems",
  ],
};
const wdcc: Position = {
  company: "Web Development & Consulting Club",
  companyIndustry: "Student Club",
  companyUrl: "https://wdcc.co.nz/",
  title: "Backend Web Developer",
  location: "Auckland, NZ",
  startDate: "2023-04-01",
  endDate: "2023-08-01",
  description:
    "Developed backend for a student club event registration website",
  bullets: [
    "Developed in Node.js",
    "Used Express and MongoDB",
    "Integrated Stripe Checkout API",
    "Developed REST API for frontend to interact with",
  ],
};
export const positions: Position[] = [
  rossEnergy,
  columbiaTA,
  columbiaResearch,
  wdcc,
];
type Course = {
  title: string;
  description: string;
  link?: string;
};
type Education = {
  courses: Course[];
  degree: string;
  graduation?: string;
  matriculation: string;
  concentration: string;
  school: string;
  schoolUrl: string;
};
const columbiaUndergrad = {
  courses: [
    {
      title: "Intro to Computer Science/Programming in Java",
      description: "CS fundamentals, basic programming",
      link: "https://www.cs.columbia.edu/education/courses/course/COMSW1004-001/31212/",
    },
    {
      title: "Data Structures",
      description: "Arrays, Collections, Hashtables, Related Algorithms",
      link: "https://www.cs.columbia.edu/education/courses/course/COMSW3134-002/32057/",
    },
    {
      title: "Discrete Mathematics",
      description: "Proof Techniques, Discrete Structures",
    },
    {
      title: "Fundamentals of Computer Systems",
      description: "Circuit/Processor Design, Assembly Programming",
    },
    {
      title: "Advanced Programming",
      description: "C, Systems Programming, TCP/IP, HTTP",
    },
    {
      title: "Operating Systems",
      description: "Extensive Team-based Linux Kernel hacking",
    },
    {
      title: "Design Using C++",
      description:
        "Taught by Bjarne Stroustrup. System Design, Best Practices, Modern C++",
    },
    {
      title: "Full Stack Web Development",
      description: "React, Express, MongoDB, Cloud Deployment",
    },
    {
      title: "Databases",
      description: "PostgreSQL, Best Practices",
    },
    {
      title: "Security I",
      description:
        "Cryptography, network security, host security, software and hardware security",
      link: "https://www.cs.columbia.edu/~suman/COMS_w4181_2024.html",
    },
  ],
  degree: "Bachelor of Arts",
  graduation: "2025-05-01",
  matriculation: "2021-09-01",
  concentration: "Computer Science",
  school: "Columbia University",
  schoolUrl: "https://www.columbia.edu/",
};
const aucklandStudyAbroad = {
  courses: [
    {
      title: "Object Oriented Software Development",
      description: "UML Modelling, SOLID, Design Patterns",
    },
    {
      title: "Mathematical Foundations of Computer Science",
      description: "Automata, Computability, Complexity",
    },
  ],
  degree: "Study Abroad",
  graduation: "2023-06-01",
  matriculation: "2023-02-01",
  concentration: "Computer Science",
  school: "University of Auckland",
  schoolUrl: "https://www.auckland.ac.nz/",
};
export const schools: Education[] = [columbiaUndergrad, aucklandStudyAbroad];
type Skill = string;
type SkillCategory = {
  name: string;
  skills: Skill[];
};
const webDev: SkillCategory = {
  name: "Web Development",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Svelte",
    "Express",
    "PostgreSQL",
    "MongoDB",
  ],
};
const systemsProgramming: SkillCategory = {
  name: "Systems Programming",
  skills: ["C", "Linux", "Kernel Hacking"],
};
const programming: SkillCategory = {
  name: "Programming Languages",
  skills: ["Java", "C", "C++", "Python", "Javascript", "Typescript", "Rust"],
};
const versionControl: SkillCategory = {
  name: "Version Control",
  skills: ["git", "GitHub", "merge", "rebase", "cherry-pick", "pull request"],
};
const codeDocumentation: SkillCategory = {
  name: "Code Documentation",
  skills: [
    "docstrings",
    "Doxygen",
    "Javadoc",
    "JSDoc",
    "Markdown",
    "Technical Documentation",
  ],
};
const debugging: SkillCategory = {
  name: "Debugging",
  skills: ["printf", "stack trace", "debuggers", "profilers"],
};
export const skills: SkillCategory[] = [
  codeDocumentation,
  debugging,
  programming,
  systemsProgramming,
  versionControl,
  webDev,
];
