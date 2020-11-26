import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Header } from './components/Header'
import { AddNewTodo } from './components/AddNewTodo'
import { todos } from 'reducers/todos'
  import { TodoList } from './components/TodoList'   

const reducer = combineReducers({todos: todos.reducer})
const store = configureStore({reducer})

export const App = () => {

  return (
    <Provider store={store}>
      <Body>
        <Wrapper>
          <Header />
            <AddNewTodo />
              <TodoList />  
        </Wrapper>
      </Body>
    </Provider>
  )
}

const Body = styled.section`
  background-color:  rgba(193, 146, 146, 0.892);
`

  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 700px;
  margin: auto;
  border-radius: 2%;
  background-color: rgb(228, 220, 220);
  box-shadow: 2px 4px 12px rgba(117, 117, 117, 0.678);   

  @media (min-width: 768px) { /* Tablet view */
      width: 350px; 
  }
  
  @media (min-width: 1024px) { /* Desktop view */
      width: 380px;
  }
`

