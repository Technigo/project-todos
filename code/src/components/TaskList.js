/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
// import AddTask from './AddTask';
import styled from 'styled-components/macro'
import Task from './Task';
// import EmptyState from '../assets/EmtyState.svg';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const leftTodos = taskList.filter((task) => task.isCompleted === false)
  console.log('leftTodos', leftTodos)
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
  );
};

export default TaskList;

const TaskListSection = styled.section`
padding: 20px;
display: flex;
flex-direction: column;
overflow: hidden;
max-height: 2000px;
`
/*
const EmptyStateSection = styled.section`
display: flex;
justify-content: center;
align-item: center;
width: 100%;
position: relative;
// background-image: url("EmptyState.svg");
background-color: var(----light-color);

.image-wrapper{
  justify-content: center;
  background-image: url("Assets/EmptyStatee.svg");
  height: 36vh;
  width: 60%;
  // border: solid 2px red;
  padding: 20px;
  background-size: cover;

}
`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `
*/