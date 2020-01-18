import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDoList } from 'reducers/ToDoList'

export const Task = (props) => {
    const dispatch = useDispatch()
    
    const handleCheckbox = () => {
        dispatch(ToDoList.actions.toggleDone(props.task.id))
    }

    const handleRemove = () => {
        dispatch(ToDoList.actions.removeTask(props.task.id))
    }

    return (
        <li>
            <label>
                
                <input type="checkbox" checked={props.task.done} onChange={handleCheckbox} />

            </label>
            {props.task.text}

            <button type="button" onClick={handleRemove}>
                <span role="img" aria-label="delete">❌</span>
            </button>

        </li>
    )
}