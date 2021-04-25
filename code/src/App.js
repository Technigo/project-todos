import React from 'react'

import { Provider } from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import styled from 'styled-components'
// import img from './assets/img.jpeg'

import todos from './reducers/todos'

import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import ClearAllTodos from './components/ClearAllTodos'
import Footer from './components/Footer'

// const BackgroundImage = styled.img `
//   background-position: cover; 
//   background-repeat: no-repeat; 
//   background-image: url(${img});
//  `

const Content = styled.a `
  overflow: auto; 
  width: 100%; 
  margin: 0; 
`

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store = {store}>
      <Header />
        {/* <BackgroundImage src={ img }/> */} 
      <TodoInput />
        <Content>
          <TodoList /> 
       </Content>
      <ClearAllTodos />
      <Footer />
    </Provider>
  )
}
