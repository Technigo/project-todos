import React from 'react'
// to wrap everything in Store:
import { Provider } from 'react-redux'
// to access 2 reducers we need this from redux-toolkit:
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import reducers:
import { tasks } from './reducers/tasks'

import { TaskList } from './components/TaskList'
import { TaskInput } from 'components/TaskInput'


// first we create our combined-REDUCER-file:
const reducer = combineReducers({
  tasks: tasks.reducer
})
// then we use this reducer to configure a STORE:
const store = configureStore({ reducer })


// and now finally we have a Store we can include in our Provider:

export const App = () => {
  return (
    <Provider store={store}>
      <TaskInput />
      <TaskList />
    </Provider>
  )
}

/*
 PLAN 
  - create TodoInput
  - create store
  - use Provider
  - create TodoList
  - create TodoItem
  - create TodoSummary
  - create Header with components like Summery

  - Do all this without breaking the code - changes should show

*/

// StoreCreation : Tell redux about our reducers - combined reducers

// Persistence: Retrieve the existing state from localstorage if it exists

// StoreCreation: Create the store using our reducers and the retrieved state

// Persistence: Tell the store to persist the state in localstorage after every action