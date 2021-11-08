import React from "react";
import LeftBar from "./leftbar";
import TopMenu from "./main-section/topmenu";
import MiddleBar from "./middlebar";

const MainSection = ({ page }) => {
  return (
    <section className="main_section flex shadow">
      <LeftBar />
      <MiddleBar />
      <div className="main_section__site overflow-hidden w-full">
        <TopMenu />
        {page}
      </div>
    </section>
  );
};

export default MainSection;
