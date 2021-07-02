import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tasks from '../reducers/tasks';

const TaskList = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <div className="task-list-wrapper">
      {items.map((task) => (
        <div key={task.id} className='task-item'>
          <label>
            <input
              className='checkbox'
              type='checkbox'
              checked={task.complete}
              onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
            />
          </label>
          <p className='task-text-p'>{task.text}</p>
          <i
            className='far fa-trash-alt'
            onClick={() => dispatch(tasks.actions.removeTask(task.id))}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
