import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

const StyledFooter = styled.div`
  display: ${props => (props.visible ? 'grid' : 'none')};
  grid-template-columns: 1fr;
  grid-template-rows: 30px 30px;
  grid-gap: 0.5rem;
  margin: 0.3rem 0 1rem 0;
  padding: 0.4rem;

  @media screen and (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px;
  }
`;

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  color: rgba(0, 230, 170, 1);
  padding: 0.3rem 0.5rem;
  font-size: 0.7rem;
  outline: none;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    background-color: rgba(0, 230, 170, 1);
    color: #ffffff;
    transition: all 200ms ease-in-out;
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
