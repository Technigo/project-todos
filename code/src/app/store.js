import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const reducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({ reducer });
