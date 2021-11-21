import React from "react";
// import Moment from "moment";

import Counter from "./Counter";

const Header = () => {
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
