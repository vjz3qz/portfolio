import React from "react";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";
import Education from "./components/Education";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />

      <hr className="w-0 h-0 mx-auto mb-10 bg-gray-100 border-0 rounded md:mb-10 dark:bg-gray-700"></hr>

      <About />
        <hr className="w-1/2 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Education />
        <hr className="w-1/2 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Experiences />

      <hr className="w-1/2 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Projects />

      <hr className="w-1/2 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Skills />
    </main>
  );
}

export default App;
