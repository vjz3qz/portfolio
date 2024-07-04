import React from "react";
import { education } from "../data";
import {
  BriefcaseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";

function IndividualEducation({ education }) {
  return (
    <div className="p-3 my-5 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl w-full border-4 border-warmGray-100 bg-neutral-800 opacity-80 hover:opacity-90">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-neutral-800 hover:bg-neutral-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <div className="flex">
                <div>
                  {education.logo && (
                    <img
                      src={`${process.env.PUBLIC_URL}` + education.logo}
                      alt={`${education.school} logo`}
                      className="w-10 h-auto pr-2 mr-2 mt-2"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className=" text-xl text-white mb-2">
                      {education.school}
                    </h3>
                  </div>
                  <div>
                    <p className="text-white mb-2">
                      <span className="font-serif italic ">
                        {education.degreeAbbreviation +
                          " in " +
                          education.major +
                          " (GPA: "}
                        <span className="font-semibold">{education.gpa}</span>
                        {"/4.00)"}
                      </span>{" "}
                      • <span className="font-light">{education.time}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {open ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              <p className="p-1 m-1 leading-relaxed text-slate-200">
                <a
                  href="https://drive.google.com/file/d/1EsER8C0OhnaPGRB3DyFMGxqUGhrEoM3o/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-sm text-white underline inline-flex font-light border-1 focus:outline-none  hover:bg-neutral-800 hover:text-white rounded"
                >
                  Relavent Coursework (Click to view Transcript):
                </a>{" "}
                <span className="font-light">{education.coursework}</span>
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

function EducationList({ education }) {
  return (
    <section className="mx-auto px-5 sm:px-20">
      <div className="w-full sm:w-9/10 md:w-4/5 lg:w-2/3 mx-auto text-left">
        {education.map((education) => (
          <Transition
            key={education.school}
            appear={true}
            show={true}
            enter="transition ease-in duration-200 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <IndividualEducation education={education} />
          </Transition>
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
          <div className="mx-auto inline-block w-10 mb-6" />
          {/* <BriefcaseIcon className="mx-auto inline-block w-10 mb-6" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium  mb-6 text-white">
            Education
          </h1>
        </div>
        <EducationList education={education} />
      </div>
    </section>
  );
}

export default Education;
