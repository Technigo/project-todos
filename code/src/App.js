import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tasks } from "reducers/tasks";
import { projects } from "reducers/projects";
import Home from "components/Home";
import Error from "components/Error";
import Project from "components/Project";
import Header from "components/Header";
import NewProject from "components/NewProject";

import { Container } from "styledelements/elements";

const reducer = combineReducers({
  tasks: tasks.reducer,
  projects: projects.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  console.log(store.projects);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};
