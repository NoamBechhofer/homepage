import {
  contact,
  languages,
  personalDetails,
  positions,
  schools,
  skillsToCategories,
  socials,
} from "../resume/ResumeData";

const resume = {
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/refs/heads/master/schema.json",
  basics: {
    email: contact.email.address,
    image: "https://noambechhofer.vercel.app/profile.png",
    label: personalDetails.profession,
    location: {
      address: `${contact.address.address1}. ${contact.address.address2}.`,
      city: contact.address.city,
      countryCode: contact.address.country,
      postalCode: contact.address.zip,
      region: contact.address.state,
    },
    name: `${personalDetails.firstName} ${personalDetails.lastName}`,
    phone: contact.phone.number,
    profiles: Object.entries(socials).map(([name, social]) => ({
      network: name,
      username: social.username,
      url: social.href,
    })),
    summary: personalDetails.summary,
    url: "https://noambechhofer.vercel.app",
  },
  education: schools.map((school) => ({
    area: school.concentration,
    courses: school.courses.map((course) => course.title),
    endDate: school.graduation,
    institution: school.school,
    score: school.gpa,
    startDate: school.matriculation,
    studyType: school.degree,
    url: school.schoolUrl,
  })),
  languages: Object.entries(languages).map(([language, proficiency]) => ({
    fluency: proficiency,
    language,
  })),
  skills: Object.entries(skillsToCategories).map(([name, keywords]) => ({
    keywords,
    name,
  })),
  work: positions.map((position) => ({
    description: position.description,
    endDate: position.endDate,
    highlights: position.bullets,
    location: position.location,
    name: position.company,
    position: position.title,
    startDate: position.startDate,
    url: position.companyUrl,
  })),
  // work: [
  //   {
  //     description:
  //       "Developing internal web applications to streamline business processes, improve data management, and automate reporting tasks using modern web technologies",
  //     highlights: [
  //       "Typescript and Next.js for full stack development",
  //       "Postgres with Prisma ORM for database management",
  //       "Javascript for dynamic report templating",
  //       "Numerous API integrations including Airtable, Asana, Energy Star Portfolio Manager, Fastfield Forms, Google Drive, and Google Sheets",
  //     ],
  //     location: "New York, NY",
  //     name: "Ross Energy Consulting LLC",
  //     position: "Junior Software Developer",
  //     startDate: "2025-01-20",
  //     url: "https://www.rossenergyllc.com/",
  //   },
  // ],
};

export default resume;
