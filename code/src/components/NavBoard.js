import React from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

export const NavBoard = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav-board-wrapper">
      <button className="space-evenly" onClick={() => dispatch(todos.actions.changeFilter("all"))}>
        All
      </button>
      <button className="space-evenly" onClick={() => dispatch(todos.actions.changeFilter("active"))}>
        Active
      </button>
      <button className="space-evenly" onClick={() => dispatch(todos.actions.changeFilter("completed"))}>
        Completed
      </button>
    </div>
  );
};
