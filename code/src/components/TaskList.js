/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

// WHAT I WANT TO DO HERE:
// Render every task in the store /DONE
// Change their state to completed with a checkbox /DONE
// Completed tasks should look differently
// Allow tasks to be deleted with a button click /DONE
// Render an 'All done!' image if the list is empty

// HEADER
// COUNTER
// TASKFORM
// TASKLIST

export const TaskList = () => {
  const taskArray = useSelector((store) => store.tasks.items);

  const outstandingTasks = taskArray.filter((item) => !item.isCompleted);

  const completedTasks = taskArray.filter((item) => item.isCompleted);

  const dispatch = useDispatch();

  const completedTaskToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const deleteTask = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  }

  return (
    <section>
      <div>
        <h2>Outstanding</h2>
        {outstandingTasks.map((item, index) => {
          return (
            <div>
              <p>{item.name}</p>
              <label>Status
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => completedTaskToggle(item.id)} />
              </label>
              <button
                type="button"
                onClick={() => deleteTask(index)}>❌REMOVE
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Completed</h2>
        {completedTasks.map((item, index) => {
          return (
            <div>
              <p>{item.name}</p>
              <label>Status
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => completedTaskToggle(item.id)} />
              </label>
              <button
                type="button"
                onClick={() => deleteTask(index)}>❌REMOVE
              </button>
            </div>
          );
        })}
      </div>
    </section>
  )
}
