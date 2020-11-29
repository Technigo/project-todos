import React from "react";
import { useDispatch } from "react-redux";

import { todos } from "../reducer/todos";
import '../css/clearButtons.css'

export const ClearButtons = () => {
  const dispatch = useDispatch();

  const onAllItemsDelete = () => {
    dispatch(todos.actions.removeAllItems());
  };

  const onCompleteItemsDelete = () => {
    dispatch(todos.actions.removeCompleted());
  };

  return (
    <div className="button-container">
      <button className="clear-complete-button" onClick={onCompleteItemsDelete}>
        Clear completed
      </button>
      <button className="clear-all-button" onClick={onAllItemsDelete}>
        Clear all
      </button>
    </div>
  );
};
