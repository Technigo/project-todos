import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoData from "reducers/todoData";
import TodoList from "components/TodoList";
import AddTodo from "components/AddTodo";
import TodoCount from "components/TodoCount";
import { CompleteBtn } from "components/CompleteBtn";

const reducer = combineReducers({
  todo: todoData
});

const store = configureStore({ reducer });

export const App = () => (
  <Provider store={store}>
    <main>
      <article className="componentContainer">
        <AddTodo />

        <section className="componentCountAndList">
          <TodoCount id="count" />
          <TodoList />
          <CompleteBtn />
        </section>
      </article>
    </main>
  </Provider>
);
