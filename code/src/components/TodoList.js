import React from 'react';
import styled from 'styled-components/macro';
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
        <ButtonWrapper>
          <button onClick={onClickCompleteAll}>complete all</button>
        </ButtonWrapper>
      )}
      <CompletedTodos />
      {completeTodos.length > 0 && (
        <ButtonWrapper>
          <button onClick={onClickDeleteAll}>delete all</button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default TodoList;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    font-size: 18px;
    height: 50px;
    width: 150px;
    border-radius: 50px;
    background: var(--darkgrey);
    color: var(--black);
    border: none;

    font-weight: bold;
    margin: 40px 10px 20px;
    cursor: pointer;
  }
`;
