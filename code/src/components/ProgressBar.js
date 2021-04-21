import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const ProgressText = styled.p`
  font-size: 12px;
  margin: 0 0 5px 0;
  font-family: ${props => props.theme.fontFamily};
`;

// const ProgressOuter = styled.div`
//   height: 8px;
//   border-radius: 10px;
//   border: 1px solid black;
//   margin: 0;
// `;

// const ProgressFiller = styled.div`
//   background-color: ${props => props.theme.primary};
//   height: 100%;
//   transition: width 0.5s linear;
//   border-radius: 10px;
//   min-width: 10%;
//   margin: 0;
// `;

export const ProgressBar = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  
  const onCountCompleted = () => {
    const completedTasks = tasks.filter(task => task.isComplete === true)
    return completedTasks.length
  }

  return (
    <ProgressContainer>
      <ProgressText>Tasks completed: {onCountCompleted()} / {tasks.length}</ProgressText>
      {/* <ProgressOuter><ProgressFiller style={{ width: onCountCompleted()/tasks.length*100 }}></ProgressFiller></ProgressOuter> */}
    </ProgressContainer>
  )
};