import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos';

const AddTodo = () => {
    const [value, setValue]= useState ('');
    const dispatch = useDispatch();

    const OnItemAdd = () =>{
        dispatch(todos.actions.addItem(value))
    }


    return (
        <div>
            <input 
                type= "text" 
                value={value} 
                onChange={e =>setValue(e.target.value)} 
            />
            <button onClick={OnItemAdd} > Add new todo </button>
        </div>
    )
}

export default AddTodo;