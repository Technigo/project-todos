import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDoList } from 'reducers/ToDoList'
import 'components/task.css'

export const Task = (props) => {
    const dispatch = useDispatch()
    
    const handleCheckbox = () => {
        dispatch(ToDoList.actions.toggleDone(props.task.id))
    }

    const handleRemove = () => {
        dispatch(ToDoList.actions.removeTask(props.task.id))
    }

    return (
        <section className="listSection">
            <li className={props.task.done ? 'checked' : 'unchecked'} >
                <label>
                    <input type="checkbox" checked={props.task.done} onChange={handleCheckbox} />
                </label>
                <span className="text">
                {props.task.text}
                </span>
                <button type="button" onClick={handleRemove}>
                    <span role="img" aria-label="delete">❌</span>
                </button>
            </li>
        </section>
    )
}