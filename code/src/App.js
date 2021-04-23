import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import todos from 'reducers/todos'
import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'

//Combining our reducers and saving them in a variable
const reducer = combineReducers({
  todos: todos.reducer
})

//creating our store 
const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>   {/* store should always be passed as an argument */}
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  )
}
