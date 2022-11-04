/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const TaskCounter = () => {
  const ongoingTasks = useSelector((store) => store.tasks.items);

  const doneTasks = useSelector((store) => store.tasks.items.filter((item) => item.isComplete === true));

  return (
    <StyledH2>{ongoingTasks.length} tasks, {doneTasks.length} completed</StyledH2>
  )
}

export default TaskCounter

const StyledH2 = styled.h2`
  /* font-family: "Archivo Narrow"; */
  font-size: 1em;
  margin:0.4em 0 2em 0;
  font-weight: lighter;

  @media screen and (min-width: 667px) {
  transform: scale(1.2);
}
`