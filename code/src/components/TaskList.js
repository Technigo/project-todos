/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

export const TaskList = () => {
  const todoList = useSelector((store) => store.tasks.items); // From app.js

  const dispatch = useDispatch();

  const onTaskIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };
  return (
    <section>
      {todoList.map((singleTask) => {
        return (
          <article>
            <h2>{singleTask.text} </h2>
            <label>
              Is this task done
              <input
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onTaskIsDoneToggle(singleTask.id)}
              />
            </label>
            <button type="button">X</button>
          </article>
        );
      })}
    </section>
  );
};

export default TaskList;
