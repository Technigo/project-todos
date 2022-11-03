import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Counter = () => {
  // eslint-disable-next-line max-len
  const completedTasks = useSelector((store) => store.tasks.items.filter((item) => !item.isComplete).length);
  const totalTasks = useSelector((store) => store.tasks.items.length);
  return (
    <StyledText>Completed: {completedTasks}/{totalTasks}</StyledText>
  )
};

const StyledText = styled.p`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`

export default Counter;