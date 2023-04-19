import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import completed from 'reducers/completed';
import uncompleted from 'reducers/uncompleted';

export const Completed = () => {
  const dispatch = useDispatch();

  const checkboxHandler = () => {
    console.log('hello')
  };

  const completedTasks = useSelector((store) => store.completed.tasks)
  return (
    <section>
      {completedTasks.map((task) => (
        <div>
          <label key={task.id} htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={checkboxHandler} />{task.text}
          </label>
          <button type="button" onClick={() => dispatch(uncompleted.actions.addTask(task))}>🔄</button>
          <button type="button" onClick={() => dispatch(completed.actions.deleteTask(task))}>🗑️</button>
        </div>
      ))}
    </section>
  )
}
