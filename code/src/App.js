import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';


import TodoList from './components/TodoList.js';

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
     <TodoList></TodoList>
    </div>
    </Provider>
  )
}
