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
            <p>All tasks done!</p>
          </PlaceholderWrapper>
        )}
      </TaskListInnerWrapper>
      <CompletedTasksWrapper>
        <TasksCompleted>DONE:{' '}
          {completedTasks.length} / {tasksArray.length}
        </TasksCompleted>
      </CompletedTasksWrapper>
    </TaskListOuterWrapper>
  )
}

export const TaskListOuterWrapper = styled.div`
background-color: #F69101;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: 14px;
`;

export const TaskListInnerWrapper = styled.div`
width: 60%;
background-color: white;
padding: 20px;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (min-width: 667px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const PlaceholderWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const CompletedTasksWrapper = styled.div`
width: 60%;
display: flex;
justify-content: flex-end;

@media (min-width: 667px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const TasksCompleted = styled.p`
color: white;
font-size: 12px;
display:flex;
`;

export default TaskList;

