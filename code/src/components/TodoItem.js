/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import bin from './images/trash-can-regular.svg';
import done from './images/done.png';
import './css/todoItem.css';

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  const [isDone, setIsDone] = useState(false);

  const handleDoneButtonClick = () => {
    setIsDone(!isDone);
    onDone(todo.id);
  };

  return (
    <div className="todo-container">
      <p className="TodoText">{todo.text}</p>
      <section className="todo-child">
        <button
          className={isDone ? 'doneBtn done' : 'doneBtn'}
          onClick={handleDoneButtonClick}
          type="button"
          title="Mark as done">
          <img src={done} alt="done" />
        </button>
        <button
          className="deleteBtn"
          onClick={() => onDelete(index)}
          type="button"
          title="Delete task">
          <img src={bin} alt="delete bin" />
        </button>
      </section>
    </div>
  );
};

export default TodoItem;
