import React from 'react'
import { Provider } from "react-redux"
import { combineReducers, createStore } from "@reduxjs/toolkit"
import styled from 'styled-components'

//--- reducer ---
import { todos } from './reducer/todos'

//--- components ---
import { Header } from "./components/Header"
import { Counter } from "./components/Counter"
import { AddTodo } from "./components/AddTodo"
import { List } from "./components/List"


//creating a reducer
export const reducer = combineReducers({
  //referring to the key *name* of the reducer
  todos: todos.reducer
})

//1. Retrieve the local storage (from the browser?) and use it as our initial state
// store sth over several different sessions; 
//reduxState = what value am I supposed to get from the local storage
const persistedStateJSON = localStorage.getItem("RebekasState")

let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

//2. Create the storage using the initial state
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//3. Store the state in local storage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem("RebekasState", JSON.stringify(store.getState()))
})
localStorage.clear();
export const App = () => {
  return (

    <Provider store={store}>
      <Wrap>
        <Header />
        <Counter />
        <AddTodo />
        <List />
      </Wrap>
    </Provider>
  )
}

// --- STYLED COMPONENTS ---

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #025959;
  margin: 3px auto;
  border-radius: 10px;
  min-height: 98.5vh;
  background: #F2F2EB;

  //-- tablet --
  @media (max-width: 1023px) {
    margin: 0 auto;  
  }

  //-- desktop --
  @media (min-width: 1024px) {
    font-size: 24px;
    margin: 0 auto;    
    max-width: 800px;
  }
`

