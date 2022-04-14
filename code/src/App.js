import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import Startpage from "components/Startpage";
import tasks from "reducers/tasks";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({
  reducer: reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <Startpage />
    </Provider>
  );
};
