import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToDoList } from 'reducers/ToDoList'
import 'components/addTask.css'

export const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(ToDoList.actions.addTask(task))
        setTask('')
    }

    return (

        <form onSubmit={handleSubmit} className="addTask">
            <label>
                <input className="newTaskInput" type="text" required placeholder="New To Do" value={task} onChange={(event) => setTask(event.target.value)} />
            </label>

            <button type="submit" className="addButton"><span role="img" aria-label="Add">✚</span></button>

        </form>
    )
}