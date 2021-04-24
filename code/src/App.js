import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import todos from 'reducers/todos'
import Header from 'components/Header'
import NewTodo from 'components/NewTodo'
import TodoList from 'components/TodoList'
import { AppContainer } from 'components/styled/home'

//Combining our reducers and saving them in a variable
const reducer = combineReducers({
  todos: todos.reducer
})

//created redux store from connected slices
const store = configureStore({ reducer })

export const App = () => {
//Pass already created Redux store into <Provider /> component,
//Store should always be passed as an argument 
  return (
    <Provider store={store}>   
      <AppContainer>
        <Header />
        <NewTodo />
        <TodoList />
      </AppContainer>
     </Provider>
  )
}
