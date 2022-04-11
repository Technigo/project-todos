import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import PokemonList from 'components/PokemonList'
import pokemons from 'reducers/pokemons.js'

const reducer = combineReducers({
  pokemons: pokemons.reducer,
})

const store = configureStore({
reducer: reducer,
})

export const App = () => {
  return (

    <Provider store={store}>
      <PokemonList />

   </Provider>

  )}