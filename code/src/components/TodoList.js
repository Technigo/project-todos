import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from 'reducers/todos';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  //v1 delete function mutebility
  // const onDeleteTodoMutability = (index) => {
  //   dispatch(todos.actions.deleteTodo(index));
  // };

  //v2
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
            <span class="custom-checkbox"></span>
          </label>
          <p className="task">{item.text}</p>
          {/* v1 muteablity delete button  */}
          {/* <button onClick={() => onDeleteTodoMutability (index)}>Delete</button> */}
          {/* v2 immuteablity delete button  */}
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
