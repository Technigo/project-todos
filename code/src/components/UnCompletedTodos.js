import React from 'react';
import moment from 'moment';
import { FaTrash } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import todos from '../reducers/todos';

const UnCompletedTodos = () => {
  const items = useSelector((store) => store.todos.items);

  const unCompletedTodos = items.filter((item) => !item.isComplete);

  const dispatch = useDispatch();
  const date = new Date();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  // delete one todo
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {unCompletedTodos.map((item) => (
        <div className="todo-card" key={item.id}>
          <label htmlFor="checkbox" />
          <input
            className="round"
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
            id="checkbox"
          />

          <p className="todo">{item.text}</p>
          <span className="date">{moment(date).format('ll')}</span>
          <FaTrash
            className="delete-button"
            onClick={() => onDeleteTodo(item.id)}
          />
        </div>
      ))}
    </>
  );
};

export default UnCompletedTodos;
