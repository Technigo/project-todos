import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todoList from '../reducers/todoList'

//we use local state here since no other component needs this input until submit

const TaskForm = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    //not handleSubmit since this happens HERE and not in a parent
    const onFormSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            id: uniqid(), 
            description: value, 
            isComplete: false
        }

        dispatch(todoList.actions.addTask(newTask))
        setValue('') //the magic of local states in conjunction with store. Sooooo much handier than passing props!!
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type={'text'}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type='submit'>Add Task!</button>
        </form>
    )
}

export default TaskForm