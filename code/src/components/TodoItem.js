import React, { useRef } from 'react';
import './css/todoItem.css'

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  const todoRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onDone(todo.id);
    }
  };

  return (
    <div className="todo-container">
      <section className="todo-child">
        <p className="TodoText">{todo.text}</p>
        <button
          type="submit"
          ref={todoRef}
          className="doneBtn"
          onClick={() => onDone(todo.id)}
          onKeyDown={handleKeyDown}>
check
        </button>

        <button
          className="deleteBtn"
          onClick={() => onDelete(index)}
          type="button"
          title="Delete task">
        X
        </button>
      </section>
    </div>
  );
};

export default TodoItem;
