import React from 'react';
import { useSelector } from 'react-redux';

import { Task } from './Task';

export const TaskList = () => {

  // Fetch the list of todos
  const tasks = useSelector((store) => store.tasks);
  const tasksTodo = tasks.items.filter((task) => task.complete === false)

  return (
    <div className='list'>
      <p>I have {tasks.items.length} tasks in my list, 
      whereof {tasksTodo.length} tasks are uncompleted</p>
      
      <ul className='task-div'>
        {tasks.items.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};