import React from "react";
import "./styles/card.css";

const Card = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img className=" logo" src={props.logo} alt="fake image" />
      </div>
      <div className="content">
        <a className="header">{props.fullName}</a>
        <div className="meta">
          <span className="date">{props.nickname}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
