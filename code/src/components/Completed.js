import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import completed from 'reducers/completed';
import uncompleted from 'reducers/uncompleted';
import format from 'date-fns/format';

export const Completed = () => {
  const dispatch = useDispatch();

  const completedTasks = useSelector((store) => store.completed.tasks)

  const checkboxHandler = (task) => {
    const unCheckedTask = {
      ...task,
      isCompleted: !task.isCompleted
    };
    // Make the checkbox change before the dispatch is passed. Using setTimeOut???
    dispatch(completed.actions.deleteTask(task));
    dispatch(uncompleted.actions.addTask(unCheckedTask));
  };

  return (
    <div className="post-it post-it2">
      <h2>Done</h2>
      {completedTasks.map((task) => (
        <div className="task-div" key={task.id}>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={task.isCompleted}
              onChange={() => checkboxHandler(task)} />
            <span className={task.isCompleted ? 'checked' : 'unchecked'}>{task.text}</span>
          </label>
          <button type="button" onClick={() => dispatch(completed.actions.deleteTask(task))}>❌</button>
          <p className="timestamp">Task completed at: {format(task.completionTime, 'HH:mm dd/MM/yyyy')}</p>
        </div>
      ))}
    </div>
  )
}
