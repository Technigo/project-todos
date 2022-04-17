import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import tasks from 'reducers/tasks';


const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: uniqid(),
            text: inputValue,
            complete: false,
        };

        dispatch(tasks.actions.addItem(newTask));

        setInputValue('');
    };
 
    return (
        <form className='form-container' onSubmit={onFormSubmit}>
            <label>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Write your todo here'
                />
            </label>
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskInput;
