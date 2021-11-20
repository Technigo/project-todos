import React from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import './todolist.css';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
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
  const completeTodos = items.filter((item) => item.isComplete);

  const date = new Date();

  return (
    <>
      {unCompletedTodos.map((item) => (
        <div className="todo-card" key={item.id}>
          <label htmlFor="checkbox" />
          <input
            className="round"
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
            id="checkbox"
          />

          <p className="todo">{item.text}</p>
          <span className="date">{moment(date).format('ll')}</span>
          <FaTrash
            className="delete-button"
            onClick={() => onDeleteTodo(item.id)}
          />
        </div>
      ))}
      <button
        className="delete-all"
        disabled={items.length < 1}
        onClick={onClickCompleteAll}
      >
        complete all
      </button>

      {/* <h3>done</h3> */}
      {completeTodos.map((item) => (
        <div className="todo-card completed" key={item.id}>
          <label htmlFor="checkbox" />
          <input
            className="round"
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
            id="checkbox"
          />

          <p className="todo">{item.text}</p>

          <span className="date">{moment(date).format('ll')}</span>

          {/* <button onClick={() => onDeleteTodo(item.id)}>Delete</button> */}
          {/* <div className="delete-wrapper"> */}
          <FaTrash
            className="delete-button"
            onClick={() => onDeleteTodo(item.id)}
          />
          {/* </div> */}
        </div>
      ))}
    </>
    // </div>
  );
};

export default TodoList;
