import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { reducer } from 'reducers/reducer'
import { TodoContainer } from './components/TodoContainer'

// Tell redux about our reducers
// Store both my reducers todos and reducer inside reducers to combine reducers
const reducers = combineReducers({ 
  reducer: reducer.reducer,
 });

// Retrieve the existing state from localstorage if it exists
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Create the store using our reducers and the retrieved state
const store = createStore(reducers, persistedState);

// Tell the store to persist the state in localstorage after every action
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  )
}
