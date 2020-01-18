import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

const StyledFooter = styled.div`
  display: ${props => (props.visible ? 'grid' : 'none')};
  grid-template-columns: 1fr;
  grid-template-rows: 30px 30px;
  grid-gap: 0.5rem;
  margin: 0.5rem 0 1rem 0;
  padding: 0.4rem;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px 30px;
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  display: ${props => (props.hidden ? 'none' : '')};
  border: 1px solid rgba(0, 117, 255, 1);
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  background-color: transparent;
  color: rgba(0, 117, 255, 1);
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  outline: none;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
    filter: grayscale(100);
  }

  &:hover:enabled {
    background-color: rgba(0, 117, 255, 1);
    opacity: 1;
    color: #ffffff;
    transition: all 150ms ease-in;
  }
`;

export const Footer = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todos);
  const completedTodos = useSelector(state =>
    state.todos.filter(item => item.completed === true)
  );

  return (
    <StyledFooter visible={allTodos.length}>
      <Button onClick={() => dispatch(todos.actions.clearAllTodos())}>
        Clear all
      </Button>
      <Button
        onClick={() => dispatch(todos.actions.clearCompletedTodo())}
        disabled={completedTodos.length === 0}
      >
        Clear completed
      </Button>
    </StyledFooter>
  );
};
