import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

const moment = require('moment');

const StyledTodo = styled.li`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.01);
  padding: 1rem 0;

  &:last-of-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    transition: background-color 0.2s ease-in-out;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${props => (props.completed ? 'rgba(0,0,0, 0.3)' : '')};
  font-size: 1rem;
  padding: 0 1rem;
  /* border: 1px solid green; */
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.7rem;
  color: ${props => (props.completed ? 'rgba(0,0,0, 0.3)' : '')};
  /* border: 1px solid blue; */
`;

const DeleteWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* padding-right: 0.4rem; */

  ${StyledTodo}:hover & {
    visibility: visible;
  }
`;

const Button = styled.button`
  background-color: none;
  border: none;
  font-size: 1.1rem;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transition: all 200ms ease-in;
  }
`;

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <StyledTodo>
      <CheckboxWrapper>
        <input
          onChange={() => dispatch(todos.actions.toggleTodo({ todo }))}
          type="checkbox"
          checked={todo.completed}
        />
      </CheckboxWrapper>
      <TextWrapper
        onClick={() => dispatch(todos.actions.toggleTodo({ todo }))}
        completed={todo.completed}
      >
        {todo.text}
      </TextWrapper>
      <TimeWrapper
        onClick={() => dispatch(todos.actions.toggleTodo({ todo }))}
        completed={todo.completed}
      >
        {moment(todo.createdAt).fromNow()}
      </TimeWrapper>
      <DeleteWrapper>
        <Button onClick={() => dispatch(todos.actions.removeTodo(todo))}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </Button>
      </DeleteWrapper>
    </StyledTodo>
  );
};
