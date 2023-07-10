import React from "react";
import ReactMarkdown from 'react-markdown';
import { experiences } from "../data";

function IndividualExperience({ experience }) {
  return (
    <div className="p-5 m-5">
      <h3 className="title-font text-white">{experience.company}</h3>
      <p><span className="font-serif italic">{experience.position}</span> |{" "}
        <span className="font-light">{experience.time}</span></p>
      <ul>
        {experience.description.map((bullet, index) => (
          <li key={`${bullet}-${index}`}>
            • <ReactMarkdown components={{
              a: ({node, ...props}) => <a className="underline" {...props} />,
              p: ({node, ...props}) => <span {...props} />
            }}>{bullet}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceList({ experiences }) {
  return (
    <section className="mx-auto px-20 mx-20">
      {experiences.map((experience) => (
        <IndividualExperience key={experience.company} experience={experience} />
      ))}
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiences">
      <div>
        <div className="px-5 mx-auto text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experiences
          </h1>
        </div>
        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
}

export default Experiences;
