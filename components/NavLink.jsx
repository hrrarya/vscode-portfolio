import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, classes, children }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={`${classes} ${router.pathname === href ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
