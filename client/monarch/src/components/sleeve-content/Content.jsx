import React, { useState } from "react";
import "./content.scss";
import Logo from "../../assets/logo.png";
import Close from "../../assets/icons/close-btn.png";
import Shirt from "../../assets/shirt-long.png";
import Icon from "../../assets/icons/fabric-icon.png";

const Content = () => {
  const [sixe, setSize] = useState(400);
  return (
    <div id="content">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="choice-box">
        <div className="top-section">
          <div className="left">Sleeves</div>
          <div className="right">
            <div className="reset">Reset choice</div>
            <div className="close-btn">
              <img src={Close} alt="close-btn" />
            </div>
          </div>
        </div>

        <div className="list-section">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>

      <div className="clothe-section">
        <div className="shadow"></div>

        <div className="clothe">
          <img src={Shirt} alt="shirt" style={{ width: `${sixe}px` }} />
        </div>

        <div className="cost-section">
          <span className="cost">$110</span>
          <span className="continue-btn">CONTINUE</span>
          <span className="reset">Reset Choice</span>
        </div>

        <div className="resize">
          <button onClick={() => setSize((prv) => prv + 50)}>+</button>
          <button onClick={() => setSize((prv) => prv - 50)}>-</button>
        </div>
      </div>
    </div>
  );
};

const CardItem = () => {
  return (
    <div className="item">
      <div className="item-icon">
        <img src={Icon} alt="icon" />
      </div>
      <div className="item-name">Full Sleeves</div>
    </div>
  );
};

export default Content;
