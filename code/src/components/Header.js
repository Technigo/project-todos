import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((store) => store.todos.items.length);

  return <div>You currently have {items} tasks</div>;
};

export default Header;
