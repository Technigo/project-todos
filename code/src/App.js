import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Header } from './components/Header'
import { AddNewTodo } from './components/AddNewTodo'
import { todos } from 'reducers/todos'
import { TodoList } from './components/TodoList'  
import { Counter } from './components/Counter' 

const reducer = combineReducers({todos: todos.reducer})
const store = configureStore({reducer})

export const App = () => {

  return (
    <Provider store={store}>
        <Wrapper>
          <Header />
            <AddNewTodo />
              <TodoList />  
                <Counter />
        </Wrapper>
    </Provider>
  )
}

/* const Body = styled.section`
  background-color:  rgba(193, 146, 146, 0.892);
` */

  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

`

