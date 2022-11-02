import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onCheckedToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <h2>{singleTask.name}</h2>
            <p>Is this pokemon caught?
              <input type="checkbox" checked={singleTask.isChecked} onChange={() => onCheckedToggle(singleTask.id)} />
            </p>
            <button type="button">X</button>
          </article>
        )
      })}
    </section>
  )
}