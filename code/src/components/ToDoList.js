import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";
import styled from "styled-components";

import { TasksCompleted } from "./TasksCompleted";
import { TaskCard } from "./TaskCard";
import { ClearAllButton } from "../styledcomponents/Buttons";


const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 100px 10px;
  width: 92%;
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
`;

const TaskList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ToDoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const completed = tasks.filter(item => item.isComplete === true);
  const dispatch = useDispatch();

  return (
    <Main>
      {tasks.length < 1 ? (
        <TasksCompleted />
      )
      :
      (
        <TaskList>
          {tasks.map((todo, index) => (
            <TaskCard 
              key={index}
              taskInfo={todo} 
            />   
          ))}
          <ButtonContainer>
            <ClearAllButton onClick={() => dispatch(todos.actions.removeAllTasks())}>Clear all</ClearAllButton>
            <ClearAllButton onClick={() => dispatch(todos.actions.removeCompletedTasks())} disabled={completed.length === 0}>Clear completed</ClearAllButton>
          </ButtonContainer>
        </TaskList>
      )}
    </Main>
  )
};