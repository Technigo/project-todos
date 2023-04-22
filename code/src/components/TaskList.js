/* eslint-disable jsx-a11y/control-has-associated-label */
import moment from 'moment/moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { task } from 'reducers/task';

export const TaskList = () => {
  const tasklist = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteAllTasksClick = (id) => {
    dispatch(task.actions.deleteSingleTask(id))
  }
  const onIsCompletedCheckboxToggle = (id) => {
    dispatch(task.actions.toggleIfTaskIsCompleted(id))
  }
  const dateOptions = moment().format('dddd DD/M');

  return (
    <section>
      <div className="header">
        <h1>Grocery list</h1><p>{dateOptions}</p>
      </div>
      <ul>
        {tasklist.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p className="line-through">
                <span>{singleTask.name}</span>
                <label htmlFor={`task_with_id${singleTask.id}`} className="container">
                  <input
                    id={`task_with_id${singleTask.id}`}
                    type="checkbox"
                    value={singleTask.isCompleted}
                    onChange={() => onIsCompletedCheckboxToggle(singleTask.id)} />
                  <span className="checkmark" />
                </label>
                <button
                  type="button"
                  onClick={() => onDeleteAllTasksClick(singleTask.id)}
                  className="remove-btn">✗
                </button>
              </p>
            </li>)
        })}
      </ul>
      <p className="total">Total: {tasklist.length}</p>
    </section>
  )
}