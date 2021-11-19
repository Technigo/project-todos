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
  // const onToggleIsComplete = (id) => {
  //   dispatch(todos.actions.toggleIsComplete(id));
  // };

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
    // <div className="todo-wrapper">
    <>
      <section className="todo-list-container">
        {/* ternary operator? */}
        <h3>to-do</h3>

        <div>
          <div className="todo-list">
            {unCompletedTodos.map((item) => (
              <div className="checkbox-wrapper" key={item.id}>
                <label>
                  <FaCheckCircle />
                  {/* <span role="img" aria-label="check">
                  ✔
                </span> */}
                  <input
                    type="checkbox"
                    checked={item.isComplete}
                    onChange={() => onToggleTodo(item.id)}
                  />
                  {/* <input 
              type="date"
              /> */}
                </label>
                <p className="todo">{item.text}</p>
                <div>
                  <span>{moment(date).format('ll')}</span>
                </div>
                {/* <button onClick={() => onDeleteTodo(item.id)}>Delete</button> */}
                <div className="delete-wrapper">
                  <FaTrash
                    className="delete-button"
                    onClick={() => onDeleteTodo(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <button disabled={items.length < 1} onClick={onClickCompleteAll}>
            Complete all!
          </button>
          {/* <h3>done</h3> */}
          {completeTodos.map((item) => (
            <div className="checkbox-wrapper completed" key={item.id}>
              <p>{item.text}</p>
              <div>
                <span>{moment(date).format('ll')}</span>
              </div>
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <div className="delete-wrapper">
                <FaTrash
                  className="delete-button"
                  onClick={() => onDeleteTodo(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
    // </div>
  );
};

export default TodoList;
