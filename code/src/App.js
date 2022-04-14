import React from 'react'
import styled from 'styled-components'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from 'components/Header'
import { TodoList } from 'components/TodoList'
import { Form } from 'components/Form'

import { list } from 'reducers/list'
// import { todos } from 'reducers/todos'

const StyledApp = styled.div `
.post-it {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFF99;
  width: 50%;
  margin: auto;
  padding: 20px;
  font-family: 'Gochi Hand', cursive;
}
`

const reducer = combineReducers({
  list: list.reducer,
  // todos: todos.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => (
  <Provider store={store}>
    <StyledApp>
      <div className='post-it'>
        <Header />
        <TodoList />
        <Form />
      </div>
    </StyledApp>
  </Provider>
)

