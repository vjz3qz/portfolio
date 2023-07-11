import React from "react";
import { education } from "../data";
import { AcademicCapIcon } from "@heroicons/react/solid";


function IndividualEducation({ education }) {
    return (
      <div className="p-5 m-5">
      <h3 className="title-font text-white">{education.school}</h3>
      <p className=" p-1 m-1 leading-relaxed text-slate-300"><span className="font-serif italic ">{education.degree + ", " + education.major}</span> |{" "}
          <span className="font-light">{education.time}</span></p>
      <p className=" p-1 m-1 leading-relaxed text-slate-3000">
          <span className="font-light leading-relaxed text-slate-300">{education.gpa} | Dean's List</span></p>
          <p className="p-1 m-1 leading-relaxed text-slate-300">Relavent Coursework: <span className="font-light">{education.coursework}</span></p>
      </div>
    );
  }
  
  function EducationList({ education }) {
    return (
      <section className="mx-auto px-5 sm:px-20">
        <div className="w-full sm:w-9/10 md:w-4/5 lg:w-2/3 mx-auto text-center sm:text-left">
          {education.map((education) => (
            <IndividualEducation key={education.school} education={education} />
          ))}
        </div>
      </section>
    );
  }
  
  
  
  
  function Education() {
    return (
      <section id="education">
        <div>
          <div className="px-5 mx-auto text-center">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Education
            </h1>
          </div>
          <EducationList education={education} />
        </div>
      </section>
    );
  }
  
  export default Education;