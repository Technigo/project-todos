/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

export const TaskList = () => {
  const dispatch = useDispatch();
  // attempt to have tasks to not disappear when reload page
  // useEffect(() => {
  //   const listFromStorage = JSON.parse(localStorage.getItem('taskList'));
  //   if (listFromStorage) {
  //     dispatch(tasks.actions.setAllItems(listFromStorage));
  //   }
  // }, []);

  const todoList = useSelector((store) => store.tasks.items);

  const handleTaskToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const handleRemoveTask = (taskIndex) => {
    dispatch(tasks.actions.removeTask(taskIndex));
  };

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(TaskList));
  });
  return (
    <section>
      {todoList.map((singleTask, index) => {
        return (
          <article key={singleTask.id}>
            <label>
              {' '}
              Done
              <input
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => handleTaskToggle(singleTask.id)}
              />
            </label>
            <p>{singleTask.text} </p>
            <button type="button" onClick={() => handleRemoveTask(index)}>
              🗑
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default TaskList;
