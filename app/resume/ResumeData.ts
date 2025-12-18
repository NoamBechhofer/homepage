export const personalDetails = {
  firstName: "Noam",
  lastName: "Bechhofer",
  pronouns: "He/Him",
  profession: "Software Developer",
  summary:
    "Web developer with a passion for software. Quick learner and great debugger. I am looking for an interesting position where I can grow and learn.",
};

export const contact = {
  address: {
    address1: "621 Park Pl",
    address2: "Apt 3",
    city: "Brooklyn",
    state: "NY",
    zip: "11238",
    country: "US",
    icon: "map-pin",
  },
  email: { address: "noam.bechhofer@gmail.com", icon: "mail" },
  phone: { number: "+18452634510", icon: "phone" },
};
export const socials = {
  LinkedIn: {
    username: "noam-bechhofer",
    href: "https://www.linkedin.com/in/noam-bechhofer/",
    icon: "linkedin",
  },
  GitHub: {
    username: "NoamBechhofer",
    href: "https://www.github.com/NoamBechhofer",
    icon: "github",
  },
};

export const languages = { English: "Native", Hebrew: "Fluent" };

type Position = {
  title: string;
  company: string;
  companyIndustry: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  bullets: string[];
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
    "Numerous API integrations including Airtable, Asana, Energy Star Portfolio Manager, Fastfield Forms, Google Drive, and Google Sheets",
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
  gpa?: string;
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
      link: "https://www.cs.columbia.edu/education/courses/course/CSEEW3827-001/31223/",
    },
    {
      title: "Advanced Programming",
      description: "C, Systems Programming, TCP/IP, HTTP",
      link: "https://cs3157.github.io/www/2022-9/",
    },
    {
      title: "Operating Systems",
      description: "Extensive Team-based Linux Kernel hacking",
      link: "http://www.cs.columbia.edu/~nieh/teaching/w4118/",
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
      link: "https://www.cs.columbia.edu/~kar/4111s24/",
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
      link: "https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/230/1233",
    },
    {
      title: "Mathematical Foundations of Computer Science",
      description: "Automata, Computability, Complexity",
      link: "https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/350/1233",
    },
  ],
  degree: "Study Abroad",
  gpa: "3.6/4.0",
  graduation: "2023-06-01",
  matriculation: "2023-02-01",
  concentration: "Computer Science",
  school: "University of Auckland",
  schoolUrl: "https://www.auckland.ac.nz/",
};
export const schools: Education[] = [columbiaUndergrad, aucklandStudyAbroad];
type Skill = string;
type SkillCategory = string;
export const skillsToCategories: { [skill: Skill]: SkillCategory[] } = {
  "stack trace": ["Debugging"],
  profilers: ["Debugging"],
  printf: ["Debugging"],
  debuggers: ["Debugging"],
  "Technical Documentation": ["Documentation"],
  Markdown: ["Documentation"],
  JSDoc: ["Documentation"],
  Javadoc: ["Documentation"],
  Doxygen: ["Documentation"],
  docstrings: ["Documentation"],
  "Tailwind CSS": ["Web Development", "Frontend"],
  Svelte: ["Web Development", "Frontend"],
  React: ["Web Development", "Frontend"],
  HTML: ["Web Development", "Frontend"],
  CSS: ["Web Development", "Frontend"],
  "Next.js": ["Web Development", "Frontend", "Backend"],
  TypeScript: [
    "Web Development",
    "Frontend",
    "Backend",
    "Programming Languages",
  ],
  JavaScript: [
    "Web Development",
    "Frontend",
    "Backend",
    "Programming Languages",
  ],
  PostgreSQL: ["Web Development", "Backend"],
  "Node.js": ["Web Development", "Backend"],
  MongoDB: ["Web Development", "Backend"],
  "Express.js": ["Web Development", "Backend"],
  "C++": ["Systems Programming", "Programming Languages"],
  C: ["Systems Programming", "Programming Languages"],
  Linux: ["Systems Programming", "Operating Systems"],
  "Kernel Development": ["Systems Programming", "Operating Systems"],
  Java: ["Programming Languages"],
  Rust: ["Programming Languages", "Systems Programming"],
  Python: ["Programming Languages", "Scripting"],
  rebase: ["Version Control"],
  "pull request": ["Version Control"],
  merge: ["Version Control"],
  GitHub: ["Version Control"],
  Git: ["Version Control"],
  "cherry-pick": ["Version Control"],
};
export const skills = Object.entries(skillsToCategories).reduce<{
  [category: SkillCategory]: Skill[];
}>((acc, [skill, categories]) => {
  categories.forEach((category) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
  });
  return acc;
}, {});
