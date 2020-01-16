import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(tasks.actions.toggleCompleteTask(task.id));
    dispatch(tasks.actions.addToCounter(task.complete));
  };

  const handelRemoveOnClick = () => {
    dispatch(tasks.actions.removeTask(task.id));
  };
  return (
    <section className="taskItem">
      <input
        type="checkbox"
        checked={task.complete}
        onChange={handleCheckbox}
      />

      <p>{task.text}</p>
      <button className="remove" type="button" onClick={handelRemoveOnClick}>
        Delete
      </button>
    </section>
  );
};
