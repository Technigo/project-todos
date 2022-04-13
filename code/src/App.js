import React from 'react'
import {Provider} from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { AddTodo } from 'components/AddTodo'
import { TodoList } from 'components/TodoList'

const reducer = combineReducers({
  todos: todos.reducer,
})

//Local storage
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <ProviderContainer className="provider-container">
          <TodoList />
          <AddTodo />
        </ProviderContainer>
        </Wrapper>
    </Provider>
  )
}



const devices = {
  mobile: "(max-width: 667px)",
  tablet: "(min-width:668px) and (max-width:1024px)",
  desktop: "(min-width: 1025px)",
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: -10px;
  border: 1px solid red;
`

const ProviderContainer = styled.section`
  position: relative;
  min-height: 600px;
  min-width: 400px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  background: rgb(236, 240, 243);
   box-shadow: 
              -3px -3px 30px rgb(255, 175, 130, .8),
              3px 3px 30px rgb(255, 175, 130, .8);

  @media ${devices.tablet} {
    margin: 100px 0;
    width: 400px;
    min-width: 40px;

  }

  @media ${devices.mobile} {
    margin: 50px;
    min-width: 40px;
    width: 200px;
    min-height: 400px;
    height: 100px;


  }

  @media ${devices.desktop} {
    margin: 100px 700px;

  }

`

