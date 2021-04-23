import React from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { tasks } from '../reducers/tasks'
import { TodoTask, TaskCheckboxContainer } from './styled components/TaskStyling'

export const Task = ({ task, completed }) => {
    const dispatch = useDispatch()

    return (
        <TodoTask>
            <TaskCheckboxContainer>
                <Checkbox
                    checked={completed}
                    onChange={() => dispatch(tasks.actions.toggleTaskCompleted(task.id))}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <p className={completed === true ? 'task-complete' : 'task-not-complete'}>
                    {task.content}
                </p>
            </TaskCheckboxContainer>
            <IconButton onClick={() => dispatch(tasks.actions.removeTask(task.id))} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </TodoTask>
    )
}