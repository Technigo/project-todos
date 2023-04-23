/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { useDispatch } from 'react-redux';
import './ClearBtn.css';
import tasks from 'reducers/tasks';

const ClearBtn = () => {
    const dispatch = useDispatch();
    const clearTasks = () => {
        dispatch(tasks.actions.clearTasks());
    }
    return (
        <section className="ClearBtn-container">
            <button className="clearBtn" type="button" onClick={clearTasks}>Clear Tasks</button>
        </section>
    )
}

export default ClearBtn;