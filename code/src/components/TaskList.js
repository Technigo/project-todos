/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }
  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <label>
              <input
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onIsCompleteToggle(singleTask.id)}
                id={singleTask.id} />
            </label>
            <p>{singleTask.text}</p>
            <button type="button">Delete</button>
          </article>
        )
      })}
    </section>
  )
}

export default TaskList

