import React from 'react';
import { useSelector } from 'react-redux';

const TaskCount = () => {
  const todoList = useSelector((store) => store.todolist.items);
  const uncompletedTasks = todoList.filter((singletask) => !singletask.isChecked);

  return (
    <div>
      <ul>
        <li>Total tasks: {todoList.length}</li>
        <li>Unchecked tasks: {uncompletedTasks.length}</li>
        <li>Checked tasks: {todoList.length - uncompletedTasks.length}</li>
      </ul>
    </div>
  )
}

export default TaskCount;