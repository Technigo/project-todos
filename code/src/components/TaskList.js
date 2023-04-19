import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleTask({ id: taskId }));
  }

  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <div key={singleTask.id}>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onTaskToggle(singleTask.id)} />
              <li>{singleTask.text}</li>
            </div>
          )
        })}
      </ul>
    </section>
  )
}
