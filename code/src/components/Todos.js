import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';

const StyledTodos = styled.div`
  display: ${props => (props.empty ? 'flex' : 'block')}
  flex-direction: ${props => (props.empty ? 'column' : '')}
  justify-content: ${props => (props.empty ? 'center' : '')};
  align-items: ${props => (props.empty ? 'center' : '')};
  height: ${props => (props.empty ? '200px' : '')};
  /* border: 1px solid red; */
`;

const Emoji = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  /* text-align: center; */
  /* border: 1px solid red; */
  padding: 1.5rem 0 1rem 0;
  margin: 0;
`;

const Message = styled.p`
  display: block;
  font-size: 1.3rem;
  text-align: center;
  /* border: 1px solid green; */
`;

export const Todos = () => {
  const allTodos = useSelector(state => state.todos);

  return (
    <StyledTodos empty={allTodos.length === 0}>
      {allTodos.length === 0 ? (
        <>
          <i class="far fa-ballot-check"></i>
          <Message>Write your first todo!</Message>
        </>
      ) : (
        <ul>
          {allTodos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </StyledTodos>
  );
};
