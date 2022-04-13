import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";
import AddTodos from "./AddTodos";

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.lists);

  const dispatch = useDispatch();

  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  };

  return (
    <section>
      <AddTodos /> 
      {todoList.map((item) => (
        <article key={item.id}>
          <h2>{item.text}</h2>
          <input
            type="checkbox"
            checked={item.complete}
            onChange={() => { onTodoToggle(item.id) }}
          />
        </article>
      ))}
    </section>
  )
}

export default TodoList;