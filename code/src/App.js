import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/tasks'
// import userDetails

import PokemonList from 'components/PokemonList'

const reducer = combineReducers({
  tasks: tasks.reducer,
  //userDetails: userDetails.reducer
})

const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
  )
}
