import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const HandleTasks = () => {
  const dispatch = useDispatch();

  const allTasks = useSelector((store) => store.todos.tasks);

  const displayLenght = () => {
    return allTasks.filter((item) => item.complete).length;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(todos.actions.removeAllTasks());
        }}
      >
        Remove all
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(todos.actions.completeAllTasks());
        }}
      >
        Complete all
      </button>
      <div>
        {displayLenght()}/{allTasks.length} completed
      </div>
    </>
  );
};
