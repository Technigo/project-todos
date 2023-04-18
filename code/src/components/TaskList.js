import React from 'react';
import { useSelector } from 'react-redux';
import { AddNewTask } from './AddNewTask';
import { SingleTask } from './SingleTask';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  return (
    <div>
      <ul className="task-list" />
      {taskList.map((singleTask) => {
        return <li key={singleTask.id}>{singleTask.name} </li>
      })}

      <AddNewTask />
      <SingleTask />
    </div>
  )
}