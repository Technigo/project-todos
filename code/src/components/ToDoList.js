import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { TasksCompleted } from "./TasksCompleted";
import { TaskCard } from "./TaskCard";
import { ClearButtons } from "./ClearButtons";
import { ProgressBar } from "./ProgressBar";


const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 100px 10px;
  width: 92%;
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  @media (min-width: 769px) {
    max-width: 600px;
  }
`;

const TaskList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ToDoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);

  return (
    <Main>
      {tasks.length < 1 ? (
        <TasksCompleted />
      )
      :
      (
        <TaskList>
          <ProgressBar />
          {tasks.map((todo, index) => (
            <TaskCard 
              key={index}
              taskInfo={todo} 
            />   
          ))}
          <ClearButtons />
        </TaskList>
      )}
    </Main>
  )
};