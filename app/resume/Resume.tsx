import Image from "next/image";

import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import {
  contactAndSocialsWithIconNames,
  ListItem,
  positions,
  schools,
  skills,
} from "./ResumeData";

export default function Resume() {
  return (
    <>
      <Header />
      <Work />
      <Education />
      <Skills />
    </>
  );
}

function renderListItem(item: ListItem, level = 0): React.ReactNode {
  let key: string;
  let liContent: React.ReactNode;

  if (typeof item === "string") {
    key = liContent = item;
  } else {
    const [text, subitems] = item;
    key = `li-${text}`;
    liContent = (
      <>
        {text}
        {subitems && subitems.length > 0 && (
          <ul className={`pl-${level}`}>
            {subitems.map((subitem) => renderListItem(subitem, level + 1))}
          </ul>
        )}
      </>
    );
  }

  return (
    <li className={level === 0 ? `list-disc` : `pl-${level}`} key={key}>
      {liContent}
    </li>
  );
}

const Education = () => (
  <section className="flex flex-row m-5 gap-5">
    <h3 className="text-3xl flex-1">Education</h3>
    <div className={`flex flex-row flex-wrap gap-5 flex-${schools.length}`}>
      {schools.map((school) => {
        return (
          <article className="flex-1" key={`${school.school}-${school.degree}`}>
            <header>
              <h4 className="text-2xl">
                <Link href={school.schoolUrl}>{school.school}</Link>
              </h4>
              <div>{school.concentration}</div>
              <strong>{school.degree}</strong>
              <div>
                <time dateTime={school.matriculation}>
                  {new Date(school.matriculation).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                {" – "}
                {school.graduation ? (
                  <time dateTime={school.graduation}>
                    {new Date(school.graduation).toLocaleString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                ) : (
                  "Present"
                )}
              </div>
            </header>
            <p>{school.degree}</p>

            <h5 className="text-xl">Courses</h5>
            <dl>
              {school.courses.map((course) => {
                const courseTitle = course.link ? (
                  <Link href={course.link}>{course.title}</Link>
                ) : (
                  course.title
                );
                const liContent = (
                  <>
                    <dt className="font-bold">{courseTitle}</dt>
                    <dd>{course.description}</dd>
                  </>
                );
                return (
                  <div key={`${school.school}-${course.title}`}>
                    {liContent}
                  </div>
                );
              })}
            </dl>
          </article>
        );
      })}
    </div>
  </section>
);

const Header = () => (
  <header className=" flex flex-col text-base leading-normal font-sans gap-8 mb-16 text-center items-center p-5 rounded-lg">
    <div className="w-60 h-70 rounded-full overflow-hidden border-white border-4">
      <Image
        src="/profile.png"
        alt="Noam Bechhofer profile picture"
        width={685}
        height={914}
        priority
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h1 className="text-5xl">Noam Bechhofer</h1>
      <h2 className="text-4xl">Software Developer</h2>
    </div>
    <article>
      <p>
        <span className="text-base">Web developer</span> with a passion for
        software. Quick learner and great debugger. I am looking for an
        interesting position where I can grow and learn.
      </p>
    </article>
    <ul className="flex flex-wrap gap-y-1.5 gap-x-4 justify-center list-none p-0">
      {contactAndSocialsWithIconNames.map(({ icon, label, href }) => {
        const contactOrSocialWithIcon = (
          <>
            <FeatherIcon icon={icon} className="h-3" /> {label}
          </>
        );
        const liContent = href ? (
          <Link href={href}>{contactOrSocialWithIcon}</Link>
        ) : (
          contactOrSocialWithIcon
        );
        return <li key={label}>{liContent}</li>;
      })}
    </ul>
  </header>
);

const Skills = () => (
  <section className="flex flex-row m-5 gap-5">
    <h3 className="text-3xl flex-1">Skills</h3>
    <div className={`flex flex-row flex-wrap gap-5 flex-${skills.length}`}>
      {skills.map((skillCategory) => (
        <div key={skillCategory.name} className="flex-1 flex flex-col gap-2">
          <h4 className="text-2xl">{skillCategory.name}</h4>
          <ul className="flex flex-wrap content-start gap-2 list-none p-0">
            {skillCategory.skills.map((skill) => (
              <li
                className=" rounded-sm px-2 py-1"
                key={`${skillCategory.name}-${skill}`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Work = () => (
  <section className="flex flex-row m-5 gap-5">
    <h3 className="text-3xl flex-1">Work</h3>
    <div className={`flex flex-row flex-wrap gap-5 flex-${positions.length}`}>
      {positions.map((position) => (
        <article
          className="flex-1"
          key={`${position.company}-${position.title}`}
        >
          <header className="m-2">
            <h4 className="text-2xl">
              <Link href={position.companyUrl}>{position.company}</Link>
            </h4>
            <div>{position.companyIndustry}</div>
          </header>
          <div className="m-2">
            <h5 className="text-xl">{position.title}</h5>
            <time dateTime={position.startDate}>
              {new Date(position.startDate).toLocaleString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </time>
            {" – "}
            {position.endDate ? (
              <time dateTime={position.endDate}>
                {new Date(position.endDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </time>
            ) : (
              "Present"
            )}
            <div>{position.location}</div>
          </div>
          <div className="m-2">
            <p>{position.description}</p>
          </div>
          <div className="m-2">
            <ul>{position.bullets.map((bullet) => renderListItem(bullet))}</ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);
