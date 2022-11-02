/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

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
