import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

const TaskTracker = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((each) => each.isComplete === true);
  const totalTasks = taskList.length;

  return (
    <div>
      <p>Completed {`${completedTasks.length}`}/{`${totalTasks}`}</p>
    </div>
  )
}

export default TaskTracker;