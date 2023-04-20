import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tasks } from 'Reducers/Tasks';
import './TaskList.css';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  const onTaskToggle = (taskId) => {
    dispatch(Tasks.actions.toggleTask({ id: taskId }));
  }
  const onRemoveTask = (taskId) => {
    dispatch(Tasks.actions.deleteTask({ id: taskId }));
  }

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