import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'; 


//import components 
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header'; 

//import reducer that is required for the store
import todos from './reducers/todos';

// combine reducers
const reducer = combineReducers({
  todos: todos.reducer, 
});

const store = configureStore({ reducer: reducer })


// mounting the components
export const App = ()=> {
  return (
   <Provider store={store}> 
                <Header/>
                <AddTodo/>
              <TodoList/>
		</Provider>
  );
};

