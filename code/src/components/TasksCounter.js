import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

const TasksCounter = () => {
  const totalTasks = useSelector((store) => store.tasks.items.length);
  return (
    <TasksCounterContainer>
      <TasksCounterTime>{moment().format('MMMM d, YYYY')}</TasksCounterTime>
      <TasksCounterLeft>Tasks left: {totalTasks}</TasksCounterLeft>
    </TasksCounterContainer>
  )
};

const TasksCounterContainer = styled.div`
  padding-top: 20px;
`
const TasksCounterTime = styled.p`
  color: grey;
  font-size: 0.9rem;
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`
const TasksCounterLeft = styled.p`
  font-weight: 600;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`

export default TasksCounter;