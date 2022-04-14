import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { compose, createStore, combineReducers } from "@reduxjs/toolkit";
import persistState from "redux-localstorage";
import { projects } from "reducers/projects";
import { colors } from "reducers/colors";
import { icons } from "reducers/icons";
import Home from "components/Home";
import Error from "components/Error";
import Project from "components/Project";
import Header from "components/Header";
import NewProject from "components/NewProject";

const enhancer = compose(persistState());

const reducer = combineReducers({
  projects: projects.reducer,
  colors: colors.reducer,
  icons: icons.reducer,
});

const store = createStore(reducer, enhancer);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
