import React from "react";
import { useSelector } from "react-redux";

import { ClearButtons } from "./ClearButtons";
import "../css/statusBar.css";

export const StatusBar = () => {
  const items = useSelector((store) => store.todos.items);
  const completedItems = items.filter((item) => item.isComplete === true);

  return (
    <section className="status-bar">
      <p className="nr-of-tasks">
        {items.length === 0
          ? "Your todo list is empty"
          : `${completedItems.length}/${items.length} tasks done`}
      </p>
      <ClearButtons />
    </section>
  );
};
