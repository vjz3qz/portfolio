import React from "react";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <article id="172a3eed-0487-802a-9139-cae54a3df4f4" className="page serif">
        <header>
          <h1 className="page-title">Varun Pasupuleti 🏔️</h1>
          <p className="page-description"></p>
        </header>
        <div className="page-body">
          <hr id="172a3eed-0487-809e-9f14-f2d6fd1b2ad0" />
          <div
            id="172a3eed-0487-8110-8a13-e3e84fabb669"
            className="column-list"
          >
            <div
              id="172a3eed-0487-815e-9c68-e229fea999a9"
              style={{ width: "75%" }}
              className="column"
            >
              <p id="172a3eed-0487-817e-b5b4-d7ca40fb5171" className="">
                I love applying AI and software to hard problems.
              </p>
              <p id="172a3eed-0487-81a7-aaaf-df71ca2f0d0c" className="">
                I’m a Forward Deployed Software Engineer at Palantir, where I
                focus on building software for the government. Previously, I
                played a key role in architecting the first iteration of an AI
                verification engineer at Bronco AI.
              </p>
              <p id="172a3eed-0487-8148-a716-e77bb2716f21" className="">
                In the past, I&#x27;ve enjoyed working on computational biology
                research, multi-agent systems, and competitive programming
                problems. I’ve also served as an emergency medical technician
                and have a strong interest in health and well-being. I studied
                CS at UVA.
              </p>
              <p id="172a3eed-0487-802e-967a-e6611ec98fbb" className="">
                Find me on{" "}
                <a
                  href="https://www.linkedin.com/in/varunpasupuleti/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/vjz3qz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
            <div
              id="172a3eed-0487-813f-acd4-f91d64df2fb1"
              style={{ width: "25%" }}
              className="column"
            >
              <figure
                id="172a3eed-0487-81af-982b-c1656de1b19b"
                className="image"
              >
                <a href="/images/hero_v2.jpg">
                  <img style={{ width: "288px" }} src="/images/hero_v2.jpg" />
                </a>
              </figure>
              <p id="172a3eed-0487-80e6-a842-fbe5ec3340e3" className=""></p>
            </div>
          </div>
          <hr id="172a3eed-0487-814e-94c6-efab561cb331" />
          <p id="172a3eed-0487-8062-b731-fc18538ce94a" className=""></p>
        </div>
      </article>
      <span class="sans" style={{ fontSize: "14px", paddingTop: "2em" }}></span>
    </>
  );
}

// function App() {
//   return (
//     <main className="text-gray-400 bg-neutral-900 font-serif">
//       <Navbar />
//       <Intro />
//       <TransparentRule />
//       {/* <HorizontalRule /> */}
//       <About />
//       <HorizontalRule />
//       <Education />
//       <HorizontalRule />
//       <Experiences />
//       <HorizontalRule />
//       <Projects />
//       <HorizontalRule />
//       <Skills />
//       <HorizontalRule />
//       <Footer />
//     </main>
//   );
// }

function HorizontalRule() {
  return (
    <hr className="w-1/2 h-0.5 mx-auto my-20 bg-gray-100 border-0 rounded dark:bg-warmGray-100"></hr>
  );
}

function TransparentRule() {
  return (
    <hr className="w-1/2 h-0.5 mx-auto my-10 bg-transparent border-0 rounded"></hr>
  );
}

export default App;
