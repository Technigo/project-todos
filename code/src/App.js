import React from 'react'
import styled from 'styled-components';
import { store } from 'store'
import { Provider } from 'react-redux'
import { Header } from 'Components/Header'
import { Tasks } from 'Components/Task'
import { AddTask } from 'Components/AddTask'

const MainContainer = styled.section`
  background-image: url("https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80");
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
`

export const App = () => {
  return (
    <MainContainer>
      <Provider store={store} >
        <Header />
        <AddTask />
        <Tasks />
      </Provider>
    </MainContainer>
  )
}
