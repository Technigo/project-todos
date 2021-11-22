import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import todos from './reducers/todos'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ClearTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import ClearAll from './components/ClearAll'


const Container = styled.section`
  width: auto;
  padding: 10px 10px 30px 10px;
  background-color: #ACD5D9;
  border: 2px solid mintcream;
  border-radius: 15px; 
  margin: 80px 0px;
`

// collect all slices and combine to one box. 
const reducer = combineReducers({
  todos: todos.reducer, //specify all slices that we need to combine in this bigger bag
})

// set up for localstorage as initial state
const preloadedStateJSON = localStorage.getItem("reduxState");
let preloadedState = {};
 
if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON);
};

// create store with initial state
const store = configureStore(
  {reducer, 
  preloadedState}
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
          <TodoList />
          <ClearAll />
      </Provider>
    </Container>
  )
}
