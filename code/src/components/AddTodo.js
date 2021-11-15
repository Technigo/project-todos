import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const AddTodo = () => {
    const Dispatch = useDispatch()

    const AddTodo = () => { //When the onAddTodo function is called, the action is triggered
        dispatch(todos.actions.addTodo())
    }

    return (
        <div>
            <input type="text" />
            <button onClick={AddTodo}> 
                Add todo
            </button>
        </div>
    )
}

export default AddTodo