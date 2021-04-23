import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task';

import NoTodosLeft from './NoTodosLeft';

const TaskList = () => {
  const allTasks = useSelector((store) => (store.tasks))

  const noTasks = (allTasks.length === 0)

  return (
    <>
    {noTasks ?
    <NoTodosLeft /> : (
    <div className="task-list">
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
       ))}
    </div>
    )
    }
    </>
  )
}

export default TaskList;