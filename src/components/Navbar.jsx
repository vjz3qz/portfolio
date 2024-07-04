import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [navBorder, setNavBorder] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavBorder("bg-neutral-800 backdrop-blur-md bg-opacity-5");
      } else {
        setNavBorder("");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={`fixed left-0 right-0 top-0 w-full z-10  ${navBorder}`}>
      <div className="m-2">
        <div
          className={`max-w-[1240px] m-auto flex justify-between items-center p-4 rounded-xl ease-in duration-200`}
        >
          <Link to="home" smooth={true} duration={1000} offset={-75}>
            <h1 className="text-4xl text-white">{"{  VP  }"}</h1>
          </Link>
          <ul className="mr-2 hidden sm:flex">
            {[
              ["About", "about"],
              ["Education", "education"],
              ["Experiences", "experiences"],
              ["Projects", "projects"],
              ["Skills", "skills"],
            ].map(([text, id]) => (
              <li className="p-4">
                <Link to={id} smooth={true} duration={1000} offset={-90}>
                  <p className="text-white hover:text-white">{text}</p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10 mr-2">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `#ffffff` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `#ffffff` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-neutral-900 text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-neutral-900 text-center ease-in duration-300"
            }
          >
            <ul>
              {[
                ["About", "about"],
                ["Education", "education"],
                ["Experiences", "experiences"],
                ["Projects", "projects"],
                ["Skills", "skills"],
              ].map(([text, id]) => (
                <li className="p-4 text-4xl">
                  <Link
                    to={id}
                    onClick={handleNav}
                    smooth={true}
                    duration={1000}
                    offset={-90}
                  >
                    <p className="text-white hover:text-white">{text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
