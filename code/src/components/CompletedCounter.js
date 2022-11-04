import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CompletedCounter = () => {
  const toDoList = useSelector((store) => store.toDos.items);
  const completedArray = toDoList.filter((task) => task.isCompleted === true)

  if (toDoList.length >= 1) {
    return (
      <Counter>
        {toDoList.every((task) => task.isCompleted) ? 'Yay! All done!'
          : `${completedArray.length}/${toDoList.length} completed! `}
      </Counter>
    )
  }
}
export default CompletedCounter;

const Counter = styled.p`
  color: white;
`