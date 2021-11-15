import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const TodoList = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);

  const dispatch = useDispatch();

  const onToggleCheckbox = (id) => {
    dispatch(todos.actions.toggleCheckbox(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section>
      {todoListItems.map((listItem) => (
        <div key={listItem.id}>
          <p>{listItem.text}</p>
          <input
            type='checkbox'
            checked={listItem.isComplete}
            onChange={() => onToggleCheckbox(listItem.id)}
          />
          <button onClick={() => onDeleteTodo(listItem.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
