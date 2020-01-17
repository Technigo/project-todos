import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { fridge } from 'reducers/fridge'
import { AddTask } from 'components/AddTask'
import { ItemList } from 'components/ItemList'
import { Header } from 'components/Header'

const reducer = combineReducers({
  fridge: fridge.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Background>
        <Header />
        <AddTask />
        <ItemList />
      </Background>
    </Provider>
  )
}

const Background = styled.section`
background`
