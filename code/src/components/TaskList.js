import React from 'react';
import { tasks } from 'reducers/tasks';
import { useSelector, useDispatch } from 'react-redux';
import { format, isToday, isYesterday } from 'date-fns';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  const onDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  const formatDate = (date) => {
    const time = format(date, 'HH:mm');
    if (isToday(date)) {
      return `Today ${time}`;
    } else if (isYesterday(date)) {
      return `Yesterday ${time}`;
    } else {
      return `${format(date, 'EEEE')} ${time}`;
    }
  }

  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          const dateObject = new Date(singleTask.createdAt);
          const time = formatDate(dateObject);

          return (
            <li key={singleTask.id}>
              {singleTask.name} - Added {time}
              <button type="button">
               ✖️
              </button>
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={onDeleteAllTasks}>Delete all tasks</button>
    </section>
  )
}