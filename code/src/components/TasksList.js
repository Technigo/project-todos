import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RemoveTask } from 'components/RemoveTask';
import { tasks } from 'reducers/tasks';

export const TasksList = () => {
  const tasksList = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();

  const handleCheckboxChange = (taskId) => {
    dispatch(tasks.actions.toggleComplete(taskId));
  };

  return (
    <section>
      <ul>
        {tasksList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <input
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => handleCheckboxChange(singleTask.id)} />
              <RemoveTask task={singleTask} />
            </li>
          );
        })}
      </ul>
    </section>
  )
}
