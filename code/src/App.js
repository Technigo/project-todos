import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
//import createStore above from toolkit when implementing local storage
import { todos } from './reducers/todos'
import { TodoSummary } from 'components/TodoSummary'
import { AddTodoForm } from 'components/AddTodoForm'
import { TodoList } from 'components/TodoList'

//Comment out old store code below when implementing local storage (comment out the store, keep the reducer!)
const reducer = combineReducers({
  todos: todos.reducer
})

//const store = configureStore({ reducer })

// Local storage, Vans lecture last term 22/4 @51 mins:
// New store code:
// 1. Retrieve the local storage and use it as our initial state
const persistedStateJSON = localStorage.getItem('todos_reduxState')
console.log(`persistedStateJSON: ${persistedStateJSON}`)
let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`)
  // 2. Create the store using the initial state
  const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // 3. Store the state in localStorage on any redux state change. 
  // Subscribe to any actions in the redux store and 
  // write out state to the local storage
  store.subscribe(() => {
    localStorage.setItem('todos_reduxState', JSON.stringify(store.getState()))
  })
  // If we want to clear what has been stored in Local Storage we can print localStorage.clear() in the console and hit enter.


  export const App = () => {
    return (
      <Provider store={store}>
        <TodoSummary />
        <AddTodoForm />
        <TodoList />
      </Provider>
    )
  }
