import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { TodoInput } from './components/TodoInput'
import { todoStore } from './reducers/todoStore'
import { TodoList } from './components/TodoList'
import { TodoSummary } from './components/TodoSummary'
import { RemoveAllButton } from './components/RemoveAllButton'
import { CustomCheckbox } from 'components/CustomCheckbox'
import 'todo.css' 

const reducer = combineReducers({ todoStore: todoStore.reducer })
// const store = configureStore({ reducer })

  //retrieve the localstorage and use it as our initial state
  //when we reload the page we parse the data and are able to use it
  const persistedStateJSON = localStorage.getItem('reduxState')
    console.log(`persistedStateJSON: ${persistedStateJSON}`)
    let persistedState = {}
    //if the JSON exists in localstorage then we will parse it and store it in persistedState
    if (persistedStateJSON){
      persistedState = JSON.parse(persistedStateJSON)
    }
    console.log(`persistedState: ${persistedState}`)
    //creating a store using the initial state.
    const store = createStore(reducer, persistedState, 
      window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())
    //Listen to all changes of the local state
    store.subscribe(() => {
      localStorage.setItem('reduxState', JSON.stringify(store.getState()))
      //getState will retrive the whole store, JSON.stringify will turn it into text
      //localStorage.setItem will set the value of reduxState (the store) to the text representation of the entire app
    })

export const App = () => {
  return (
    //the provider makes it possible to use the useSelector
    <Provider store = {store}>
      <main>
        
        <TodoList />
       
      </main>
    </Provider>
  )
}
// I can reach my store by putting store.todoStore