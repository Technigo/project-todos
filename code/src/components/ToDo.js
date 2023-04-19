/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './ToDo.css';

export const ToDo = () => {
  // useSelector is a hook that allows us to access the store
  const allTasks = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task-list">
        {/* map over the tasks array and render a checkbox and a task for each task  */}
        {allTasks.map((task) => (
          <div className="task-container">
            <div className="task">
              <input key={task.id} task={task} type="checkbox" />
              <p>{task.text}</p>
              <p>{task.emoji}</p>
              <button
                className="task-button"
                type="button"
                onClick={() => dispatch(tasks.actions.removeTask())}
              >
                ➖ Task
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1>My To Do List</h1>
      <button
        className="task-button-white"
        type="button"
        onClick={() => dispatch(tasks.actions.addTask())}
      >
        ➕ Task
      </button>
    </div>
  );
};
