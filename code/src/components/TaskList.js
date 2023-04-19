import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { AddNewTask } from './AddNewTask';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> To do: ({taskList.length}) </h2>
      <ul className="task-list">
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <input type="checkbox" checked={singleTask.checked} onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
              {singleTask.name}
              <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}>X</button>
            </li>
          )
        })}
      </ul>
      <AddNewTask />
    </div>
  )
}
