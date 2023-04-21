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
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p>
                <label htmlFor={`task_with_id${singleTask.id}`}>
                  is it complete?
                  <input id={`task_with_id${singleTask.id}`} type="checkbox" value={singleTask.isComplete} onChange={() => onIsComplete(singleTask.id)} />
                </label>
                <span>{singleTask.text}</span>
                <button
                  type="button"
                  onClick={() => onDeleteSingleTask(singleTask.id)}>Delete this pokemon
                </button>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default TaskList;