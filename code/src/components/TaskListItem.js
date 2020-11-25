import React from 'react';
import { useDispatch } from 'react-redux';

import { ListItem } from '../styles/taskListStyles';
import { todos } from '../reducers/todos';

export const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();

  const onItemDelete = () => {
    dispatch(todos.actions.removeItem(task.id))
  }

  return (
    <ListItem>
      <button>done</button>
      <p>{task.text}</p>
      <button onClick={onItemDelete}>delete</button>
    </ListItem>
  )
}