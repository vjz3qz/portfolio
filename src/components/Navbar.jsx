import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-light text-white mb-4 md:mb-0">
          <button>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              offset={-75}
              className="ml-3 text-xl"
            >
              Varun Pasupuleti
            </Link>
          </button>
        </span>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center  text-sm sm:text-base justify-center">
          {[
            ["About", "about"],
            ["Education", "education"],
            ["Experiences", "experiences"],
            ["Projects", "projects"],
            ["Skills", "skills"],
          ].map(([text, id]) => (
            <button>
              <Link
                to={id}
                smooth={true}
                duration={1000}
                offset={-90}
                className="mr-5 hover:text-white font-light text-slate-200"
              >
                {text}
              </Link>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
