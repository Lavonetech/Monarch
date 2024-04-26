import React from "react";
import SideBar from "../components/side-bar/SideBar";
import Content from "../components/content/Content";
import "./main-container.scss";

const MainContainer = () => {
  return (
    <div id="main-container">
      <div className="side-bar">
        <SideBar />
      </div>

      <div className="outlet">
        <Content />
      </div>
    </div>
  );
};

export default MainContainer;
