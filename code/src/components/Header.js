import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const Header = () => {
  const amountTasks = useSelector((store) => store.todos.items.length);

  if (amountTasks === 0) {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="heading-one">Todo list</h1>
          <p className="date">{moment().format("Do MMM YY")}</p>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="heading-one">Todo list</h1>
          <p className="date">{moment().format("Do MMM YY")}</p>
          <p>Tasks to do: {amountTasks}</p>
        </div>
      </header>
    );
  }
};
export default Header;
