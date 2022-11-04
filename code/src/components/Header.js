import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/tasks';

export const Header = () => {
  // Import dispatches here
  const dispatch = useDispatch();

  // Clear all tasks
  const handleClearTasks = (taskIndex) => {
    dispatch(tasks.actions.clearTasks(taskIndex));
  };

  // Count all tasks
  const handleTaskCounter = useSelector((store) => store.tasks.items.length);

  // const totalTaskInputArray = useSelector((store) => store.tasks.items);
  // console.log(allTasks);

  // // Count checked tasks
  // const completedTasks = handleTaskCounter.filter(
  //   (task) => task.completed === true
  // );

  return (
    <div>
      <div>
        <h1>To do</h1>
        <p>{moment().format('ddd, D MMM YYYY')}</p>
      </div>
      <div>
        <p>{handleTaskCounter}</p>
        <button type="button" onClick={handleClearTasks}>
          Clear all
        </button>
      </div>
    </div>
  );
};
