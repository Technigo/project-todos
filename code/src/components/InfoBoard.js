import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

export const InfoBoard = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const uncompletedTasks = items.filter((item) => {
    return !item.isComplete;
  }).length;

  const onDeleteCompletedTasks = () => {
    dispatch(todos.actions.deleteCompletedTasks());
  };

  return (
    <section className="todo-wrapper">
      <div className="info-wrapper">
        <p className="space-evenly"> total: {items.length} </p>
        <p className="space-evenly">task left: {uncompletedTasks} </p>

        <button className="space-evenly" onClick={onDeleteCompletedTasks}>
          Clear completed
        </button>
      </div>
    </section>
  );
};
