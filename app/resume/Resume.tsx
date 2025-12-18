import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import {
  contact,
  personalDetails,
  positions,
  schools,
  skills,
  socials,
} from "./ResumeData";

const contactAndSocialsWithIconNames: {
  icon: string;
  label: string;
  href?: string;
}[] = [...Object.values(contact), ...Object.values(socials)].map((v) => {
  const ret: {
    icon: string;
    label: string;
    href?: string;
  } = {
    icon: v.icon,
    label:
      "username" in v
        ? v.username
        : "address" in v
          ? v.address
          : "number" in v
            ? v.number
            : `${v.city} ${v.state}, ${v.country}`,
  };
  if ("href" in v) {
    ret.href = v.href;
  }
  return ret;
});

export default function Resume() {
  return (
    <>
      <Header />
      <Work />
      <Skills />
      <Education />
    </>
  );
}

const Education = () => (
  <section className="m-5 flex flex-row flex-wrap gap-5">
    <h3 className="min-w-36 text-3xl">Education</h3>
    <div
      className={`flex flex-wrap gap-5 max-lg:flex-col lg:flex-row lg:items-stretch`}
    >
      {schools.map((school) => {
        return (
          <article className="h-max" key={`${school.school}-${school.degree}`}>
            <Card className="h-full p-1 lg:h-max">
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
            </Card>
          </article>
        );
      })}
    </div>
  </section>
);

const Header = () => (
  <header className="mb-16 flex flex-col items-center gap-8 rounded-lg p-5 text-center font-sans text-base leading-normal">
    <div className="h-70 w-60 overflow-hidden rounded-full border-4 border-white">
      <Image
        src="/profile.png"
        alt="Noam Bechhofer profile picture"
        width={685}
        height={914}
        priority
        className="h-full w-full object-cover"
      />
    </div>
    <div>
      <h1 className="text-5xl">
        {personalDetails.firstName} {personalDetails.lastName}
      </h1>
      <h2 className="text-4xl">{personalDetails.profession}</h2>
    </div>
    <article>
      <p>{personalDetails.summary}</p>
    </article>
    <ul className="flex list-none flex-wrap justify-center gap-x-4 gap-y-1.5 p-0">
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
  <section className="m-5 flex flex-row flex-wrap gap-5">
    <h3 className="min-w-36 text-3xl">Skills</h3>
    <div
      className={`flex flex-wrap gap-5 max-lg:flex-col lg:flex-row lg:items-stretch`}
    >
      {Object.entries(skills).map(([category, skills]) => (
        <article key={category} className="flex flex-1 flex-col gap-2">
          <Card className="h-full p-1 lg:h-max">
            <h4 className="text-2xl">{category}</h4>
            <ul className="flex list-none flex-wrap content-start gap-2 p-0">
              {skills.map((skill) => (
                <Badge className="px-2 py-1" key={`${category}-${skill}`}>
                  {skill}
                </Badge>
              ))}
            </ul>
          </Card>
        </article>
      ))}
    </div>
  </section>
);

const Work = () => (
  <section className="m-5 flex flex-row flex-wrap gap-5">
    <h3 className="min-w-36 text-3xl">Work</h3>
    <div
      className={`flex flex-wrap gap-5 max-lg:flex-col lg:flex-row lg:items-stretch`}
    >
      {positions.map((position) => (
        <article key={`${position.company}-${position.title}`} className="w-96">
          <Card className="h-full p-1 lg:h-max">
            <CardHeader>
              <CardTitle className="m-2">
                <h4 className="text-2xl">
                  <Link href={position.companyUrl}>{position.company}</Link>
                </h4>
                <p>{position.companyIndustry}</p>
                <br />
                <p>{position.location}</p>
              </CardTitle>

              <CardDescription className="m-2">
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
              </CardDescription>
            </CardHeader>

            <CardContent className="m-2">
              <p>{position.description}</p>
            </CardContent>

            <CardFooter className="m-2">
              <ul>
                {position.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span>•</span> <span key={bullet}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        </article>
      ))}
    </div>
  </section>
);
