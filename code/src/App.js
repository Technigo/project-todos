import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import pokemons from 'reducers/pokemons'

import PokemonList from 'components/PokemonList'
import ToDoCounter from 'components/ToDoCounter'
import Header from 'components/Header'
import Footer from 'components/Footer'

const reducer = combineReducers({
  pokemons: pokemons.reducer,
})

const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <PokemonList />
      <ToDoCounter />
      <Footer />
    </Provider>
  )
} 
