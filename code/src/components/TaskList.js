/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

// WHAT I WANT TO DO HERE:
// Render every task in the store
// Change their state to completed with a checkbox, which should change how they display
// Allow tasks to be deleted with a button click

// HEADER
// COUNTER
// TASKFORM
// TASKLIST

export const TaskList = () => {
  const taskArray = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const completedTaskToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }
  return (
    <section>
      {taskArray.map((singleTask) => {
        return (
          <div>
            <p>{singleTask.name}</p>
            <label>Status
              <input
                type="checkbox"
                checked={singleTask.isCompleted}
                onChange={() => completedTaskToggle(singleTask.id)} />
            </label>
            <button type="button">❌</button>
          </div>
        );
      })}
    </section>
  )
}
