import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

const TasksCounter = () => {
  const totalTasks = useSelector((store) => store.tasks.items.length);
  return (
    <TasksCounterContainer>
      <p>{moment().format('MMMM d, YYYY')}</p>
      <p>Tasks left: {totalTasks}</p>
    </TasksCounterContainer>
  )
};

const TasksCounterContainer = styled.div`
  padding-top: 20px;
`
export default TasksCounter;