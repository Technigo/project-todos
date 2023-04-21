import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'
import './tasklist.css';

export const TaskList = () => {
  // FUNCTIONALITY
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleTask({ id: taskId }));
  }
  const onRemoveTask = (taskId) => {
    dispatch(tasks.actions.deleteTask({ id: taskId }));
  }
  return (
    <div className="tasklist-wrapper">
      <ul>
        {taskList.map((singleTask) => {
          const deadlineDate = singleTask.deadlineDate ? new Date(singleTask.deadlineDate).toLocaleDateString('sv-SE') : '';
          return (
            <div className="single-task-wrapper" key={singleTask.id}>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onTaskToggle(singleTask.id)} />
              <li>
                {singleTask.text}
                {singleTask.time}
                {deadlineDate && (
                  <span>
                    Deadline: {deadlineDate}
                  </span>
                )}
              </li>
              <button type="button" onClick={() => onRemoveTask(singleTask.id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
