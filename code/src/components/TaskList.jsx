import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from 'reducers/Task';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteSingleTask = (id) => {
    dispatch(Tasks.actions.deleteSingleTask(id));
  }

  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p><span>{singleTask.text}</span>
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