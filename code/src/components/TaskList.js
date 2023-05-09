import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from 'reducers/Task';
import './TaskList.css';

/* modern React components are functions */
export const TaskList = () => {
/* useSelector extracts data from the Redux store state into a React component
whenever store is update useSelector is notified makes component re-render */
  const taskList = useSelector((store) => store.task.items);
  const dispatch = useDispatch();

  // id is our parameter
  const OnDeleteSingleTaskButtonClick = (id) => {
    // call on reducer from Task slice
    dispatch(Task.actions.deleteSingleTask(id));
  };
  const onIsCompletedCheckBoxToggle = (id) => {
    // call on reducer from slice and dispatch action
    dispatch(Task.actions.toggleIdTaskIsCompleted(id));
  };
    // calls on reducer from Task slice to delete Task List
  const onDeleteAllTasksButtonClick = () => {
    dispatch(Task.actions.deleteAllTasks())
  };

  /* map below works because of spread operator in Task.js
  that creates an array and includes new tasks added
  without any nesting - if there were nesting
  we would get an undefined error doing map */
  return (
    <section className="widerTaskListSection">
      <ul>
        {taskList.map((singleTask) => {
          return (
            <section className="TaskListSection">
              <li className="singleTask" key={singleTask.id}>
                <p>
                  <div className="round">
                    <label htmlFor={`Task_with_id${singleTask.id}`}>
                      <input
                        id={`Task_with_id${singleTask.id}`}
                        type="checkbox"
                        value={singleTask.isChecked}
                        onChange={() => onIsCompletedCheckBoxToggle(singleTask.id)} />
                    </label>
                  </div>
                  <span>
                    {singleTask.content}
                  </span>
                  <button
                    className="deleteSingleTaskButton"
                    type="button"
                    onClick={() => OnDeleteSingleTaskButtonClick(singleTask.id)}>
                  🗑️
                  </button>
                </p>
              </li>
            </section>
          )
        })}
      </ul>
      <button
        className="ClearListButton"
        type="button"
        onClick={onDeleteAllTasksButtonClick}>
                  Clear List
      </button>
    </section>
  );
}