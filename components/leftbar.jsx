import React from "react";
import {
  VscFiles,
  VscGithubInverted,
  VscCode,
  VscEdit,
  VscMail,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import NavLink from "./NavLink";

const LeftBar = () => {
  return (
    <div className="left_bar_top flex flex-col justify-between">
      <div className="left_bar" style={{ backgroundColor: "#24292e" }}>
        <NavLink href="/">
          <VscFiles size={47} color="gray" className="p-3" />
        </NavLink>
        <VscGithubInverted size={47} color="gray" className="p-3" />
        <NavLink href="/projects">
          <VscCode size={47} color="gray" className="p-3" />
        </NavLink>
        <VscEdit size={47} color="gray" className="p-3" />
        <NavLink href="/contact">
          <VscMail size={47} color="gray" className="p-3" />
        </NavLink>
      </div>
      <div className="left_bar" style={{ backgroundColor: "#24292e" }}>
        <VscAccount size={47} color="gray" className="p-3" />
        <VscSettingsGear size={47} color="gray" className="p-3" />
      </div>
    </div>
  );
};

export default LeftBar;
