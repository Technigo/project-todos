/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/tasks';
import './TaskList.css';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onTaskDeleteBtnClick = (id) => {
    const taskContainer = document.getElementById(`task_with_id${id}`).parentNode.parentNode;
    taskContainer.classList.add('fade-out');
    setTimeout(() => {
      dispatch(tasks.actions.deleteSingleTask(id));
    }, 1000); // wait for 1 second before deleting the task
  }
  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleTaskIsDone(id));
  }
  return (
    <>
      <div className="header-container">
        <h2>TODAY</h2>
      </div>
      <ul className="tasklist">
        {taskList.map((singleTask) => {
          return (
            <li className="singletask-container" key={singleTask.id}>
              <p>
                <input id={`task_with_id${singleTask.id}`} type="checkbox" value={singleTask.isDone} onChange={() => onIsDoneCheckboxToggle(singleTask.id)} />
                <label htmlFor={`task_with_id${singleTask.id}`} />
                <span>{singleTask.name}</span>
                <button className="taskdeletebtn" type="button" onClick={() => onTaskDeleteBtnClick(singleTask.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                    <path fill="#C60012" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </button>
              </p>
            </li>);
        })}
      </ul>
    </>
  )
}

export default TaskList;
