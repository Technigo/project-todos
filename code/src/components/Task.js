import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

import { TodoTask, RemoveTodo } from './styled components/TaskStyling'

export const Task = ({ id, task, completed }) => {
    const dispatch = useDispatch()

    const onClickRemove = (event) => {
		event.preventDefault();
        dispatch(
            tasks.actions.removeTask({
                id: task.id
            })
        )
	};

    const onCheckedCompleted = () => {
        dispatch(
            tasks.actions.toggleTaskCompleted(
                {completed: task.completed}
            )
        )
    }


    return (
        <TodoTask>
            <input 
                type='checkbox' 
                checked={completed} 
                onChange={onCheckedCompleted}
            ></input>
                {task.content}
            <RemoveTodo onClick={onClickRemove}>✖️</RemoveTodo>
        </TodoTask>
    )
}