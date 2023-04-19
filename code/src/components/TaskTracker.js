import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Checked from '../assets/circlechecked.svg';

const TaskTracker = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((each) => each.isComplete === true);
  const totalTasks = taskList.length;

  return (
    <TTDiv>
      <StyledP>Completed {`${completedTasks.length}`}/{`${totalTasks}`}</StyledP>
      <IconImg src={Checked} />
    </TTDiv>
  )
}

const StyledP = styled.p`
  font-weight: 700;`

const IconImg = styled.img`
height: 25px;
`

const TTDiv = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;`

export default TaskTracker;