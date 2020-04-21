
// move APP in here and then Export to APP
import React from 'react'
// to wrap everything in Store:
import { Provider } from 'react-redux'
// to access 2 reducers we need this from redux-toolkit:
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import reducers:
import { tasks } from '../reducers/tasks'

import { TaskList } from '../components/TaskList'
import { Header } from '../components/Header'

import styled from 'styled-components'
import { GlobalStyle } from 'lib/Global'


// first we create our combined-REDUCER-file:
const reducer = combineReducers({
  tasks: tasks.reducer
})
// then we use this reducer to configure a STORE:
const store = configureStore({ reducer })

// and now finally we have a Store we can include in our Provider:
export const Home = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />      
      <AppContainer>
        <Header />
        <TaskList />
      </AppContainer>
    </Provider>
  )
}

// styled-components:
const AppContainer = styled.main`
  @media (min-width: 668px) {
  width: 600px;
  margin: 40px auto;
  },
`
