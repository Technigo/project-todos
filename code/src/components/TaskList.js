/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch();

  const onTaskCompleted = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }

  return (
    <section>
      {taskList.map((singelTask) => {
        return (
          <article>
            <h2>{singelTask.text}</h2>
            <label key={singelTask.id}>is task completed
              <input
                type="checkbox"
                checked={singelTask.complete}
                onChange={() => onTaskCompleted(singelTask.id)} />
            </label>
            <button type="button">X</button>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList

// onChange={() => onTaskCompleted(singleTask.id) } ****use this?