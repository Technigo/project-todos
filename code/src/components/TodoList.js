import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './todolist.css';
import moment from 'moment';

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

  // filter todo
  const unCompletedTodos = items.filter((item) => !item.isComplete);

  console.log('UNCOMPL', unCompletedTodos);

  const completeTodos = items.filter((item) => item.isComplete);

  const date = new Date();

  return (
    // <div className="todo-wrapper">
    <>
      <section className="todo-list">
        {/* ternary operator? */}
        <h3>to-do</h3>
        {unCompletedTodos.map((item) => (
          <div className="checkbox-wrapper" key={item.id}>
            <p>{item.text}</p>
            <div>
              <span>{moment(date).format('ll')}</span>
            </div>
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
        <h3>done</h3>
        {completeTodos.map((item) => (
          <div className="checkbox-wrapper" key={item.id}>
            <p>{item.text}</p>
            <div>
              <span>{moment(date).format('ll')}</span>
            </div>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
          </div>
        ))}
      </section>
    </>
    // </div>
  );
};

export default TodoList;
