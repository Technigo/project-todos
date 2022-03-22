import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled from "styled-components";

//a reducer required for the store
import todos from "./reducers/todos";

//imported components
import Header from "components/header/Header";
import AddTask from "components/addtasks/AddTask";
import TasksListContainer from "components/tasklistContainer/TasksListContainer";
import Subheader from "./components/subheader/Subheader";

// This combines all reducers; in this project, only one is being used.
const reducer = combineReducers({
  todos: todos.reducer,
});
// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem("todosReduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}
// Create store with initial state
const store = createStore(reducer, persistedState);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
});

//Stlyed component
const Main = styled.main`
  width: 95%;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 550px;
  }
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <Subheader />
        <AddTask />
        <TasksListContainer />
      </Main>
    </Provider>
  );
};
