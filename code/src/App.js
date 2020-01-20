import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'
import { AddTask } from 'components/AddTask'
import { ItemList } from 'components/ItemList'
import { Header } from 'components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer
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
  width: 100vw;
  height: 100vh;
  background-color: white;
  @media (min-width: 769px) {
    margin-top: 5vh;
    box-shadow: 2px 3px 8px black;
    height: 90vh;
    width: 768px;
  }
`
