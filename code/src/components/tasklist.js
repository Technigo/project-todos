/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };
  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <h2>{singleTask.text}</h2>
            <label>
              Is this task done
              <input
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)}
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
