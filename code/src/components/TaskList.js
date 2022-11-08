/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components/macro'
import Task from './Task';

const TaskList = ({ listData }) => {
  return (
    <TaskListSection>
      {listData.map((task) => {
        return (
          <Task
            key={task.id}
            taskData={task} />
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
width: 100%;
`