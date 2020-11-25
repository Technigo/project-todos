import React from "react";
import { Provider } from "react-redux";

import { combineReducers, createStore } from "@reduxjs/toolkit";
import { todos } from "./reducers/todos";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import { HandleTasks } from "./components/HandleTasks";
import { Header } from "./components/Header";
import styled from "styled-components";

const reducer = combineReducers({ todos: todos.reducer });

// Get localstorage and sets as initialstate
const persistedStateJSON = localStorage.getItem("toDoState");
let initialstate = {};
if (persistedStateJSON) {
  initialstate = JSON.parse(persistedStateJSON);
}

const store = createStore(
  reducer,
  initialstate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem("toDoState", JSON.stringify(store.getState()));
});

const Wrapper = styled.section`
  margin: 10px;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <AddTask />
        <TaskList />
        <HandleTasks />
      </Wrapper>
    </Provider>
  );
};
