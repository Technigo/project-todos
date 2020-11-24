import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { todos } from '../reducers/todos';

import { CustomCheckbox } from './CustomCheckbox';
import { StyledDiv, DeleteButton, Section } from '../styledComponents/styled_components';

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector((store) => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  // Create the onRemoveClicked handler
  const onRemoveClicked = () => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    );
  };

  // Create the onChange handler for handling the done status. Dispatch the action
  // called setDone and sends with it two pieces of info: the index of the item
  // and the value of onChangeValue. Done or not. This new value is listened to
  // by the setDone reducer in todos, and sets the new value in the global state.
  const handleOnChange = () => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    );
  };

  return (
  <Section className={`todo-item ${item.done ? 'done' : ''}`}>
    <StyledDiv>
      <CustomCheckbox />
      <span className='todo-item-text'>{item.description}</span>
      <DeleteButton className='todo-item-remove' onClick={onRemoveClicked}>
        {'x'}
      </DeleteButton>
    </StyledDiv>
  </Section>
  )
};