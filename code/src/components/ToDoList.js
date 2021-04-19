import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tasks from '../reducers/tasks';

import TaskCard from './TaskCard';

const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map(task => (
        <TaskCard 
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          createdAt={task.createdAt}
          onChangeAction={() => dispatch(tasks.actions.toggleComplete(task.id))}
        />
      ))}
    </div>
  )
};

export default ToDoList;

//how to move TaskCard component , with the dispatch?