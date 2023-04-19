/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import moment from 'moment'

const TaskCounter = () => {
  const ongoingTasks = useSelector((store) => store.tasks.items);

  const completedTasks = useSelector((store) => store.tasks.items.filter((item) => item.isComplete === true));

  const currentDay = moment().format('dddd');

  return (
    <>
      <StyledH2>{currentDay}</StyledH2>
      <StyledH2>{ongoingTasks.length} to go, {completedTasks.length} finished</StyledH2>
    </>
  )
}

export default TaskCounter

const StyledH2 = styled.h2`
  font-family: "Archivo Narrow";
  font-size: 1em;
  margin:0.4em 0 0 0;
  font-weight: lighter;
  @media screen and (min-width: 667px) {
  transform: scale(1.2);
}
`