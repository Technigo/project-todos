import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { task } from 'reducers/task';

export const TaskList = () => {
  const tasklist = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteAllTasksClick = (id) => {
    dispatch(task.actions.deleteSingleTask(id))
  }
  return (
    <section>
      <ul>
        {tasklist.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p><span>{singleTask.name}</span>
                <button
                  type="button"
                  onClick={() => onDeleteAllTasksClick(singleTask.id)}>Delete this task
                </button>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}