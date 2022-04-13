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
          <TodoText complete={item.isComplete}>{item.text}</TodoText>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => { onTodoToggle(item.id) }}
          />
          <button onClick={() => onTodoDelete(item.id)}>Delete</button>
        </Article>
      ))}
    </section>
  )
}

export default TodoList;