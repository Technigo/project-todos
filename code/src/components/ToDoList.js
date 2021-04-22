import React, { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { TodoCompleted } from "./TodoCompleted";
import { TodoCard } from "./TodoCard";
import { ClearButtons } from "./ClearButtons";
import { TodoCounter } from "./TodoCounter";
import { FilterTodos } from "./FilterTodos";

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

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
`;

export const ToDoList = () => {
  const [category, setCategory] = useState("");
  const allTasks = useSelector((state) => state.todos.tasks)
  const tasks = useSelector((state) => {
    if (!category) return state.todos.tasks;
    else if (category === "all") return state.todos.tasks
    else return state.todos.tasks.filter((task) => task.category === category); 
  });
  

  return (
    <Main>
      {allTasks.length < 1 ? (
        <TodoCompleted />
      )
      :
      (
        <TaskList>
          <FilterTodos 
            category={category.value} 
            onChange={category => setCategory(category.value)} />
          {tasks.map((todo, index) => (
            <TodoCard 
              key={index}
              taskInfo={todo} 
            />   
          ))}
          <BottomContainer>
            <TodoCounter />
            <ClearButtons />
          </BottomContainer>
        </TaskList>
      )}
    </Main>
  )
};