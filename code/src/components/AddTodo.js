import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import todos from "../reducers/todos"


const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch  = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <main className='main'>
        <h4>Create new task</h4>
        <div className='add-todo-container'>
            <input 
                type='text'
                className='add-input'
                value={input}
                onChange={(event) => setInput(event.target.value)} 
            />
            <button className='add-button' onClick={onAddTodo}>
                <i className="fas fa-plus-circle"/>
            </button>
        </div>
        </main>
    )
}

export default AddTodo