/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

// WHAT I WANT TO DO HERE:
// Render every task in the store /DONE
// Change their state to completed with a checkbox /DONE
// Completed tasks should look differently
// Allow tasks to be deleted with a button click
// Render an 'All done!' image if the list is empty

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

  const deleteTask = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  }

  return (
    <section>
      {taskArray.map((task, index) => {
        return (
          <div>
            <p>{task.name}</p>
            <label>Status
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => completedTaskToggle(task.id)} />
            </label>
            <button
              type="button"
              onClick={() => deleteTask(index)}>❌
            </button>
          </div>
        );
      })}
    </section>
  )
}
