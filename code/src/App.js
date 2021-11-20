import React from 'react'; 
import { Provider } from "react-redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from './reducers/todos'; //re-named this reducer to start with lower-case
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

//this is the standard setup for reducers, to combine ALL the slices combined: 
const reducer = combineReducers({ 
  todos: todos.reducer,
});

const store = configureStore({ reducer }); //this is the same as: {reducer: reducer}

//inside of this function, is where the components are mounted:
export const App = () => {
  return (
    <Provider store={store}>  
      <TodoList />
      <AddTodo /> 
    </Provider>
  )
}
