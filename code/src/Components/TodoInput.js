import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from 'Reducers/todos.js'

export const TodoInput = () => {
    const dispatch = useDispatch()
    const [todoInput, setTodoInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(todoInput)

        dispatch (
            todos.actions.addTodo({
                todoItemInfo: {
                    description: todoInput,
                    done: false
                }
            })
        )
        setTodoInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
            rows='4'
            placeholder='Add a todo'
            onChange={event => setTodoInput(event.target.value)}
            value={todoInput}
            className='todoinput__form'
            />
            <input
            type='submit'
            className='todoinput__submit'
            value='Add todo'
            />
        </form>
    )
}