import React from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { tasks } from '../reducers/tasks'

import { TodoTask } from './styled components/TaskStyling'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export const Task = ({ id, task, completed }) => {
    const dispatch = useDispatch()

    const onClickRemove = (event) => {
		event.preventDefault();
        dispatch(
            tasks.actions.removeTask({
                id: task.id
            })
        )
	}

    const onCheckedCompleted = () => {
        dispatch(
            tasks.actions.toggleTaskCompleted(
                {id: task.id, completed: !completed}
            )
        )
    }

    //needed for icon 
    const classes = useStyles();


    return (
        <TodoTask>
            {/* <input 
                type='checkbox'  
                id="checkbox1"
                checked={completed} 
                onChange={onCheckedCompleted}
            ></input> */}
            <Checkbox
                checked={completed}
                onChange={onCheckedCompleted}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
                {task.content}
            
            {/* <RemoveTodo onClick={onClickRemove}>✖️</RemoveTodo> */}
            
            <IconButton onClick={onClickRemove} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </TodoTask>
    )
}