/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
// import AddTask from './AddTask';
import styled from 'styled-components/macro'
import TodoCounter from './TodoCounter'
import Task from './Task';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  return (
    <>
      <TaskListSection>
        {taskList.map((taskData) => {
          return (
            <Task
              key={taskData.id}
              taskData={taskData} />
          );
        })}
      </TaskListSection>
      <TodoCounter />
    </>
  )
}

export default TaskList;

const TaskListSection = styled.section`
border: solid 2px red;
padding: 20px;
display: flex;
flex-direction: column;
`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `