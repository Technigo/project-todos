import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { todos } from '../reducers/todos';
import { CustomCheckbox } from './CustomCheckbox';
import { DeleteContainer, DeleteButton } from '../styledComponents/styled_components';
import  bin  from '../assets/bin.png';

export const TodoItem = ({ item }) => {
  // Get the item from the store based on the index
  //const item = useSelector((store) => store.todos.list.items[item]);
  const dispatch = useDispatch();

  // Create the onRemoveClicked handler and dispatch action.
  const onRemoveClicked = () => {
    dispatch(
      todos.actions.removeTodo({
        itemId: item.id
      })
    );
  };

  // Create the onChange handler for handling the done status. Dispatch the action
  // called setDone and sends with it two pieces of info: the index of the item
  // and the value of onChangeValue. Done or not. This new value is listened to
  // by the setDone reducer in todos, and sets the new value in the global/local state.
  const handleOnChange = () => {
    dispatch(
      todos.actions.setDone({
        itemId: item.id,
        done: !item.done
      })
    );
  };

  return (
    <DeleteContainer className={`todo-item ${item.done ? 'done' : ''}`}>
      <CustomCheckbox 
        tabIndex='0' 
        isChecked={item.done ? 'checked' : ''}
        onChangeHandler={handleOnChange}>
      </CustomCheckbox> 
      <span className='todo-item-text'>{item.description}</span>
      <DeleteButton 
        className='todo-item-remove' 
        type='button'
        onClick={onRemoveClicked}>
          <img src={bin} alt='bin' />
      </DeleteButton>
    </DeleteContainer>
  )
};
