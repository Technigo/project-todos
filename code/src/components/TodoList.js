import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import './TodoList.css';

export const TodoList = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);

  console.log('this is my todo:', todos);
  return (
    <div className="list-of-items-container">
      <ul className="list-of-items">
        {todos && todos.length
          ? todos.map((todo) => (
              <li className="item" id={todo.id} title={todo.item} done={todo.done}>
                <span class="todo-header">{todo.item}</span>
                <span className="date">Created at: {moment(todo.id).calendar()}</span>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
