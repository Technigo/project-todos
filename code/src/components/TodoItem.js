import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import todoSlice from '../reducers/todoSlice';

export const TodoItem = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);
  const dispatch = useDispatch();

  const handleCompleteClick = (id) => {
    dispatch(todoSlice.actions.toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(todoSlice.actions.deleteTodo(id));
  };

  return (
    <>
      {todos.map((item) => (
        <article key={item.id} className={`item ${item.done && 'done'}`}>
          <input
            className="update"
            type="checkbox"
            checked={item.done}
            onChange={() => handleCompleteClick(item.id)}
          />
          <div className="todo-item-text">
            <p className="todo-header">{item.text}</p>
            <p className="date">Created at: {moment(item.id).calendar()}</p>
          </div>

          <button className="delete" onClick={() => handleDeleteTodo(item.id)}>
            Delete
          </button>
        </article>
      ))}
    </>
  );
};