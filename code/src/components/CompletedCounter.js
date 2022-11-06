/* eslint-disable no-plusplus */

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CompletedCounter = () => {
  const toDoList = useSelector((store) => store.toDos.items);
  let completedCounter = 0;

  toDoList.forEach((task) => {
    if (task.isCompleted) {
      completedCounter++
    }
  });

  if (toDoList.length >= 1) {
    return (
      <Counter>
        {toDoList.every((task) => task.isCompleted) ? 'Yay! All done!'
          : `${completedCounter}/${toDoList.length} completed! `}
      </Counter>
    )
  }
}
export default CompletedCounter;

const Counter = styled.p`
  color: white;
`