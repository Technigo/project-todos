import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';

import  { Header }  from 'components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//the first variable access the reducer data
//the second one connects the store to that reducer variable
const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
    
      
    <div>
   <Header />
     <TodoForm />
     <TodoList />

    </div>
    </Provider>
  )
}
