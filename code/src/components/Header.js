import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const tasks = useSelector((store) => store.tasks.tasks);
  const completedTasks = tasks.filter((task) => task.complete)

  return (
    <div>
      TODO
      <p>Number of tasks: {tasks.length} </p>
      <p>Finished tasks: {completedTasks.length} </p>
    </div>
  )
};

export default Header;