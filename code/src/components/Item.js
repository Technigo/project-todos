import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { RemoveButton, ItemContainer, TaskText } from './StyledComponents/ListStyling';
import  { CheckBox } from './Checkbox';

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
      <TaskText>{item.text}</TaskText>
      <RemoveButton onClick={handleRemoveTodo}> X </RemoveButton>
    </ItemContainer>
  );
};
