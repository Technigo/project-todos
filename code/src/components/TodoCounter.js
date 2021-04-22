import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`;

const CounterText = styled.p`
  font-size: 12px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const TodoCounter = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  
  const onCountCompleted = () => {
    const completedTasks = tasks.filter(task => task.isComplete === true)
    return completedTasks.length
  };

  return (
    <CounterContainer>
      <CounterText>Tasks completed: {onCountCompleted()} / {tasks.length}</CounterText>
    </CounterContainer>
  )
};