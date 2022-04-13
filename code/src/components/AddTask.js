import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import tasks from '../reducers/tasks';

const AddTask = () => { 
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: uniqid(),
            text: input,
            isComplete: false,
        };

        dispatch(tasks.actions.addTask(newTask)); 
        setInput('');
    }
        
    return (
        <form onSubmit={onFormSubmit}>
            <label>
                New task : &nbsp;
            <input 
                type='text'
                value={input}
                placeholder='enter task'
                onChange={(event) => setInput(event.target.value)}
            />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default AddTask; 
