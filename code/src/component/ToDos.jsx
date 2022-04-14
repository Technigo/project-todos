import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";

const ToDos = () => {
  const todos = useSelector((state) => state.todo.todo);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  const completed = todos.filter((todo) => todo.isCompleted).length;

  const showCompleted = () => {
    const completedList = todoList.filter((todo) => todo.isCompleted);
    setTodoList(completedList);
  };

  const showInCompleted = () => {
    const incompletedList = todoList.filter((todo) => !todo.isCompleted);
    setTodoList(incompletedList);
  };

  return (
    <>
      <ul className="container-column" style={{ width: "100%" }}>
        {todoList.map((todo) => (
          <ToDo key={todo.id} todoItem={todo} />
        ))}
      </ul>
      <article className="container-center-space-between sort">
        <p>Sort by : &nbsp;</p>
        <button className="btn-sort" onClick={() => setTodoList(todos)}>
          All [{todos.length}]
        </button>
        <button className="btn-sort" onClick={showCompleted}>
          Completed [{completed}]
        </button>
        <button className="btn-sort" onClick={showInCompleted}>
          Ongoing [{todos.length - completed}]
        </button>
      </article>
    </>
  );
};

export default ToDos;
