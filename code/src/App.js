import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'


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
    <ToDoList />
      </Provider>
  )
}
