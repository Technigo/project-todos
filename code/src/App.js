import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todo from "./reducers/todo";
import AddTodo from "components/AddTodo";
import AddTask from "components/AddTask";
import { OuterSection } from "components/GlobalStyledComponents";

const reducer = combineReducers({
  todo: todo.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <OuterSection>
        <AddTodo />
        <AddTask />
      </OuterSection>
    </Provider>
  );
};
