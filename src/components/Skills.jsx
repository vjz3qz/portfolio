import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function SkillCategory({ title, skills }) {
  return (
    <div>
      <h2 className="text-center text-sm lg:text-lg font-medium text-white mb-4">
        {title}
      </h2>
      {skills.map((skill) => (
        <div key={skill} className="p-2">
          <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-white">{skill}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 pb-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <SkillCategory title="Languages" skills={skills.languages} />
          <SkillCategory title="Frameworks" skills={skills.frameworks} />
          <SkillCategory title="Concepts" skills={skills.concepts} />
          <SkillCategory title="DevOps" skills={skills.devops} />
          <SkillCategory title="Databases" skills={skills.databases} />
          <SkillCategory title="Machine Learning" skills={skills.ml} />
        </div>
      </div>
    </section>
  );
}
