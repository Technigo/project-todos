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

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };
  //   const onClickClearAll = () => {
  //     dispatch(tasks.actions.clearAllTasks())
  // }

  // And inside the onClick:

  // <AllDoneButton onClick={onClickClearAll}>All done!</AllDoneButton>;

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
    </section>
    // </div>
  );
};

export default TodoList;
