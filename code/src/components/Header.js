import React from "react";
// import Moment from "moment";
import { useSelector } from "react-redux";

import Counter from "./Counter";

const Header = () => {
  const date = useSelector((store) => store.todos.today);

  return (
    <header className="header">
      <div className="heading-counter">
        <h1>Your todo's!</h1>
        <Counter />
      </div>
    </header>
  );
};

export default Header;
