import React from "react";
import { useSelector } from "react-redux";

const TodoCount = () => {
  const counter = useSelector((store) => store.todos.items.length);
  const uncompleteTodos = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );

  return (
    <>
      <p>You have {counter} tasks to do today</p>
      <p>You have {uncompleteTodos} uncompleted tasks</p>
    </>
  );
};

export default TodoCount;
