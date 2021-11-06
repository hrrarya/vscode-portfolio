import React from "react";
import Image from "next/image";
import {
  FaWindowMinimize,
  FaRegWindowMaximize,
  FaRegWindowClose,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div
      style={{ backgroundColor: "#1f2428" }}
      className="topbar p-3 h-7 flex justify-between items-center"
    >
      <div className="w-1/3 topbar__left text-white flex items-center">
        <div className="topbar__left__menu pr-5">
          <Image src="/vscode_icon.svg" alt="me" width="15" height="15" />
        </div>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          File
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          Edit
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          Selection
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          View
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          Go
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          Run
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          Terminal
        </span>
        <span className="sm:hidden md:inline-block topbar__left__menu mr-2 cursor-pointer text-xs">
          Help
        </span>
      </div>
      <div className="w-1/3 topbar__center inline-block">
        <p className="text-white text-center text-xs">
          Hridoy Mozumder - Portfolio
        </p>
      </div>
      <div className=" w-1/3 topbar__right flex justify-end cursor-pointer">
        <FaWindowMinimize size={10} className="text-white text-xs mr-2" />
        <FaRegWindowMaximize size={10} className="text-white text-xs mr-2" />
        <FaRegWindowClose size={10} className="text-white text-xs mr-2" />
      </div>
    </div>
  );
};

export default TopBar;
