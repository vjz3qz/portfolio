import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 pb-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-6">
          <div className="mx-auto inline-block w-10 mb-6" />
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-6" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium  mb-6 text-white">
            Apps I've Built
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border-4 border-warmGray-100 bg-gray-900 opacity-80 hover:opacity-90 overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition duration-500 ease-in-out hover:scale-105"
                    src={`${process.env.PUBLIC_URL}` + project.image}
                  />
                </div>
                <div className="px-8 py-10 relative z-10 shadow-lg hover:shadow-2xl bg-gray-900 opacity-80 hover:opacity-85">
                  <h2 className="tracking-widest text-sm  font-medium text-blue-300 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className=" text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-slate-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
