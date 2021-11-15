import React from 'react';
export const TodoList = () => {
  return (
    <div className="container">
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="write your Todo:"
        onchange={() => console.log('Hej')}></input>

      <button>
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
      </button>
    </div>
  );
};
