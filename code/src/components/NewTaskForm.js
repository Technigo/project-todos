import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import uniqid from 'uniqid'

export const NewTaskForm = () => {

    const [value, setValue] = useState ('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()
        // dispatch(tasks.actions.addTask({ newTaskText: newTask }))
    
        const newTask = {
            id: uniqid(),
            taskText: value,
            isDone: false
        }

        dispatch(tasks.actions.addTask(newTask))
        setValue('')
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input  
                    type='text'
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}


