/* eslint-disable indent */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import tasks from 'reducers/tasks';

const AddTask = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: Date.now().toString(),
            isChecked: false,
            name: inputValue.toUpperCase(),
            time: moment().format('D MMM HH:mm')
        };
        dispatch(tasks.actions.addTask(newTask));
        setInputValue('');
        // https://www.random.org/
    }
    return (
        <section>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="addTaskInput">
                    ADD TO DO HERE
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" required />
                </label>
                <button type="submit"> Add Now!</button>
            </form>
        </section>
    )
}

export default AddTask;