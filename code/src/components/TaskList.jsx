/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from 'reducers/Task';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteSingleTask = (id) => {
    dispatch(Tasks.actions.deleteSingleTask(id));
  }

  const onIsComplete = (id) => {
    dispatch(Tasks.actions.toggleComplete(id));
  }
  return (
    <section className="w-full">
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p className="flex justify-between items-center">
                <label htmlFor={`task_with_id${singleTask.id}`}>
                  <input id={`task_with_id${singleTask.id}`} type="checkbox" value={singleTask.isComplete} onChange={() => onIsComplete(singleTask.id)} />
                </label>
                <span className="w-full text-left ml-2 text-sm">{singleTask.text}</span>
                <button
                  className="text-red bi bi-trash3 "
                  type="button"
                  onClick={() => onDeleteSingleTask(singleTask.id)} />
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default TaskList;