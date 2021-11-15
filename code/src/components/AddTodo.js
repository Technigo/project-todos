import React from 'react'
import { useDispatch } from 'react-redux' // in order to trigger an action, need useDispatch and the slice itself

import todos from '../reducers/todos'

const AddTodo = () => {

    const dispatch = useDispatch () // always needed
    
    const onAddTodo = () => {
        dispatch(todos.actions.addTodo('Hello'))
    }
    return (
        <div>
            <input type="text"/>
            <button onClick={onAddTodo}> Add todo</button> 
        </div>
    )
}

export default AddTodo