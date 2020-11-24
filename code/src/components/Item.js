import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { todos } from 'reducers/todos';
import { ListActionButton } from './ListStyling';

const ItemContainer = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: #3f3f3f;
`;

export const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => { 
    dispatch(
      todos.actions.removeTodo({
        todoId: item.id
      })
    );
  };
  return (
    <>
      <ItemContainer>{item.text}</ItemContainer>
      <ListActionButton onClick={handleRemoveTodo}>
            Remove To-do
      </ListActionButton>
    </>
  );
};
