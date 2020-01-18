import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

const moment = require('moment');

const StyledTodo = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 40px 40px;
  grid-gap: 0.5rem;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  /* background-color: rgba(0, 0, 0, 0.01); */
  padding: 1rem 1rem 1rem 0;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    transition: background-color 150ms ease-in;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 50px 1fr 110px 40px 40px;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  background: rgba(230, 0, 60, 1);
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${props => (props.completed ? 'rgba(0,0,0, 0.3)' : '')};
  font-size: 1rem;

  span {
    word-break: break-all;
  }
`;

const TimeWrapper = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.7rem;
  font-style: italic;
  margin-right: 0.9rem;
  color: ${props => (props.completed ? 'rgba(0,0,0, 0.3)' : '')};

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const DeleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 1.1rem;
  opacity: ${props => (props.completed ? 0.3 : 1)};

  &:hover {
    color: rgba(230, 0, 60, 1);
    opacity: 1;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
`;

const PinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PinButton = styled.button`
  background-color: transparent;
  color: ${props =>
    props.pinned ? 'rgba(255, 191, 0, 1)' : 'rgba(0, 0, 0, 0.2)'};
  border: none;
  font-size: 1.1rem;
  opacity: ${props => (props.completed ? 0.3 : 1)};
  outline: none;

  &:hover {
    opacity: 1;
    color: ${props =>
      props.pinned ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 191, 0, 1);'};
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
`;

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <StyledTodo>
      <CheckboxWrapper>
        <Checkbox
          onChange={() => dispatch(todos.actions.toggleCompleted({ todo }))}
          type="checkbox"
          checked={todo.completed}
        />
      </CheckboxWrapper>
      <TextWrapper
        onClick={() => dispatch(todos.actions.toggleCompleted({ todo }))}
        completed={todo.completed}
      >
        <span>{todo.text}</span>
      </TextWrapper>
      <TimeWrapper
        onClick={() => dispatch(todos.actions.toggleCompleted({ todo }))}
        completed={todo.completed}
      >
        {moment(todo.createdAt).fromNow()}
      </TimeWrapper>
      <PinWrapper>
        <PinButton
          onClick={() => dispatch(todos.actions.togglePinned({ todo }))}
          pinned={todo.pinned}
          completed={todo.completed}
        >
          {todo.pinned ? (
            <i class="fas fa-star"></i>
          ) : (
            <i class="far fa-star"></i>
          )}
        </PinButton>
      </PinWrapper>
      <DeleteWrapper>
        <DeleteButton
          onClick={() => dispatch(todos.actions.removeTodo(todo))}
          completed={todo.completed}
        >
          <i class="fas fa-trash-alt"></i>
        </DeleteButton>
      </DeleteWrapper>
    </StyledTodo>
  );
};
