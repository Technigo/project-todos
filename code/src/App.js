import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import todos from './reducers/todos'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ClearTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import ClearAll from './components/ClearAll'


const Container = styled.section`
  height: 25vh;
  padding: 10px 10px 30px 10px;
  background-color: #D3FFFE;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d6e4b5'/%3E%3Cstop offset='1' stop-color='%23d6e4b5' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2388e7f9'/%3E%3Cstop offset='1' stop-color='%2388e7f9' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e4afef'/%3E%3Cstop offset='1' stop-color='%23e4afef' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D3FFFE'/%3E%3Cstop offset='1' stop-color='%23D3FFFE' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFB49A'/%3E%3Cstop offset='1' stop-color='%23FFB49A' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  
`
// const Wrapper = styled.section`
//   display: grid;
//   grid-template-columns: 1fr;
//   background-color: white;
//   padding: 10px;

// `

// collect all slices and combine to one box. 
const reducer = combineReducers({
  todos: todos.reducer, //specify all slices that we need to combine in this bigger bag
})

// set up for localstorage as initial state
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};
 
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

// create store with initial state
const store = createStore(
  reducer, 
  persistedState
)

// store the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Container>
      <Provider store={store}>
  
          <Header />
          <ClearTodo />
          <TodoList />
        {/*   <AddTodo /> */}
          <ClearAll />
    
      </Provider>
    </Container>
  )
}
