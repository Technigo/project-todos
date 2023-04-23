/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import ClearBtn from './ClearBtn';
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
                    <li className="list" key={singleTask.id}>
                        <p className="mainList">
                            <div className="checkBox">
                                <input
                                    type="checkbox"
                                    checked={singleTask.isChecked}
                                    onChange={() => onTaskToggle(singleTask.id)} />
                            </div>
                            <div className="listSection">
                                <div className="taskText">{singleTask.name}</div>
                                <div className="timeStamp">{singleTask.time}</div>
                            </div>
                            <button className="removeBtn" type="button" onClick={() => onRemoveTask(singleTask.id)}>
                                <img src=".\images\trash.svg" alt="trash" className="trashBtn" />
                            </button>
                        </p>
                    </li>
                ))}
            </ul>
            <ClearBtn />
        </section>
    )
}

export default TaskList;