import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';


const Header = () => {
  const tasksArray = useSelector((store) => store.tasks.items);
  const completedTasks = tasksArray.filter((task) => task.complete);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(tasks.actions.removeAll());
  }

  return (
    <div>
      TODO
      <p>Number of tasks: {tasksArray.length} </p>
      <p>Finished tasks: {completedTasks.length} </p>
      <button onClick={handleRemoveAll}>Remove all</button>
    </div>
  )
};

export default Header;