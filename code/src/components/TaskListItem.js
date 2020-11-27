import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { DoneButton } from './DoneButton';
import { ListItem, DeleteButtonContainer, TextContainer, Timestamp } from '../styles/taskListStyles';
import { todos } from '../reducers/todos';

export const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();

  const onItemDelete = () => {
    dispatch(todos.actions.removeItem(task.id))
  };

  return (
    <ListItem>
      <DoneButton 
        task={task}
      />
      <TextContainer done={task.done}>
        <p>{task.text}</p>
        <Timestamp>{moment(task.created).fromNow()}</Timestamp>
      </TextContainer>
      <DeleteButtonContainer onClick={onItemDelete}>
        <img src={require('assets/delete.svg')} alt='' style={{width: '20px'}}/>
      </DeleteButtonContainer>
    </ListItem>
  )
};
