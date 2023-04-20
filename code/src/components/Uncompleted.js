import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uncompleted from 'reducers/uncompleted';
import completed from 'reducers/completed';
import format from 'date-fns/format';

export const Uncompleted = () => {
  const dispatch = useDispatch();
  const uncompletedTasks = useSelector((store) => store.uncompleted.tasks);
  const flippedTasks = [...uncompletedTasks].reverse();

  const onTaskChecked = (task) => {
    const checkedTime = Date.now();
    // new task with added completion time
    const checkedTask = {
      ...task,
      completionTime: checkedTime,
      isCompleted: !task.isCompleted
    };

    dispatch(uncompleted.actions.deleteTask(task));
    dispatch(completed.actions.setTaskDone(checkedTask));
  }

  return (
    <section className="todo-list">
      <h2>To-do</h2>
      {flippedTasks.map((task) => (
        <div className="task-div" key={task.id}>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={task.isCompleted}
              onChange={() => onTaskChecked(task)} />
            <span className={task.isCompleted ? 'checked' : 'unchecked'}>{task.text}</span>
          </label>
          <button type="button" onClick={() => dispatch(uncompleted.actions.deleteTask(task))}>❌</button>
          <p className="timestamp">Task created at: {format(task.creationTime, 'HH:mm dd/MM/yyyy')}</p>
        </div>
      ))}
    </section>
  )
}