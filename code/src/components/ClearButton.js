import React from "react";
import { useDispatch, useSelector } from "react-redux";

import todos from "../reducers/todos";

export const ClearButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="dlt-completed-btn"
      onClick={() => dispatch(todos.actions.removeCompletedTasks())}
    >
      DELETE COMPLETED TASKS
    </button>
  );
};
