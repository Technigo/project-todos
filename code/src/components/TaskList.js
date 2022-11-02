import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NeedToDoRed } from 'reducers/NeedToDoRed';

export const TaskList = () => {
  const taskList = useSelector((store) => store.NeedToDoRed.items);
  const dispatch = useDispatch();

  const onTaskIsDoneToggle = (id) => {
    dispatch(NeedToDoRed.actions.toggleItem(id))
  }
  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <input
              id="bla"
              type="checkbox"
              checked={singleTask.isCaught}
              onChange={() => onTaskIsDoneToggle(singleTask.id)} />
            <label htmlFor="bla">{singleTask.text}</label>
            <button type="button">X</button>
          </article>
        )
      })}
    </section>
  )
}