import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TaskReducer } from 'reducers/reducers';
import { ClearScreenTask } from 'components/ClearScreenTask'
import { TaskCounter } from './Counters';

export const TaskList = () => {
  const taskList = useSelector((store) => store.TaskReducer.items);
  const dispatch = useDispatch();

  const onTaskIsDoneToggle = (id) => {
    dispatch(TaskReducer.actions.toggleTask(id))
  }

  const onDeleteTask = (id) => {
    dispatch(TaskReducer.actions.deleteTask(id))
  }

  return (
    <div>
      {(taskList.length === 0) ? (
        <ClearScreenTask />
      ) : (
        <section>
          <TaskCounter />
          {taskList.map((singleTask) => {
            return (
              <article>
                <input
                  id={Date.now()}
                  type="checkbox"
                  checked={singleTask.isCaught}
                  onChange={() => onTaskIsDoneToggle(singleTask.id)} />
                <label htmlFor={Date.now()}>{singleTask.text}</label>
                <button type="button" onClick={() => onDeleteTask(singleTask.id)}>X</button>
              </article>
            )
          })}
        </section>
      )}
    </div>
  )
}