import React from 'react';
import { FaTrash } from 'react-icons/fa';
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

  // complete all todo
  const onClickCompleteAll = () => {
    dispatch(todos.actions.completeAllTodos());
  };

  const onClickDeleteAll = (id) => {
    dispatch(todos.actions.deleteAllTodos(id));
  };

  // filter todo
  const unCompletedTodos = items.filter((item) => !item.isComplete);
  const completeTodos = items.filter((item) => item.isComplete);
  console.log('UNCOMPL', unCompletedTodos);
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
      {unCompletedTodos.length > 0 && (
        <div className="button-wrapper">
          <button
            className="clear-all"
            // disabled={items.length < 1}
            onClick={onClickCompleteAll}
          >
            complete all
          </button>
        </div>
      )}
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
          <FaTrash
            className="delete-button"
            onClick={() => onDeleteTodo(item.id)}
          />
        </div>
      ))}
      {completeTodos.length > 0 && (
        <div className="button-wrapper">
          <button
            className="delete-all"
            // disabled={items.length < 1}
            onClick={onClickDeleteAll}
          >
            delete all
          </button>
        </div>
      )}
    </>
  );
};

export default TodoList;
