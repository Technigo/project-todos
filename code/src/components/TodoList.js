import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from 'reducers/todos';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  // delete function immutebility
  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <span className="custom-checkbox"></span>
          </label>
          <p className="task">{item.text}</p>

          {/* button with immuteablity */}
          <button
            className="delete-button"
            onClick={() => onDeleteTodoImmutability(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
