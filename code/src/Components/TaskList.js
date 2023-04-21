// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tasks } from 'Reducers/Tasks';
import './TaskList.css';

// /////////////// COMPONENT //////////////////////// //

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items) // Tasklist = all tasks
  const dispatch = useDispatch();

  const onTaskToggle = (taskId) => { // This function is called when a task is checked
    dispatch(Tasks.actions.toggleTask({ id: taskId }));
  }
  const onRemoveTask = (taskId) => { // This function is called when a single task is removed
    dispatch(Tasks.actions.deleteTask({ id: taskId }));
  }

  // /////////////// OUTCOME //////////////////////// //

  return (
    <section className="tasklist-container">
      {taskList.map((singleTask) => (
        <div className="singletask-container" key={singleTask.id}>
          <div className="singletask-content1">
            <input
              type="checkbox"
              id="check"
              checked={singleTask.isChecked}
              onChange={() => onTaskToggle(singleTask.id)} />
          </div>
          <div className="singletask-content2">
            <div className="singletask-content2-time">
              {singleTask.time}:
            </div>
            <div className="singletask-content2-message">
              {singleTask.message}
            </div>
          </div>
          <div className="singletask-content3">
            <button className="trash-button" type="button" onClick={() => onRemoveTask(singleTask.id)}><img alt="trashbin" src="../Images/trash.svg" /></button>
          </div>
        </div>
      ))}
    </section>
  )
}