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
      </MainContainer>
    </Provider>
  )
}

const TopSection = styled.section`
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
  background-color: #6d695c;
  background-image:
  repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
  repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
  linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
  linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
  background-size: 70px 120px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  width: 100vw;
`