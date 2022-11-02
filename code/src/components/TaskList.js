import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tasks from 'reducers/tasks';

const TaskList = () => {
  const taskList = useSelector((backpack) => backpack.tasks.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>

            <h2>{singleTask.text}</h2>

            <input
              type="checkbox"
              checked={singleTask
                .isComplete}
              onChange={() => onIsCompleteToggle(singleTask.id)} />

            <button type="button">X</button>

          </article>
        );
      })}

    </section>
  )
}

export default TaskList;

/* return (
  <section>
    {taskList.map((singleTask) => {
      return (
        <article>
          <h2>{singleTask.name}</h2>
          <label>Is this pokemon caught?
            <input
              type="checkbox"
              checked={singleTask
                .isComplete}
              onChange={() => onisCompleteToggle(singleTask.id)} />
          </label>
          <button type="button">X</button>
        </article>
      );
    })}

  </section>
) */