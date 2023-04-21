import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uncompleted from 'reducers/uncompleted';
import completed from 'reducers/completed';
import format from 'date-fns/format';
import { AddTask } from './AddTask';

export const Uncompleted = () => {
  const dispatch = useDispatch();
  const uncompletedTasks = useSelector((store) => store.uncompleted.tasks);
  /* Reversed listorder */
  const flippedTasks = [...uncompletedTasks].reverse();
  /* For setting the checkbox before dispatch */
  const [checking, setChecking] = useState(false);

  const onCheckboxClick = (task) => {
    const checkedTime = Date.now();
    // new task with added completion time
    const checkedTask = {
      ...task,
      completionTime: checkedTime,
      isCompleted: !task.isCompleted
    };
    /* checks the checkbox for the unique id */
    setChecking(task.id);

    setTimeout(() => {
      dispatch(uncompleted.actions.deleteTask(task));
      dispatch(completed.actions.setTaskDone(checkedTask));
    }, 5000);
  }

  return (
    <div className="post-it post-it1">
      <h2>To-do</h2>
      <AddTask />
      {flippedTasks.map((task) => (
        <div className="task-div" key={task.id}>
          <label className="checkbox-container" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={task.id === checking}
              onChange={() => onCheckboxClick(task)} />
            <span className="checkmark" />
            <span className={task.isCompleted ? 'checked' : 'unchecked'}>{task.text}</span>
          </label>
          <button type="button" onClick={() => dispatch(uncompleted.actions.deleteTask(task))}>❌</button>
          <p className="timestamp">Task created at: {format(task.creationTime, 'HH:mm dd/MM/yyyy')}</p>
        </div>
      ))}
    </div>
  )
}