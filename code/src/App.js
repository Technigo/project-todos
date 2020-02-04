import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/Task'
import { Tasks } from 'components/TaskList'
import { AddTaskForm } from 'components/AddTaskForm'
import { Date } from 'components/Date'
import { ClearAllButton } from 'components/ClearAllButton'
import { NumberOfTasks } from 'components/NumberOfTasks'
import { FatFooter } from 'components/FatFooter'


import styled from 'styled-components/macro'


const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header>
          <HeaderLeft>
            <Heading>Todo</Heading>
            <Date />
          </HeaderLeft>
          <HeaderRight>
            <NumberOfTasks />
            <ClearAllButton />

          </HeaderRight>
        </Header>
        <AddTaskForm />
        <Tasks />
        <FatFooter />
      </Wrapper>
    </Provider>
  )

}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: darkblue;
  align-items: center;
  justify-content: center;
  
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
  background-color: #f7f7fc;
  width: 350px;
  height: 90px;
  margin-top: 50px;
  padding: 20px;
`
const HeaderLeft = styled.div`
  color: black;
  width: 30%;
`
const HeaderRight = styled.div`
  color: black;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`

const Heading = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: darkgrey;
  margin: 2px;
`


