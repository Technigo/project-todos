import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos.js';

export const TodoInput = () => {
    const dispatch = useDispatch();

    //State for text from input field
    const [inputText, setInputText] = useState('');

    //Submit function to dispatch addTodo
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //Dispatch action to save new todo 
        dispatch(
            todos.actions.addTodo({
                text: inputText,
                isComplete: false
            })
        );
        
        //Clears the input field
        setInputText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={event => setInputText(event.target.value)}
                value={inputText}
            />
            <input
                type='submit'
                value='Add Todo'
            />
        </form>
    );
};