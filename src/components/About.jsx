import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="px-5 mx-auto text-center">
        <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          About
        </h1>
      </div>

      <div className="container mx-auto lg:max-w-screen-md px-10 pt-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="md:col-span-1">
          <div className="p-5 my-5 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl w-full border-4 border-amber-100 bg-neutral-800 opacity-80 hover:opacity-90">
            <h1 className="text-center title-font sm:text-2xl text-xl mb-4 font-medium text-white">
              About Me
            </h1>
            <p className="text-center font-light mb-8 leading-relaxed text-slate-200">
              I'm a Computer Science student, Machine Learning Researcher, and
              Founder at the University of Virginia passionate about leveraging
              tech for positive change. Outside of my academic/professional
              pursuits, I lead an active lifestyle, enjoying weight lifting,
              running, hiking, chess, and basketball. As a volunteer EMT, I'm
              committed to community service.
            </p>
          </div>

          <div className="p-5 my-5 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl w-full border-4 border-amber-100 bg-neutral-800 opacity-80 hover:opacity-90">
            <h1 className="text-center title-font sm:text-2xl text-xl mb-4 font-medium text-white">
              Contact Me
            </h1>
            <p className="text-center font-light mb-8 leading-relaxed text-slate-200">
              Varun Pasupuleti
              <br />
              Ashburn, VA
              <br />
              (571) 439-5750
              <br />
              vjz3qz@virginia.edu
            </p>
          </div>
        </div>

        <div className="md:col-span-1 p-5 m-5 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl w-full border-4 border-amber-100 bg-neutral-800 opacity-80 hover:opacity-90 sm:block hidden">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`${process.env.PUBLIC_URL}/images/hero.jpg`}
          />
        </div>
      </div>
    </section>
  );
}
