import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="ui header headerLogo">
        <img
          src="https://image.flaticon.com/icons/svg/1142/1142922.svg"
          alt="basketball"
        />
        <div className="content">Finger Roll</div>
      </h1>
    </div>
  );
};

export default Header;
