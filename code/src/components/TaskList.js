import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import GOAL from 'assets/goal.svg'
import { Task } from 'components/Task'

const TaskList = () => {
  // fetch all tasks from the store
  const allTasksArray = useSelector((store) => store.tasks.items)
  // Show total number of items in task-list
  const tasksArray = useSelector((store) => store.tasks.items);
  // Show number of completed items in task-list
  const completedTasks = tasksArray.filter((task) => task.isComplete);

  return (
    <TaskListOuterWrapper>
      <TaskListInnerWrapper>
        {allTasksArray.map((task) => <Task key={task.id} task={task} />)}
        {allTasksArray.length === 0 && (
          <PlaceholderWrapper>
            <img src={GOAL} alt="bild" height="100px" />
            <p>Done with all your tasks! Youre a workaholic.</p>
          </PlaceholderWrapper>
        )}
        <p>YOU HAVE COMPLETED:  {completedTasks.length} / {tasksArray.length} </p>
      </TaskListInnerWrapper>
    </TaskListOuterWrapper>
  )
}

export const TaskListOuterWrapper = styled.div`
background-color: #F69101;
display: flex;
align-items: center;
justify-content: center;
`;

export const TaskListInnerWrapper = styled.div`
width: 50%;
background-color: white;
padding: 20px
`;

export const PlaceholderWrapper = styled.div`
`;

export default TaskList;

