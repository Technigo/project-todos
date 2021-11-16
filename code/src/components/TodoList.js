import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';
import { StyledDeleteButton } from './StyledButtons';
import emptystate from '../assets/emptystate.png';

const StyledList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vh 3vw;
  &.no-items {
    background-image: url(${emptystate});
    height: 500px;
    width: 500px;
    object-fit: cover;
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto;
  }
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
`;

const TodoList = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);
  const timePosted = useSelector((store) => store.todos.timePosted);

  const dispatch = useDispatch();

  const onToggleCheckbox = (id) => {
    dispatch(todos.actions.toggleCheckbox(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <StyledList className={todoListItems.length <= 0 && 'no-items'}>
      {todoListItems.map((listItem) => (
        <StyledListItem key={listItem.id}>
          <input
            type='checkbox'
            checked={listItem.isComplete}
            onChange={() => onToggleCheckbox(listItem.id)}
          />
          <p className={listItem.isComplete && 'checked'}>{listItem.text}</p>
          <p className={listItem.isComplete && 'checked'}>{timePosted}</p>
          <StyledDeleteButton onClick={() => onDeleteTodo(listItem.id)}>
            Delete
          </StyledDeleteButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default TodoList;
