import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
        <hr className="w-1/5 h-1 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Experiences />

      <hr className="w-1/5 h-1 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Projects />

      <hr className="w-1/5 h-1 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <Skills />
    </main>
  );
}

export default App;

{/* <Navbar />
<About />
<Experience />
<Projects />
<Skills />
<Testimonials />
<Contact /> */}   //<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>