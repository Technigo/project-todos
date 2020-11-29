import React from 'react'
import { Provider } from "react-redux"
import { combineReducers, createStore } from "@reduxjs/toolkit"
import styled from 'styled-components'

//--- reducer ---
import { todoTasks } from './reducer/todoTasks'

//--- components ---
import { Header } from "./components/Header"
import { Counter } from "./components/Counter"
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"



//creating a single reducer from several reducers
export const reducer = combineReducers({
  //referring to the key *name* of the reducer
  todoTasks: todoTasks.reducer
})

//1. Retrieve the local storage (from the browser?) and use it as our initial state
// store sth over several different sessions; 
//reduxState = what value am I supposed to get from the local storage
const persistedStateJSON = localStorage.getItem("RebekasState")
console.log(`persistedStateJSON: ${persistedStateJSON}`)

let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
console.log(`persistedState: ${persistedState}`)
//2. Create the storage using the initial state
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//3. Store the state in local storage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem("RebekasState", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    //store is passed to provider as a prop
    <Provider store={store}>
      <Wrap>
        <Header />
        <Counter />
        <AddTodo />
        <TodoList />
      </Wrap>
    </Provider>
  )
}

// --- STYLED COMPONENTS ---

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: #F2E0C9; */
  border: 2px solid #025959;
  /* padding: 15px 5px; */
  margin: 3px auto;
  border-radius: 10px;
  min-height: 98.5vh;

  @media (min-width: 678px) (max-width: 1023px) {
    margin: 0 auto;  
  }

  @media (min-width: 1024px) {
    font-size: 24px;
    margin: 0 auto;    
    max-width: 800px;
  }
`

