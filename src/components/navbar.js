import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo,menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 absolute top-0 z-20`}
    >
      <div className=" min-w-[70%] flex justify-between items-center max-w-7xl mx-auto max-sl:w-full">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain img-logo" />
          <div className=" w-[50%]  hero_video_logo">
            <video autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>


          <p className="text-white text-[24px] font-bold cursor-pointer flex">
            ANTSWAP
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className="py-2 cursor-pointer"
              onClick={() => window.open(Link.icon_link, "_blank")}
            >
              <img src={Link.icon} className="w-6 h-6"/>
            </li>
          ))}
          <div className="btn_wrapper-center">
              <Link
                to="https://t.me/Snailbrook_Entry"
                rel="noopener noreferrer"
                className="btn is-green w-inline-block"
              >
                <div className="btn_text is-green is-small" style={{padding:'8px'}} >Launch App</div>
              </Link>
            </div>
        </ul>

        {/* for mobile navigation */}
        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absoulte top-30 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px] cursor-pointer `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
