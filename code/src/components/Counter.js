import React from "react";
import { useSelector } from "react-redux";

const TotalCompletedItems = () => {
  const taskList = useSelector((state) => state.task.items);
  console.log(taskList);

  const completedTodos = taskList.filter((items) => items.complete === true);

  return <h3>Completed todos: {completedTodos.length}</h3>;
};
export default TotalCompletedItems;
