import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/backdrop.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="container mx-auto flex px-10 py-20 md:py-36 lg:py-48 md:flex-row flex-col items-center">
        <div className="md:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-5xl sm:text-6xl md:text-7xl mb-4 font-medium text-white">
            I'm Varun Pasupuleti.
          </h1>
          <p className=" text-md md:text-lg mb-8 leading-relaxed font-light text-white">
            I'm a <span className="font-normal">student</span> and{" "}
            <span className="font-normal">software engineer</span> who is deeply
            passionate about my work. I love tackling complex problems, even
            when faced with narrow constraints. I am relentless in my pursuit of
            improvement and thrive in challenging situations. I actively seek a
            fast-paced and dynamic work environment that appreciates
            problem-solving as much as I do.
          </p>
          <div className="flex justify-center">
            {[
              [
                "https://github.com/vjz3qz",
                "GitHub",
                "inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg",
              ],
              [
                "https://www.linkedin.com/in/varunpasupuleti/",
                "LinkedIn",
                "ml-4 inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 hover:text-white rounded text-lg",
              ],
              [
                "https://drive.google.com/file/d/1qWdpYmH_BkTwdyRTWrV8SeYr2zgvDac6/view?usp=sharing",
                "Resume",
                "ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg",
              ],
            ].map(([link, text, style]) => (
              <a href={link} className={style}>
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
