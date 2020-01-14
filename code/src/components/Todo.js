import React from 'react';
import styled from 'styled-components';
// import { Checkbox } from 'components/Checkbox';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

const StyledTodo = styled.li`
  color: ${props => (props.completed ? 'rgba(0,0,0, 0.3)' : '')};
  padding: 1.3rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.01);

  &:hover {
    cursor: pointer;
  }
`;

const Completed = styled.input`
  width: 50px;
`;

const Text = styled.span`
  /* width: 90%; */
  font-size: 1rem;
  padding: 0 1rem;
`;

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <StyledTodo
      onClick={() => dispatch(todos.actions.toggleTodo({ todo }))}
      completed={todo.completed}
    >
      <Completed type="checkbox" checked={todo.completed} />
      <Text>{todo.text}</Text>
    </StyledTodo>
  );
};
