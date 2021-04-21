import React from "react";
import { useSelector } from "react-redux";

import "./HeaderStyle.css";

const Header = () => {
  const items = useSelector((store) => store.todos.items.length);

  return (
    <div className="header-container">You currently have {items} tasks</div>
  );
};

export default Header;
