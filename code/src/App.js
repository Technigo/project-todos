import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";

export const App = () => {
  return <div>Find me in src/app.js!</div>;
};
