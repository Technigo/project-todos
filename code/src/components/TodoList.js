import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import todos from '../reducers/todos';
import CompletedTodos from './CompletedTodos';
import UnCompletedTodos from './UnCompletedTodos';
import './todolist.css';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

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

  return (
    <>
      <UnCompletedTodos />
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
      <CompletedTodos />
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
