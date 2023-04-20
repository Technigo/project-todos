/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import './TaskList.css';

const TaskList = () => {
    const taskList = useSelector((store) => store.tasks.items)
    const dispatch = useDispatch();
    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleTask({ id: taskId }));
    }
    const onRemoveTask = (taskId) => {
        dispatch(tasks.actions.deleteTask({ id: taskId }));
    }
    return (
        <section className="tasklist-container">
            <ul>
                {taskList.map((singleTask) => (
                    <li key={singleTask.id}>
                        <input
                            type="checkbox"
                            checked={singleTask.isChecked}
                            onChange={() => onTaskToggle(singleTask.id)} />
                        {singleTask.name}
                        {singleTask.time}
                        <button className="removeBtn" type="button" onClick={() => onRemoveTask(singleTask.id)}>
                            <img src=".\images\trash.svg" alt="trash" className="trashBtn" />
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TaskList;