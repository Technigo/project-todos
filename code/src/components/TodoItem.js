import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import moment from 'moment';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(todo.id));
  };

  return (
    <article className="todo">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <span>{todo.text}</span>
      <span>{moment().format('MMM Do YYYY')}</span>
    </article>
  );
};
