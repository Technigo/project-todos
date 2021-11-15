import React, { useState } from 'react'
import { useDispatch } from 'react-redux' // in order to trigger an action, need useDispatch and the slice itself

import todos from '../reducers/todos'


const AddTodo = () => {
    const [input, setInput] = useState('')// using the local state here to set the input....more convenient than using global state
    const dispatch = useDispatch () // always needed
    
    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))// This is the function which is invoked when you click the button to add a to-do
    }
    return (
        <div>
            <input type="text" 
            value={input} 
            onChange ={(event) => setInput(event.target.value)}/>
            <button onClick={onAddTodo}> Add todo</button> 
        </div>
    )
}

export default AddTodo