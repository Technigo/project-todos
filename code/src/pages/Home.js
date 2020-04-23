import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "../reducers/todos.js";
import { TodoList } from "components/TodoList.js";

const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore({ reducer })

export const Home = () => {
    return (
        <Provider store={store}>
            <main>       
             <TodoList />
            </main>
        </Provider>
    )
};