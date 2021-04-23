import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const TodoForm = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: uniqid(),
            description: value, 
            isComplete: false
        }

        dispatch(todos.actions.addTodo(newTodo))
        setValue('')
    }

    return (
        <form className="add-task-form" onSubmit={onFormSubmit}>
            <section className="add-task-container">
                <button className="add-task-button" type="submit">+</button>
                <input
                    className="add-task-input"
                    placeholder="Add task"
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </section>
        </form>   
    )
}

export default TodoForm