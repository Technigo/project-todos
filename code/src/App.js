import React from 'react'
import GlobalFonts from './fonts/fonts'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TotalTasks } from './components/TotalTasks'
import { Tasks } from './components/Tasks'
import { ClearTasks } from './components/ClearTasks'
import { todo } from 'reducers/todo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

library.add(faTasks, faCheckCircle)


const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/wallpaper.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 80vh;
    width: 500px;
    border-radius: 20px;
    -webkit-box-shadow: -4px 4px 41px -16px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 4px 41px -16px rgba(0,0,0,0.75);
    box-shadow: -4px 4px 41px -16px rgba(0,0,0,0.75);
`;

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalFonts />
        <Main>
          <AppContainer>
            <Header />
            <TotalTasks />
            <AddTask />
            <Tasks />
            <ClearTasks />
          </AppContainer>
        </Main>
      </Provider>
    </>
  )
}
