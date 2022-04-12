import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import pokemons from 'reducers/pokemons'

import PokemonList from 'components/PokemonList'

//prepare pocket
const reducer = combineReducers({
  pokemons: pokemons.reducer,
})

//injected pocket into backpack
const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    //put backpack on the persons shoulder 
    //all here in between has access to global store
    <Provider store={store}>
      <PokemonList/>
    </Provider>
  )
}
