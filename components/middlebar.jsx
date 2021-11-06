import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import NavLink from "./NavLink";

const MiddleBar = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  const menu_class =
    "middle_bar__menu_wrapper_menu__item flex items-center p-1";
  return (
    <div
      className="middle_bar md:w-2/12 w-3/12 shadow-sm"
      style={{ backgroundColor: "#1f2428" }}
    >
      <p className="middle_bar__title text-white uppercase mb-2 px-2 py-1 tracking-widest text-sm">
        Explorar
      </p>
      <div className="middle_bar__menu_wrapper cursor-pointer">
        <div className="flex items-center uppercase px-2" onClick={handleOpen}>
          {open ? (
            <FaAngleDown size={15} color="white" className="" />
          ) : (
            <FaAngleRight size={15} color="white" className="" />
          )}
          <span className="text-xs text-white tracking-wider">Portfolio</span>
        </div>
        {open && (
          <div className="middle_bar__menu_wrapper__menu flex flex-col text-white font-light text-xs">
            <NavLink href="/" classes={menu_class}>
              <Image
                src="/react_icon.svg"
                alt="me"
                width="15"
                height="15"
                style={{ marginRight: ".5rem" }}
              />
              home.jsx
            </NavLink>
            <NavLink href="/about" classes={menu_class}>
              <Image
                src="/html_icon.svg"
                alt="me"
                width="15"
                height="15"
                style={{ marginRight: ".5rem" }}
              />
              about.html
            </NavLink>
            <NavLink href="/contact" classes={menu_class}>
              <Image
                src="/css_icon.svg"
                alt="me"
                width="15"
                height="15"
                style={{ marginRight: ".5rem" }}
              />
              contact.css
            </NavLink>
            <NavLink href="/projects" classes={menu_class}>
              <Image
                src="/js_icon.svg"
                alt="me"
                width="15"
                height="15"
                style={{ marginRight: ".5rem" }}
              />
              projects.js
            </NavLink>
            <NavLink href="/" classes={menu_class}>
              <Image
                src="/markdown_icon.svg"
                alt="me"
                width="15"
                height="15"
                style={{ marginRight: ".5rem" }}
              />
              github.md
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiddleBar;
