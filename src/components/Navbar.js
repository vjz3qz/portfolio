import React from "react";
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-light text-white mb-4 md:mb-0">
          <Link to="home"
            smooth={true}
            duration={1000}
            className="ml-3 text-xl"
          >
            Varun Pasupuleti
          </Link>
        </span>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <Link to="about"
            smooth={true}
            duration={1000}
            className="mr-5 hover:text-white font-light text-slate-300"
          >
            About
          </Link>
          <Link to="education"
            smooth={true}
            duration={1000}
            className="mr-5 hover:text-white font-light text-slate-300"
          >
            Education
          </Link>
          <Link
            to="experiences"
            smooth={true}
            duration={1000}
            className="mr-5 hover:text-white font-light text-slate-300"
          >
            Experiences
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="mr-5 hover:text-white font-light text-slate-300"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="mr-5 hover:text-white font-light text-slate-300"
          >
            Skills
          </Link>
        </nav>
      </div>
    </header>
  );
}


