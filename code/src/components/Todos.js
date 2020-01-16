import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from './Todo';
import { visibilityFilter } from 'reducers/visibilityFilter';

const StyledTodos = styled.div`
  display: ${props => (props.empty ? 'flex' : 'block')}
  flex-direction: ${props => (props.empty ? 'column' : '')}
  justify-content: ${props => (props.empty ? 'center' : '')};
  align-items: ${props => (props.empty ? 'center' : '')};
  height: ${props => (props.empty ? '200px' : '')};
  padding: 0 0.4rem;
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
  font-style: italic;
  /* border: 1px solid green; */
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  font-size: 4rem;
  color: rgba(230, 0, 60, 1);
`;

export const Todos = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.visibilityFilter);
  let allTodos = useSelector(state => state.todos);
  let filteredTodos = null;

  switch (filter) {
    case 'SHOW_ACTIVE':
      filteredTodos = allTodos
        .filter(todo => todo.completed === false)
        .sort((a, b) => b.pinned - a.pinned);
      if (filteredTodos.length === 0) {
        dispatch(
          visibilityFilter.actions.setVisibility({ filter: 'SHOW_ALL' })
        );
      }
      break;
    case 'SHOW_COMPLETED':
      filteredTodos = allTodos
        .filter(todo => todo.completed === true)
        .sort((a, b) => b.pinned - a.pinned);
      if (filteredTodos.length === 0) {
        dispatch(
          visibilityFilter.actions.setVisibility({ filter: 'SHOW_ALL' })
        );
      }
      break;
    case 'SHOW_PINNED':
      filteredTodos = allTodos.filter(todo => todo.pinned === true);
      if (filteredTodos.length === 0) {
        dispatch(
          visibilityFilter.actions.setVisibility({ filter: 'SHOW_ALL' })
        );
      }
      break;
    default:
      filteredTodos = allTodos;
  }

  return (
    <StyledTodos empty={allTodos.length === 0}>
      {allTodos.length === 0 ? (
        <>
          <Icon>
            <i class="fas fa-tasks"></i>
          </Icon>
          <Message>Write your first todo!</Message>
        </>
      ) : (
        <ul>
          {filteredTodos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </StyledTodos>
  );
};
