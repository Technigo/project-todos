import React from "react";

import styled from "styled-components"

import { Header } from "./Header";
import { TodoForm } from "./TodoForm";
import { ToDoList } from "./ToDoList";

const Main = styled.main`
background-color: ${props => props.theme.backgroundColor};
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TodoPage = () => {
  return (
    <Main>
      <Header />
      <TodoForm />
      <ToDoList />
    </Main>
  )
};