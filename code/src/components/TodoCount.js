import React from "react";
import { useSelector } from "react-redux";

const TodoCount = () => {
  const TodoCount = useSelector((store) => store.todo.length);

  const TodoCountCompleted = useSelector((store) => store.todo.filter((todos) => todos.completed === true));


  return (
    <section className="TodoCountContent">
      <p>Total todos: {TodoCount} </p>
      
      <p> completed: {TodoCountCompleted.length} </p>
    </section>
  );
};

export default TodoCount;
