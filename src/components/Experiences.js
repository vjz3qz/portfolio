import React from "react";
import ReactMarkdown from 'react-markdown';
import { experiences } from "../data";
import { BriefcaseIcon } from "@heroicons/react/solid";


function IndividualExperience({ experience }) {
  return (
    <div className="p-5 m-5">
      <h3 className="title-font text-white">{experience.company}</h3>
      <p className=" p-1 m-1 text-slate-300"><span className="font-serif italic">{experience.position}</span> |{" "}
        <span className="font-light">{experience.time}</span></p>
      <ul>
        {experience.description.map((bullet, index) => (
          <li key={`${bullet}-${index}`} className="font-light p-1 m-1 leading-relaxed text-slate-300">
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
    <section className="mx-auto px-5 sm:px-20">
      <div className="w-full sm:w-9/10 md:w-4/5 lg:w-2/3 mx-auto text-center sm:text-left">
        {experiences.map((experience) => (
          <IndividualExperience key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
}




function Experiences() {
  return (
    <section id="experiences">
      <div>
        <div className="px-5 mx-auto text-center">
        <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
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
