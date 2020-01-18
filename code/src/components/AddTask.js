import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToDoList } from 'reducers/todolist'

export const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(ToDoList.actions.addTask(task))
        setTask('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input className="newTaskInput" type="text" placeholder="New To Do" value={task} onChange={(event) => setTask(event.target.value)} />
            </label>

            <button type="submit"><span role="img" aria-label="Add">✚</span></button>

        </form>
    )
}