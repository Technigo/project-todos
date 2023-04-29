import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TaskTracker = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((each) => each.isComplete === true);
  const totalTasks = taskList.length;

  return (
    <TTDiv>
      <StyledP>Completed {`${completedTasks.length}`}/{`${totalTasks}`}</StyledP>
    </TTDiv>
  )
}

const StyledP = styled.p`
  font-weight: 700;`

const TTDiv = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;`

export default TaskTracker;