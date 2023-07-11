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

      <div className="container mx-auto lg:max-w-screen-md px-10 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div className="flex flex-col items-start sm:mb-16 mb-0 text-center sm:text-left col-span-1 sm:col-span-2">
          <div>
            <div>
              <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                About Me
              </h1>
              <p className="font-light mb-8 leading-relaxed text-slate-200">
                I'm currently studying Computer Science at the University of Virginia. 
                After graduation, I hope to move to a large metropolitan city and work as a Software Engineer. 
                Some of my interests include working out, hiking, playing chess, playing basketball, site-seeing, and enjoying nature.
              </p>
            </div>
            <div>
              <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                Contacts
              </h1>

              <p className="font-light mb-8 leading-relaxed text-slate-200">
                Varun Pasupuleti<br />
                Ashburn, VA<br />
                (571) 439-5750<br />
                vjz3qz@virginia.edu
              </p>
            </div>

          <div className="flex justify-center sm:justify-start">
            <a
              href="https://drive.google.com/file/d/1qWdpYmH_BkTwdyRTWrV8SeYr2zgvDac6/view?usp=sharing"
              className="inline-flex text-slate-200 font-light bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1fARyClaRUMjvWJvzSu73BgOCcF9Z4AlZ/view?usp=drive_link"
              className="ml-4 inline-flex text-slate-200 font-light bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Transcript
            </a>
          </div>
          </div>
        </div>
        <div className="hidden sm:block w-full mx-auto col-span-1 pl-5">
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



