import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toread } from "./reducers/toread"

import { Header } from "./components/Header"; 
import { AddBook } from "./components/AddBook"
import { BookList } from "./components/BookList"

const reducer = combineReducers({ toread: toread.reducer }); //specifices the reducer
const store = configureStore({ reducer }); //configures and specifices the store. Everything that goes in the reducer goes to the store.

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddBook />
      <BookList />
    </Provider>
  )
}
