/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Counter = () => {
  const allTasksToDo = useSelector((store) => store.tasks.items);
  const NumberOfTasksDone = allTasksToDo.filter((item) => item.isDone).length;

  return (
    <TaskCounter>
      <p>You have done {NumberOfTasksDone}/{allTasksToDo.length} today </p>
    </TaskCounter>
  )
}

export default Counter;

const TaskCounter = styled.p`
    font-size: 20px;
    color: grey;
`
