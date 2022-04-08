import React from "react";
import left from "../images/left.png";
import right from "../images/right.png";
import center from "../images/center.png";
import "./Phone.css";

const Phone = () => {
  return (
    <div className="mainPhone">
      <div className="leftMob">
        <img  src={left} alt="left" href="#" />
      </div>
      <div className="midMob">
        <img  src={center} alt="left" href="#" />
      </div>
      <div className="rightMob">
        <img  src={right} alt="left" href="#" />
      </div>
    </div>
  );
};

export default Phone;
