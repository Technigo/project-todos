import React from "react"
//we import 3 essential packages, Provider, combineReducers & configureStore
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
//import styled from "styled-components"
import todos from "reducers/todos"
import NewTodo from "components/NewTodo"
// here we create a "pocket" of a bag
const reducer = combineReducers({
  todos: todos.reducer,
})


// here we inject the "pocket" in the "backpack"
const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Provider store={store}> {/* here we put the "backpack(store)" on the applications "shoulders". everything that is between the Provider will have access to the our store */}
      <NewTodo />
    </Provider>
  )
}
