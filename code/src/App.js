import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";

//Always the same
const reducer = combineReducers({
  // by convention it is always called reducer and we always use the same method to combine slices
  todos: todos.reducer, //slice
});

const store = configureStore({ reducer }); // ({ reducer: reducer }) 1-property that configure store expects from us, built in name. 2- the variable we created. ES6 shortage syntax

export const App = () => {
  return (
    <Provider store={store}>
      <div>Hi</div>
    </Provider>
  );
};
