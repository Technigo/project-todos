/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete } from 'reducers/tasks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => handleToggleComplete(task.id)}
          style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
          {task.text}
        </li>
      ))}
    </ul>
  )
}

export default TaskList;