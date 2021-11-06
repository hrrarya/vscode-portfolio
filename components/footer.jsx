import React from "react";
import Image from "next/image";
import { VscGitCompare } from "react-icons/vsc";
import {
  MdOutlineCancel,
  MdWarningAmber,
  MdDone,
  MdOutlineNotifications,
} from "react-icons/md";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer h-6 mx-2 flex items-center justify-between"
      style={{ backgroundColor: "#24292e" }}
    >
      <div className="footer__left flex">
        <div className="footer__left__link flex hover:bg-gray-900 p-1">
          <VscGitCompare size={15} color="white" />
          <span className="text-xs text-white ml-1">main</span>
        </div>
        <div className="footer__left__link flex hover:bg-gray-900 p-1">
          <MdOutlineCancel size={15} color="white" />
          <span className="text-xs text-white ml-1">0</span>
        </div>
        <div className="footer__left__link flex hover:bg-gray-900 p-1">
          <MdWarningAmber size={15} color="white" />
          <span className="text-xs text-white ml-1">0</span>
        </div>
      </div>
      <div className="footer__right flex">
        <div className="footer__left__link flex hover:bg-gray-900 p-1">
          <FaReact size={15} color="white" />
          <span className="text-xs text-white ml-1">Powered by React</span>
        </div>
        <div className="footer__left__link flex hover:bg-gray-900 p-1">
          <MdDone size={15} color="white" />
          <span className="text-xs text-white ml-1">Prettier</span>
        </div>
        <div className="footer__left__link flex hover:bg-gray-900 p-1">
          <MdOutlineNotifications size={15} color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
