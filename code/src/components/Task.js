import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

export const Task = ({task}) => {
  const dispatch = useDispatch()

  return (
    <div className="task">
      <input className="task-colomn-10 checkbox-round" id={task.id}
        type='checkbox'
        checked={task.complete}
        onChange={() => dispatch(tasks.actions.toggleCompleted(task))}>
      </input>

      <label htmlFor={task.id} className="task-colomn-60">
        {task.text}

      </label>

      <p className="task-colomn-10">{new Date(task.id).getDate()}/{new Date(task.id).getMonth()+1}</p>
      <button className="task-colomn-10"
        type="button"
        onClick={() => dispatch(tasks.actions.deleteTask(task))}>
        <span role="img" aria-label="trash-can">{"🗑️"}</span>
      </button>
    </div>
  )
}
