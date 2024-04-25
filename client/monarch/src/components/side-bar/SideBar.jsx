import React from "react";
import "./side-bar.scss";
import Icon from "../../assets/icons/fabric-icon.png";

const SideBar = () => {
  return (
    <nav id="side-bar">
      <div className="p-name-btn">Product Name</div>

      <ul className="btn-container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </nav>
  );
};

const Item = () => {
  return (
    <li className="single-item">
      <img src={Icon} alt="icon" />
      <span className="item-name">Fabric</span>
    </li>
  );
};

export default SideBar;
