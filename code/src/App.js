import React from 'react'

// to wrap everything in Store:
import { Provider } from 'react-redux'
// to access 2 reducers we need this from redux-toolkit:
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// import reducers:
import { tasks } from './reducers/tasks'


// first we create our combined-reducer-file:
const reducer = combineReducers({
  tasks: tasks.reducer
})


// then we use this reducer to configure a Store:
const store = configureStore({ reducer })


// and now finally we have a Store we can include in our Provider:

export const App = () => {
  return (
    <Provider store={store}>
      Find me in src/app.js!
    </Provider>
  )
}
