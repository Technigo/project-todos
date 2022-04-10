import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { compose, createStore, combineReducers } from "@reduxjs/toolkit";
import persistState from "redux-localstorage";
import { tasks } from "reducers/tasks";
import { projects } from "reducers/projects";
import Home from "components/Home";
import Error from "components/Error";
import Project from "components/Project";
import Header from "components/Header";
import NewProject from "components/NewProject";
import CreateNewProject from "components/CreateNewProject";

import { Container } from "styledelements/elements";
import { colors } from "reducers/colors";
import { icons } from "reducers/icons";

const enhancer = compose(persistState());

const reducer = combineReducers({
  tasks: tasks.reducer,
  projects: projects.reducer,
  colors: colors.reducer,
  icons: icons.reducer,
});

const store = createStore(reducer, enhancer);

export const App = () => {
  const [creatingProject, setCreatingProject] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {/* INCORRECT USE OF USESTATE FOR APP RENDERING  - line 43, creatingProject & setCreatingProject */}
        {!creatingProject && <CreateNewProject />}
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/newproject"
              element={<NewProject setCreatingProject={setCreatingProject} />}
            />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};
