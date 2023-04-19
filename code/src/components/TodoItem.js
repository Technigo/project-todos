import React, { useRef, useState } from 'react';
import bin from './images/trash-can-regular.svg'
import './css/todoItem.css'

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  const todoRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsChecked(!isChecked)
      onDone(todo.id);
    }
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    onDone(todo.id);
  }

  return (
    <div className="todo-container">
      <section className="todo-child">
        <p className="TodoText">{todo.text}</p>
        <label className="checkbox-container" htmlFor={todo.id}>
          <input
            type="checkbox"
            ref={todoRef}
            className="doneBtn"
            checked={isChecked}
            onChange={handleCheckboxClick}
            onKeyDown={handleKeyDown} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </label>
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
