import React from "react";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-gray-400 bg-neutral-900 font-serif">
      <Navbar />
      <Intro />
      <TransparentRule />
      <About />
      <HorizontalRule />
      <Education />
      <HorizontalRule />
      <Experiences />
      <HorizontalRule />
      <Projects />
      <HorizontalRule />
      <Skills />
      <HorizontalRule />
      <Footer />
    </main>
  );
}

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
