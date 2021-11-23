import React from "react";
import { useSelector } from "react-redux";
import "./counter.css";

const Counter = () => {
  const items = useSelector((store) => store.todos.items.length);
  const amount = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );

  return (
    <div className="tasks">
      <p className="task-amount">you have {items} tasks </p>
      <p className="task-amount-done">you have completed {amount} tasks </p>
    </div>
  );
};

export default Counter;
