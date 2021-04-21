import React from "react";
import { useSelector } from "react-redux";

import "./HeaderStyle.css";

const Header = () => {
  const items = useSelector((store) => store.todos.items.length);

  return (
    <div className="header-container">
      <div className="header-section">
        <div className="header-left-container border">
          <p>Todo</p>
          <p>Date</p>
        </div>
        <div className="header-right-container border">
          <p>{items} tasks</p>
          <button>Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
