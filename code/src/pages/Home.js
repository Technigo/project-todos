import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ItemList } from "../components/ItemList";
import { createStore, configureStore, combineReducers } from "@reduxjs/toolkit";
import { todolist } from "../reducers/todolist";
import { AddTaskForm } from "components/AddTaskForm";
import { Header } from "components/Header";
import { listContainer } from 'components/listContainer.css'


const reducer = combineReducers({ todolist: todolist.reducer})
const store = configureStore({ reducer })

export const Home = () => {
  return (
    <Provider store={store}>
      <main className='list-container'>
          <Header />
          <ItemList />
      </main>
    </Provider>
  )
}