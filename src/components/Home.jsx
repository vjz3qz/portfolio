import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-center bg-cover w-screen h-screen relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/backdrop.jpg)`,
      }}
    >
      <div className="container mx-auto flex px-10 py-20 md:py-36 lg:py-48 md:flex-row flex-col items-center animate-fadeIn">
        <div className="md:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" text-5xl sm:text-6xl md:text-7xl mb-6 font-medium text-white">
            I'm Varun Pasupuleti.
          </h1>
          <p className="text-md md:text-lg mb-8 leading-relaxed font-light text-white">
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
                "bg-green-600 hover:bg-green-700",
              ],
              [
                "https://www.linkedin.com/in/varunpasupuleti/",
                "LinkedIn",
                "bg-sky-700 hover:bg-sky-800 hover:text-white ml-4",
              ],
              [
                "https://drive.google.com/file/d/1qWdpYmH_BkTwdyRTWrV8SeYr2zgvDac6/view?usp=sharing",
                "Resume",
                "bg-warmGray-100 hover:bg-neutral-800 hover:text-white ml-4",
              ],
            ].map(([link, text, style]) => (
              <a
                href={link}
                className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${style}`}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
