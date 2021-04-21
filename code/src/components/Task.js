import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

import  trashcan  from '../assets/icons8-trash-can-100.png';

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
        <p className="task-text">{task.text}</p>
      </label>

      <p className="task-colomn-10 date-text">{new Date(task.id).getDate()}/{new Date(task.id).getMonth()+1}</p>

      <img src={trashcan}
      alt="trash-can"
      className="trash-can"
      onClick={() => dispatch(tasks.actions.deleteTask(task.id))}>
      </img>
    </div>
  )
}
