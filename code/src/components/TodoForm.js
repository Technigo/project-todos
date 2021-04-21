import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import uniqid from 'uniqid'

import todos from '../reducers/todos'


const TodoForm = () => {
    //user input state 
    const [value, setValue] = useState('')

    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('Your first task: ' + value)
        //dispatch an action to add new todo item
        dispatch(
            todos.actions.addTodo({
                id: uniqid(),
                description: value,
                isComplete: false
            })
        )
        //Clear input
        setValue('')
    }

    return (
        <form onSubmit={onFormSubmit}>
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

export default TodoForm