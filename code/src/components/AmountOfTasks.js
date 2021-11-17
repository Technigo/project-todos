import React from "react";
import { useSelector } from "react-redux";

export const AmountOfTasks = () => {
  // const amount = useSelector(
  //   (store) => store.todos.filter((item) => item.isComplete).length
  // );

  const amount = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );
  const amountdone = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );
  return (
    <div>
      <p>{amount} tasks to complete</p>
      <p>{amountdone} tasks completed</p>
    </div>
  );
};
