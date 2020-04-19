import React from "react";
import { useSelector } from "react-redux";

export const TodoSummary = () => {
  const list = useSelector((store) => store.todos.list);

  const doneList = list.items.filter((item) => item.done);

  return (
    <div>
      <h2>
        {doneList.length}/{list.items.length}
      </h2>
    </div>
  );
};