import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const number = useSelector((store) => store.todos.items.length);
  const showAmount = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );

  return (
    <section className="counter">
      <h4>
        {showAmount} / {number} completed
      </h4>
    </section>
  );
};

export default Counter;
