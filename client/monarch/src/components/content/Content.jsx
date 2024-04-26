import React, { useState } from "react";
import "./content.scss";
import Logo from "../../assets/logo.png";
import Close from "../../assets/icons/close-btn.png";
import Maximize from "../../assets/icons/maximize.svg";
import { useStore } from "../../utility/store";
import { BASE_URL } from "../../utility/AxiosInstance";

const Content = () => {
  const [size, setSize] = useState(400);
  const [maximize, setMaximize] = useState(true);

  const part = useStore((state) => state.part);

  return (
    <div id="content">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="choice-box" style={!maximize ? { top: 2, left: 2 } : {}}>
        <div className="top-section">
          <div className="left">{part?.name}</div>
          <div className="right">
            <div className="reset">Reset choice</div>
            <div className="close-btn">
              {maximize && (
                <img
                  src={Close}
                  alt="close-btn"
                  onClick={() => setMaximize(false)}
                />
              )}
              {!maximize && (
                <img
                  src={Maximize}
                  alt="max-btn"
                  style={{ color: "#fff", background: "#fff" }}
                  onClick={() => setMaximize(true)}
                />
              )}
            </div>
          </div>
        </div>

        {maximize && (
          <div className="list-section">
            {part?.subParts?.map((subPart) => (
              <CardItem
                thumbnail={subPart.thumbnail}
                name={subPart.name}
                id={subPart._id}
                key={subPart._id}
                image={subPart.bigImg}
              />
            ))}
          </div>
        )}
      </div>

      <div className="clothe-section">
        <div className="shadow"></div>

        <div className="clothe">
          <img
            src={`${BASE_URL}/clothe/image/${part.selectSubPart}`}
            alt="shirt"
            style={{ width: `${size}px` }}
          />
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

const CardItem = ({ thumbnail, name, id, image }) => {
  const setSelectSubPart = useStore((state) => state.setSelectSubPart);

  const select = async (id, image) => {
    setSelectSubPart(image);
  };
  return (
    <div className="item" onClick={() => select(id, image)}>
      <div className="item-icon">
        <img src={`${BASE_URL}/clothe/image/${thumbnail}`} alt="icon" />
      </div>
      <div className="item-name">{name}</div>
    </div>
  );
};

export default Content;
