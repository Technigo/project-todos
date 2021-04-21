import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const TodoForm = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        const newTodo = {
            id: uniqid(),
            description: value,
            isComplete: false
        }

        dispatch(todos.actions.addTodo(newTodo))
        setValue('')
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
            type="text"
            className="input-field"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <button type="submit" className="button">Add todo</button>
        </form>
    )
}

export default TodoForm