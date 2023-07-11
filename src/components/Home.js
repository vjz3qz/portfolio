import React from "react";

export default function Home() {
  return (
    <section 
      id="home"
      className="" // adjust the height value to suit your needs
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/backdrop.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto flex px-10 py-20 md:py-36 lg:py-48 md:flex-row flex-col items-center">
        <div className="md:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <h1 className="title-font text-5xl sm:text-6xl md:text-7xl mb-4 font-medium text-white">
            I'm Varun Pasupuleti. 
          </h1>
          <p className=" text-md md:text-lg mb-8 leading-relaxed font-light text-white">
          I'm a student and software engineer who is deeply passionate about my work. I love tackling challenging problems, even when faced with narrow constraints. I am relentless in my pursuit of improvement and thrive in challenging situations. I actively seek a fast-paced and dynamic work environment that appreciates problem-solving as much as I do.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/vjz3qz"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/varunpasupuleti/"
              className="ml-4 inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 hover:text-white rounded text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
