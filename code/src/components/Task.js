import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './Task.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [changeColor, setChangeColor] = useState('black');

  const handleCheckbox = () => {
    dispatch(tasks.actions.toggleCompleteTask(task.id));
    dispatch(tasks.actions.addToCounter(task.complete));
    const nextColor = changeColor === 'red';
    setChangeColor(nextColor);
  };

  const handleRemoveOnClick = () => {
    dispatch(tasks.actions.removeTask(task.id));
  };

  return (
    <section className="taskItem">
      <div className="taskList">
        <input
          className="checkbox"
          type="checkbox"
          checked={task.complete}
          onChange={handleCheckbox}
        />
        <label className="taskName">
          <span onClick={handleCheckbox}> {task.text}</span>
        </label>
      </div>
    </section>
  );
};
