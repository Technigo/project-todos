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
                <label className="checkboxLabel">
                        <input type="checkbox" checked={props.task.done} onChange={handleCheckbox} />
                            <span className="customCheckbox"></span>
                </label>
                <span className="text">
                    {props.task.text}
                </span>
            </li>
                <button type="button" className="buttonRemov" onClick={handleRemove}>X</button>
        </section>
    )
}