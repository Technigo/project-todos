import React from "react";
import { useSelector } from "react-redux";

const TotalCompletedItems = () => {
  const taskList = useSelector((state) => state.task.items);
  const completedTodos = taskList.filter((items) => items.complete === true);
  return (
    <p>
      You have completed {completedTodos.length}/{taskList.length} todos
    </p>
  );
};
export default TotalCompletedItems;
