import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { todos } from '../Reducers/todos';
import { RemoveButton } from './ListStyling';
import  { CheckBox } from './Checkbox';

const ItemContainer = styled.li`
  align-self: flex-start;
  flex-direction: row;
  padding: 8px;
  margin: 8px;
  font-size: 20px;
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

  const handleSetComplete = () => {
    dispatch(
      todos.actions.setComplete({
        todoId:item.id,
        complete: !item.complete
      })
    );
  };

  return (
      <ItemContainer>
        <CheckBox isChecked={item.complete ? 'checked' : "" } onChange={handleSetComplete}/>
        {item.text}
        <RemoveButton onClick={handleRemoveTodo}> 🗑 </RemoveButton>
      </ItemContainer>
  );
};
