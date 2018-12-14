import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <h1 class="ui header headerLogo">
      <img
        src="https://image.flaticon.com/icons/svg/1142/1142922.svg"
        alt="basketball"
      />
      <div class="content">Finger Roll</div>
    </h1>
  );
};

export default Header;
