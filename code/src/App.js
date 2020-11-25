import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { todoList } from './reducers/todoList'

import Header from './components/Header'
import NumberOfTodos from './components/NumberOfTodos'
import AllTodoItems from './components/AllTodoItems'
import AddItem from 'components/AddItem'
import ClearAll from 'components/ClearAll'
import Today from 'components/Today'

import 'index.css'
import CompleteMessage from 'components/CompleteMessage'


const reducer = combineReducers({
  todolist: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <TopSection>
            <Today />
          <TaskSummary>
            <NumberOfTodos />
            <ClearAll />
          </TaskSummary>
        </TopSection>
        <MainSection>
          <AddItem />
          <AllTodoItems />
        </MainSection>
        <CompleteMessage />
      </MainContainer>
    </Provider>
  )
}

const TopSection = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  `

const TaskSummary = styled.div`
  display: flex;
  flex-direction: column;
  `
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  `
const MainContainer = styled.main`
  background:
  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  background-size: 20px 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  width: 100vw;
`