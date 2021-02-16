import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { DoneButtonContainer, EmptyCheckbox } from '../styles/taskListStyles';

export const DoneButton = ({ task }) => {
  const dispatch = useDispatch();

  const onItemDone = () => {
    dispatch(todos.actions.toggleDone(task.id))
  };
  

  if (task.done === true) {
    return (
      <DoneButtonContainer onClick={onItemDone}>
        <img src={require('assets/check.svg')} alt='check sign' style={{width: '20px'}}/>
      </DoneButtonContainer>
    ) 
  } else {
      return (
        <DoneButtonContainer onClick={onItemDone}>
          <EmptyCheckbox />
        </DoneButtonContainer>
      )
  } 
};
