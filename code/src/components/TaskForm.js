import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import todos from '../reducers/todos';

const TaskForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id:  uniqid(),
            description: value,
            isComplete: false
        };

        dispatch(todos.actions.addTodo(newTask));
        setValue('');
    }

    return (
        <form onSubmit={e => onFormSubmit(e)}>
            <input 
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}

            />
            <button type="submit">Add Task</button>
        </form>
    )
};

export default TaskForm;