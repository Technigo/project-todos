import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './todolist.css';

import todos from '../reducers/todos';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  // delete one todo
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  // delete all todo
  const onClickCompleteAll = () => {
    dispatch(todos.actions.completeAllTodos());
  };

  return (
    // <div className="todo-wrapper">
    <section className="todo-list">
      {items.map((item) => (
        <div className="checkbox-wrapper" key={item.id}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </div>
      ))}
      <button disabled={items.length < 1} onClick={onClickCompleteAll}>
        Complete all!
      </button>
    </section>
    // </div>
  );
};

export default TodoList;
