import React from 'react'

// Two functions that allow us to create a store, and give it to the provider. "Hey provider – I want you to make this store available for any component that's rendered inside of you."
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { List } from "./components/List"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Credits } from "./components/Credits"
import { ListFilter } from './components/ListFilter'
import { todos } from './reducers/todos'

const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
    <div className="main-container">
      <Header></Header>
      <ListFilter></ListFilter>
      <List></List>
      <Footer></Footer>
    </div>
    <Credits></Credits>
    
    </Provider>
  )
}
