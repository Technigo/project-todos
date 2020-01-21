import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  return (
    <section className={task.complete ? 'checked' : 'unchecked'}>
      <div className="taskList">
        <label className="taskName">
          <input
            className="checkbox"
            type="checkbox"
            checked={task.complete}
            onChange={handleCheckbox}
          />
          <span className="fakeCheckbox"></span>
          <span className="taskText" onClick={handleCheckbox}>
            {' '}
            {task.text}
          </span>
        </label>
      </div>
    </section>
  );
};
