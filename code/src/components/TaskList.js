import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task';

const TaskList = () => {
  // fetch the tasks from the store
  const allTasksArray = useSelector((store) => store.tasks.tasks)

  return (
    <div>
      {allTasksArray.map(task => {
        return (
        <Task key={task.id} taskText={task.text} />
        )
      })}
    </div>
  )
};

export default TaskList;