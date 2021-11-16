import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dates from "./Date";

import todos from "../reducers/todos";

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);
  console.log(items.length);

  const done = items.filter((item) => item.isComplete);
  console.log(done);

  const left = items.filter((item) => item.isComplete === false);
  console.log(left);

  const completeAll = () => {
    dispatch(todos.actions.checkAllTodos());
  };
  const deleteAll = () => {
    dispatch(todos.actions.deleteAllTodos());
  };

  return (
    <>
      <h1>My planes!</h1>
      <Dates />
      <p>
        {items.length}{" "}
        {items.length === 0 || items.length > 1 ? "Tasks" : "Task"}
      </p>
      <p>
        {left.length}
        {left.length === 0 || left.length > 1 ? "Tasks" : "Task"} to do
      </p>
      <p>
        {done.length} {done.length === 0 || done.length > 1 ? "Tasks" : "Task"}{" "}
        done!
      </p>

      <button onClick={completeAll}>Complete all tasks!</button>
      <button onClick={deleteAll}>Delete all Tasks</button>
    </>
  );
};

export default Header;
