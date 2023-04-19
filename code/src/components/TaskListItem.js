import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const TaskListItem = ({ checked, text, task }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Checkbox
        color="success"
        onChange={() => dispatch(tasks.actions.toggleCheckbox(checked.id))}
        checked={checked.completed} />
      <ListItemText primary={text} />
      <ListItemSecondaryAction />
      <IconButton aria-label="Delete Task" onClick={() => dispatch(tasks.actions.removeTask(task))}>
        <DeleteOutline />
      </IconButton>
      <ListItemSecondaryAction />
    </ListItem>
  )
};

export default TaskListItem;