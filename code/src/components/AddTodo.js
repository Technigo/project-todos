import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const AddTodo = () => {
    const [input, setInput] = useState('') //To keep track of the current state of text input

    const dispatch = useDispatch()

    const AddTodo = () => { //When the AddTodo function is called, the action is triggered and it passes the input value
        dispatch(todos.actions.addTodo(input)) 
    }

    return (
        <section className="add-todo-section">
            <button 
                className="add-btn"
                onClick={AddTodo}> 
                <i class="fas fa-plus"></i>
            </button>
            <input 
                type="text" 
                placeholder="Add task"
                value={input} 
                onChange={(event) => setInput(event.target.value)}
            />
        </section>
    )
}

export default AddTodo