import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";

import {
  Article,
  TodoText
} from "styles";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.lists);

  const dispatch = useDispatch();

  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  };

  const onTodoDelete = (todoId) => {
    dispatch(todos.actions.deleteTodo(todoId));
  };

  return (
    <section>
      {todoList.map((item) => (
        <Article key={item.id}>
          <div>
            <input
              type="checkbox"
              id={item.text}
              checked={item.isComplete}
              onChange={() => { onTodoToggle(item.id) }}
            />
            <TodoText htmlFor={item.text} complete={item.isComplete}>{item.text}</TodoText>
          </div>
          <button onClick={() => onTodoDelete(item.id)}>Delete</button>
        </Article>
      ))}
    </section>
  )
}

export default TodoList;