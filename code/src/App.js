import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/Task'
import { Tasks } from 'components/TaskList'
import { AddTaskForm } from 'components/AddTaskForm'
import { Date } from 'components/Date'
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
            <Button > CLEAR ALL
            </Button>
          </HeaderRight>
        </Header>
        <AddTaskForm />
        <Tasks />
      </Wrapper>
    </Provider>
  )

}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  background-color: red;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`
const HeaderLeft = styled.div`
  color: black;
  background-color: white;
  width: 50%;
`
const HeaderRight = styled.div`
  color: black;
  background-color: green;
  width: 50%;
`

const Heading = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: black;
  align-items: center;
  margin: 2px;
`

const Button = styled.button`
  width: 70px;
  height: 20px;
  background-color: #8aa8e9;
  text-align: center;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  color: white;
  margin: 5px;
  padding: 3px;
`
