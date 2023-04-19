import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const Tasklist = () => {
  const toDoList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  return (
    <section>
      <ul>
        {toDoList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <input type="checkbox" checked={singleTask.checked} onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
              {singleTask.name}
              <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}>X</button>
            </li>)
        })}
      </ul>
    </section>
  )
}