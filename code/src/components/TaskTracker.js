import React from 'react';
import { useSelector } from 'react-redux';

const TaskTracker = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((each) => each.isComplete === true);
  const totalTasks = taskList.length;

  return (
    <div>
      <h3>Completed {`${completedTasks.length}`}/{`${totalTasks}`}</h3>
    </div>
  )
}

export default TaskTracker;

