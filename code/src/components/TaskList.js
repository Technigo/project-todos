/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
// import AddTask from './AddTask';
import styled from 'styled-components/macro'
import Task from './Task';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  return (
    <TaskListSection>
      {taskList.map((taskData) => {
        return (
          <Task
            key={taskData.id}
            taskData={taskData} />
        );
      })}
    </TaskListSection>
  )
}

export default TaskList;

const TaskListSection = styled.section`
padding: 20px;
display: flex;
flex-direction: column;
// heigth: 400px;
`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `