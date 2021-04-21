import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import todos from '../reducers/todos'


const AddTodoItem = () => {
    //user input state 
    const [value, setValue] = useState('')

    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Your first task: ' + value)
        //dispatch an action to add new todo item
        dispatch(
            todos.actions.addTodo({
                description: value
            })
        )
        //Clear input
        setValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add new task.."
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button type="submit" aria-label="add todo">Add Task</button>
        </form>
    )
}

export default AddTodoItem