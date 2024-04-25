import React from "react";
import SideBar from "../components/side-bar/SideBar";
import { Outlet } from "react-router-dom";
import './main-container.scss';

const MainContainer = () => {
  return (
    <div id="main-container">
      <div className="side-bar">
        <SideBar />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
