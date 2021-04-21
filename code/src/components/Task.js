import React from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { tasks } from '../reducers/tasks'

import { TodoTask, TaskCheckboxContainer } from './styled components/TaskStyling'

//code for material ui - styling for checkbox and delete icon
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export const Task = ({ task, completed }) => {
    const dispatch = useDispatch()

    //needed for icon 
    const classes = useStyles();

    return (
        <TodoTask>
            <TaskCheckboxContainer>
                <Checkbox
                    checked={completed}
                    onChange={() => dispatch(tasks.actions.toggleTaskCompleted(task.id))}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                    {task.content}
            </TaskCheckboxContainer>
            <IconButton onClick={() => dispatch(tasks.actions.removeTask(task.id))} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </TodoTask>
    )
}