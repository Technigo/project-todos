import React from "react";
import "./header.css";

const date = new Date();
const todaysDate = date.toString().slice(0, 10);

const Header = () => {
  return (
    <div className="header-date">
      <h1>
        <span>Today's tasks</span>
        <span className="date">{todaysDate}</span>
      </h1>
    </div>
  );
};

export default Header;
