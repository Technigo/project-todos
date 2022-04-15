import React from "react";
import { format } from "date-fns";

const Header = () => {
  const dateTime = format(new Date(), "'Today is ' eeee LLLL d, yyyy ");

  return (
    <section>
      <h1>Todo list</h1>
      <p>{dateTime}</p>
    </section>
  );
};

export default Header;
