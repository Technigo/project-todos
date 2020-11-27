import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todos } from "../reducer/todos";
import "../css/statusBar.css";

export const StatusBar = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);
  const completedItems = items.filter((item) => item.isComplete === true);

  const onAllItemsDelete = () => {
    dispatch(todos.actions.removeAllItems());
  };

  const onCompleteItemsDelete = () => {
    dispatch(todos.actions.removeCompleted());
  };

  return (
    <section className="status-bar">
      <p className="nr-of-tasks">
        {items.length === 0
          ? "Your todo list is empty"
          : `${completedItems.length}/${items.length} tasks done`}
      </p>
      <div className="button-container">
        <button
          className="clear-complete-button"
          onClick={onCompleteItemsDelete}
        >
          Clear completed
        </button>
        <button className="clear-all-button" onClick={onAllItemsDelete}>
          Clear all
        </button>
      </div>
    </section>
  );
};
