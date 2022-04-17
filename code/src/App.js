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
    display: block;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    body {
      width: 768px;
    }
  }

  main {
    /* width: 100%;
    margin: 0 auto; */
    box-sizing: border-box;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
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
