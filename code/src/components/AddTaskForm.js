import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

import './addtaskform.css'

export const AddTaskForm = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(tasks.actions.addItem(name))
        setName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    className="input-task"
                    type="text"
                    placeholder="Add task.."
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                </input>
            </label>
            <button className="add-task" type="submit">+</button>

        </form>

    )
}