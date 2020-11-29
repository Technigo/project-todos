import React from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../assests/icons8-trash-can-100.png';
import { tasks } from 'reducers/tasks';
import { RemoveButton, Checkbox, TaskText, TaskWrapper } from '../styling/styling';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = ({ task }) => {
    dispatch(tasks.actions.removeTask(task.id));
  }

  const handleCheckboxChange = ({task}) => {
    dispatch(tasks.actions.toggleCompleteStatus(task.id));
  }
  
  return (
      <TaskWrapper>
        <Checkbox type='checkbox' onChange={() => handleCheckboxChange({ task })}></Checkbox>
        <TaskText>{task.text}</TaskText>
        <RemoveButton src={Icon} onClick={() => handleRemoveTask({ task })}></RemoveButton>
      </TaskWrapper>
  )
}

export default Task;