import React from "react";
import Header from "components/Header";
import AddTask from "components/AddTask";
import TaskList from "components/TaskList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(1,51,51);
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgb(1,51,51);
    min-height: 100vh;
  }

  @media (min-width: 768px) {
    body {
      height: 100vh;
      width: 700px;
    }
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <AddTask />
        <TaskList />
      </main>
    </>
  );
};
