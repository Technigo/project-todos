import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import tasks from '../reducers/tasks'

const NewTaskInput = () => {
    const [task, setTask] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: uniqid(),
            description: task,
            isComplete: false
        }

        dispatch(tasks.actions.addTask(newTask))
        setTask('')
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input 
                type='text'
                value={task}
                onChange={event => setTask(event.target.value)}
            />
            <button type='submit'>add task</button>
        </form>
    )
}

export default NewTaskInput