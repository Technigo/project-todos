import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todos } from "../reducer/todos";
import "../css/statusBar.css";

export const StatusBar = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);
  const completedItems = items.filter((item) => item.isComplete === true);

  const onItemsDelete = () => {
    dispatch(todos.actions.removeAllItems());
  };

  return (
    <section className="status-bar">
      <p className="nr-of-tasks">
          {items.length === 0 ? "Yay! Your todo list is empty" : `${completedItems.length}/${items.length} tasks done`}
        {/* {completedItems.length}/{items.length} tasks done */}
      </p>
      <button className="clear-all-button" onClick={onItemsDelete}>Clear all</button>
    </section>
  );
};
