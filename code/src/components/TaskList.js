import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task';

const TaskList = () => {
  const allTasks = useSelector((store) => (store.tasks))
  return (
    <div className="task-list">
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
       ))}
    </div>
  )
}

export default TaskList;