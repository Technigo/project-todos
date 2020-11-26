import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const ClearAllButton = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  return (
    <button type="reset" onClick={() => dispatch(todos.actions.removeAll())}>
      Clear All
    </button>
  );
};
