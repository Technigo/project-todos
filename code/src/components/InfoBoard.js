import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectionBtn } from "./styled/SelectionBtn";

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
        <p>
          total:{" "}
          <span className="decoration" aria-label="decoration">
            {items.length}
          </span>{" "}
        </p>
        <p>
          task left:{" "}
          <span className="decoration" aria-label="decoration">
            {uncompletedTasks}
          </span>{" "}
        </p>
      </div>
      <div className="clear-btn-wrapper">
        <SelectionBtn onClick={onDeleteCompletedTasks}>Clear completed</SelectionBtn>
      </div>
    </section>
  );
};
