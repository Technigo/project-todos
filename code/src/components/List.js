import React from "react";
import { useSelector } from "react-redux";
import { Task } from "components/Task";
import styled from "styled-components";

export const List = () => {
  const taskStore = useSelector(store => store.tasks.tasks);

  if (taskStore.length === 0) {
    return (
      <EmptyList>
        <CongratsText>
          <BoldText>Woah! Well done!</BoldText>
          <ImageWrapper>🏖</ImageWrapper>
          You deserve some free time now.
        </CongratsText>
      </EmptyList>
    );
  }

  return (
    <TaskList>
      {taskStore.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </TaskList>
  );
};

const TaskList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const EmptyList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CongratsText = styled.span`
  padding: 50px 10px;
  text-align: center;
`;

const BoldText = styled.p`
  font-weight: bold;
`;

const ImageWrapper = styled.p`
  font-size: 60px;
  margin: 30px 0px 0px;
`;
