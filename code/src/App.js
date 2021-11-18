import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todo from "./reducers/todo";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";
import AddTask from "components/AddTask";
import { OuterSection } from "components/GlobalStyledComponents";

const reducer = combineReducers({
  todo: todo.reducer,
});

// const persistedStateJSON = localStorage.getItem("todosReduxState");
// let persistedState = {};

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON);
// }

// // Create store with initial state
// const store = createStore(
//   reducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// // Store the state in localstorage when Redux state change
// store.subscribe(() => {
//   localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
// });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <OuterSection>
        <AddTodo />
        <AddTask />
        <TodoList />
      </OuterSection>
    </Provider>
  );
};
