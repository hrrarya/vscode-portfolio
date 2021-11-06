import React from "react";
import NavLink from "../NavLink";
import Image from "next/image";
import Link from "next/link";

const TopMenu = () => {
  const menu_class =
    "top_menu_item flex items-center text-white text-sm px-6 py-1";
  return (
    <div className="top_menu flex" style={{ backgroundColor: "#1f2428" }}>
      <NavLink href="/" classes={menu_class}>
        <Image
          src="/react_icon.svg"
          alt="me"
          width="18"
          height="18"
          style={{ marginRight: ".5rem" }}
        />
        home.jsx
      </NavLink>
      <NavLink href="/about" classes={menu_class}>
        <Image
          src="/html_icon.svg"
          alt="me"
          width="18"
          height="18"
          style={{ marginRight: ".5rem" }}
        />
        about.html
      </NavLink>
      <NavLink href="/contact" classes={menu_class}>
        <Image
          src="/css_icon.svg"
          alt="me"
          width="18"
          height="18"
          style={{ marginRight: ".5rem" }}
        />
        contact.css
      </NavLink>
      <NavLink href="/projects" classes={menu_class}>
        <Image
          src="/js_icon.svg"
          alt="me"
          width="18"
          height="18"
          style={{ marginRight: ".5rem" }}
        />
        projects.js
      </NavLink>
    </div>
  );
};

export default TopMenu;
