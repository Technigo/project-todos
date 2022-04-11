import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styled

import todos from 'reducers/todos';

const ToDoList = () => {
  const todoItem = useSelector((store) => store.todos.items);
  console.log(todoItem);

  const dispatch = useDispatch();

  const onToggleItem = (id) => {
    dispatch(todos.actions.toggleItem(id));
  };

  return (
    <section>
      {todoItem.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleItem(item.id)}
            />
          </label>
          <p>{item.text}</p>
          <button>
            <span role="button" aria-label="delete">
              Delete
            </span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default ToDoList;

// useSelector and then fetch the list of todos and then map over them
