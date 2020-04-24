import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { shoppings } from 'reducers/shoppings'
import { ToDo } from './Pages/ToDo'
import { Shopping } from './Pages/Shopping'

const reducer = combineReducers({
  tasks: tasks.reducer,
  shopping: shoppings.reducer
})

// const store = configureStore({ reducer })

const persistedStateJSON = localStorage.getItem('reduxState-15')
console.log(`persistedStateJSON: ${persistedStateJSON}`)
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`)

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem('reduxState-15', JSON.stringify(store.getState()));
})


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <ToDo />
          </Route>
          <Route path="/shopping" exact >
            <Shopping />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}