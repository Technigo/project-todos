import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {todos} from 'reducer/todos'

export const TaskForm = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [category, setCategory] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault(
            dispatch(todos.actions.addTask({ text, category })),
            setText('')
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task:
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </label>
            <button type='submit'>Add</button>
        </form>
    )
}