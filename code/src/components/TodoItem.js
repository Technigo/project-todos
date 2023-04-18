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
      <p className="TodoText">{todo.text}</p>
      <button
        type="submit"
        ref={todoRef}
        className="DoneBtn"
        onClick={() => onDone(todo.id)}
        onKeyDown={handleKeyDown}>
check
      </button>

      <button
        className="DeleteBTn"
        onClick={() => onDelete(index)}
        type="button"
        title="Delete task">
        X
      </button>
    </div>
  );
};

export default TodoItem;
