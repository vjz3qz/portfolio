import React from "react";
import "./stars.scss";
import { ReactTyped } from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div>
              <h1 className="intro-title mb-4">I'm Varun Pasupuleti.</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Software Engineer",
                      "Founder", // "Founder of <a href='https://www.traceai.org'>Trace AI</a>",
                      "Machine Learning Researcher",
                      "Computer Science Graduate",
                      "Life-Long Learner",
                      "Back End Developer",
                      "Problem Solver",
                      "Emergency Medical Technician",
                      "DevOps Engineer",
                      "Weight Lifter",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>

              <div className="pt-8 flex justify-center">
                {[
                  [
                    "https://github.com/vjz3qz",
                    "GitHub",
                    "bg-green-600 hover:bg-green-700 hover:text-white",
                  ],
                  [
                    "https://www.linkedin.com/in/varunpasupuleti/",
                    "LinkedIn",
                    "bg-sky-700 hover:bg-sky-800 hover:text-white ml-4",
                  ],
                  [
                    "https://drive.google.com/file/d/1A_I2gLx2rD8O8UnvSRlLXWtl-5ToX8qY/view?usp=drive_link",
                    "Resume",
                    "bg-gray-700 hover:bg-gray-800 hover:text-white ml-4",
                  ],
                ].map(([link, text, style]) => (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${style}`}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
