import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/tasks'
import AddTask from 'components/AddTask'


//prepare pocket
const reducer = combineReducers({
  tasks: tasks.reducer,
})

//injected pocket into backpack
// const store = configureStore({
//   reducer,
// })


// Get local storage and set it as the preloadedState
const persistedStateJSON = localStorage.getItem("usersToDo");
let preloadedState = {};

if (persistedStateJSON) {
  preloadedState = JSON.parse(persistedStateJSON);
}

// injected pocket into backpack and configure redux store with preloadedState
const store = configureStore({ reducer, preloadedState });

// Store the state in local storage on Redux state change
store.subscribe(() => {
  localStorage.setItem("usersToDo", JSON.stringify(store.getState()));
});


export const App = () => {
  return (
    //put backpack on the persons shoulder 
    //all here in between has access to global store
    <Provider store={store}>
      <AddTask/>
    </Provider>
  )
}
