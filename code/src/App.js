import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import Header from 'components/header';
import todos from 'reducers/todos';
import ToDoList from 'components/todolist';

const reducer=combineReducers({
  todos:todos.reducer,
});


const store= configureStore({
  reducer: reducer
})

export const App = () => {
  return (
    <Provider store={store}> 
<Header />
    <ToDoList />
      </Provider>
  )
}
