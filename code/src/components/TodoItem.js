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

      <p className="TodoText">{todo.text}</p>
      <section className="todo-child">
        <label className="checkbox-container" htmlFor={todo.id}>
          <input
            type="checkbox"
            ref={todoRef}
            className="doneBtn"
            checked={isChecked}
            onChange={handleCheckboxClick}
            onKeyDown={handleKeyDown} />
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
