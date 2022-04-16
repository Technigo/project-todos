import React from "react";
import { useSelector } from "react-redux";

const TodoCounter = () => {
  const todo = useSelector((store) => store.tasks.items);
  const remainingTodos = todo.filter((todo) => todo.done === false);

  if (todo.length > 0) {
    return (
      <section className="counter-total">
        <h6 className="mt-2">Total items: {todo.length}</h6>
      </section>
    );
  } else if (remainingTodos.length === 0) {
    return (
      <section className="counter-left">
        <span role="img" aria-label="Completed">
          No more to-dos, enjoy the day!
        </span>
      </section>
    );
  }
};

export default TodoCounter;
