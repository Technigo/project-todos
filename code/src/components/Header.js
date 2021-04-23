import React from "react";
import { useSelector } from "react-redux";

import "./HeaderStyle.css";

const Header = () => {
  const items = useSelector((store) => store.todos.items.length);

  return (
    <div className="header-container">
      <div className="header-section">
        <div className="header-section-content">
          <p>{items} Todo</p>
          <button className="header-button">Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
