import React, { use } from "react";
import { useParams } from "react-router-dom";
import data from "/src/data/experience/experience.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ExperiencePage = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const { id } = useParams();
  const exp = data.find((x) => x.id === id);

  if (!exp) {
    return <h1>Experience not found</h1>;
  }

  return (
    <div className="text-matte p-5 flex justify-center items-start">
      <div className="flex flex-col p-2 lg:p-5 bg-card rounded-xl shadow gap-3 max-w-[900px]">
        <div className=" hover:text-highlight mb-5">
          <Link to={"/#experience"}>&larr; Back to Experience</Link>
        </div>
        <div className="flex gap-3">
          <a href={exp.companyWebsite} target="_blank">
            <div
              className="rounded-xl aspect-square flex justify-center items-center
            bg-surface p-1.5 max-h-[75px] lg:max-h-[150px] 
            transition-all hover:-translate-y-1 hover:scale-[1.02]"
            >
              <img src={exp.logoPath} alt="Company Logo"></img>
            </div>
          </a>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-4xl font-bold">{exp.position}</h1>
            <a
              className="text-lg lg:text-3xl hover:text-highlight"
              href={exp.companyWebsite}
              target="_blank"
            >
              {exp.companyName}
            </a>
            <p className="text-lg text-highlight">{exp.duration}</p>
          </div>
        </div>
        <PageSection title={"Overview"}>
          <div>{exp.description}</div>
        </PageSection>
        <PageSection title={"Responsibilities"}>
          <ul className="list-disc list-outside pl-6 gap-2 flex flex-col">
            {exp.responsibilities.map((responsibility, idx) => {
              return <li key={`resp-${idx}`}>{responsibility}</li>;
            })}
          </ul>
        </PageSection>
        <PageSection title={"Key Achievements"}>
          <ul className="list-disc list-outside pl-6 flex flex-col gap-2">
            {exp.achievements.map((achievement, idx) => {
              return <li key={`ach-${idx}`}>{achievement}</li>;
            })}
          </ul>
        </PageSection>
        <PageSection title={"Technologies and Skills"}>
          <div className="flex flex-wrap gap-3">
            {exp.technologies.map((tech, idx) => {
              //console.log(tech);
              return (
                <div
                  key={`tech-${idx}`}
                  className="p-2 bg-surface rounded-xl shadow font-semibold text-sm"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </PageSection>
        {exp.recommendations.length !== 0 && (
          <PageSection title="Recommendations">
            {exp.recommendations.map((rec, idx) => (
              <div
                key={`rec-${idx}`}
                className="flex flex-col lg:flex-row gap-5 lg:items-start  items-center"
              >
                <div className="lg:w-1/3 lg:flex-shrink-0 flex flex-col  gap-2 items-center group text-center">
                  {rec.image ? (
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl object-cover bg-surface transition-all hover:-translate-y-1 hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl bg-surface" />
                  )}
                  <h2 className="text-lg font-semibold">{rec.name}</h2>
                  <h2 className="text-lg">{rec.position}</h2>
                  <h2 className="text-lg">{rec.relation}</h2>
                  <a
              href={rec.linkedIn}
              target="_blank"
              className="transition-all hover:scale-[1.35] duration-300 group-hover:text-highlight hover:translate-y-1"
            >
              <svg
                className="fill-current line-current"
                width="25px"
                height="25px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>linkedin [#161]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" strokeWidth="1" fillRule="evenodd">
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-180.000000, -7479.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                        id="linkedin-[#161]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
                </div>

                {/* Right column */}
                <div className="lg:w-2/3 lg:min-w-0 leading-relaxed bg-surface p-2 rounded lg:text-left text-center max-w-[400px] lg:max-w-none">
                  {rec.content}
                </div>
              </div>
            ))}
          </PageSection>
        )}
      </div>
    </div>
  );
};

const PageSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="border-b-2 border-matte p-2 font-bold lg:text-lg">
        {title}
      </div>
      {children}
    </div>
  );
};

export default ExperiencePage;
