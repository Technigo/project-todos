import React from 'react';
import { useSelector } from 'react-redux';
import { TaskCountStyles } from './TaskCount.styles';

export const TaskCount = () => {
  const taskList = useSelector((store) => store.tasks.items)
  // const allTasks = taskList.length
  const incompleteTasks = taskList.filter((item) => item.complete === false).length
  const completeTasks = taskList.filter((item) => item.complete === true).length
  // eslint-disable-next-line max-len
  return (
    <TaskCountStyles>
      {/* <div>
        <p>All tasks: </p>
        <p>{allTasks}</p>
      </div> */}
      <div>
        <h3>Incomplete</h3>
        <p>{incompleteTasks}</p>
      </div>
      <div>
        <h3>Completed</h3>
        <p>{completeTasks}</p>
      </div>
    </TaskCountStyles>
  )
}