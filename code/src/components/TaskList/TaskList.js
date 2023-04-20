import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/tasks';
import './TaskList.css';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onTaskDeleteBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  }
  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleTaskIsDone(id));
  }
  return (
    <section>
      <div className="tasklist-container">
        <div className="header-container">
          <h1>TODAY</h1>
        </div>
        <ul className="tasklist">
          {taskList.map((singleTask) => {
            return (
              <li className="singletask-container" key={singleTask.id}>
                <p>
                  <span>{singleTask.name}</span>
                  <button type="button" onClick={() => onTaskDeleteBtnClick(singleTask.id)}>
                    Delete this task
                  </button>
                  <label htmlFor={`task_with_id${singleTask.id}`}>
                      Is this one Done?
                    <input id={`task_with_id${singleTask.id}`} type="checkbox" value={singleTask.isDone} onChange={() => onIsDoneCheckboxToggle(singleTask.id)} />
                  </label>
                </p>
              </li>)
          })}
        </ul>
      </div>
    </section>
  )
}

export default TaskList;
