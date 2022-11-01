/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/taskListSlice';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);

  const dispatch = useDispatch();

  const onisCompletedToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  const onremoveTask = (id) => {
    dispatch(tasks.actions.removeTask(id));
  }

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <h2>{singleTask.text}</h2>
            <label>Is this pokemon caught
              <input type="checkbox" checked={singleTask.isCompleted} onChange={() => onisCompletedToggle(singleTask.id)} />
            </label>
            <button type="button" onClick={() => onremoveTask(singleTask.id)}>X</button>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList;