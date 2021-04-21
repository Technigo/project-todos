import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { IoAddCircle } from 'react-icons/io5'

import tasks from '../reducers/tasks'

const TodoForm = () => {
    const [value, setValue] = useState('')
    
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            id: uniqid(),
            text: value,
            complete: false
        }
        dispatch(tasks.actions.addTask(newTask))
        setValue('')
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit"><IoAddCircle /></button>
        </form>
    )
}

export default TodoForm
