import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import todos from "../reducers/todos"
import Penguin from "./Penguin"


const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch  = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <section className='add'>
            <div className='add-header'>
                <Penguin />
                <div className='create-text'>
                    <p>Let's get structured</p>
                    <h3>Create some todos</h3>
                </div>
            </div>
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
        </section>
    )
}

export default AddTodo