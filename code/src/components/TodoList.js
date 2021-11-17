import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import './TodoList.css';

export const TodoList = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);
  const dispatch = useDispatch();

  const handleCompleteClick = (id) => {
    dispatch(todos.actions.toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <div className="list-of-items-container">
      {todos.map((item) => (
        <div key={item.id} className="item" title={item.text}>
          <p className="todo-header">{item.text}</p>
          <p className="date">Created at: {moment(item.id).calendar()}</p>
          <input
            className="update"
            type="checkbox"
            checked={item.done}
            onChange={() => handleCompleteClick(item.id)}
          />
          <button className="delete" onClick={() => handleDeleteTodo(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
