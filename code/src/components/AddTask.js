/* eslint-disable indent */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import './AddTask.css';
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
    }
    return (
        <section className="input-field">
            <form onSubmit={onFormSubmit}>
                <label htmlFor="addTaskInput">
                    <div className="input">
                        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" placeholder="Add your task here" required />
                        <button className="addBtn" type="submit"><img className="addIcon" alt="Post here" src="./Images/addBtn.svg" /></button>
                    </div>
                </label>
            </form>
        </section>
    )
}

export default AddTask;