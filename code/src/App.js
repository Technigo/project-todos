import React from 'react';
// injection react redux into app componenet 
// importing Provider componenet from redux
import { Provider } from 'react-redux';
// importing those two functions from redux 
import { combineReducers, createStore } from '@reduxjs/toolkit';
// importing slice/reducer
import todos from './reducers/todos';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
//import TodoSummary from './components/TodoSummary';
import FinishedTodo from './components/FinishedTodo';
import ClearAllButton from './components/ClearAllButton';

/* SETTING THE STORE HERE */
// putting all slices/reducers in one box here
const reducer = combineReducers({
	// here we specife all of the slices that we need to combine
	// in this project we have one slice
	todos: todos.reducer
});

// set up for local store 
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

// reducer: reducer; ES6 short syntas is reducer because the same name of variable and value
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});


// on line 11 - 19 we prepade our bag with slices 
// now we need to add this bag to the application 

export const App = () => {
  return (
    <Provider store={store}>
		<main className="main-content">
			<Header  />
			<AddTodo  />
			{/*<TodoSummary  />*/}
			<TodoList  />
			<FinishedTodo />
			<ClearAllButton />
		</main>
	</Provider>
  )
};

// you dont have remember syntax
// you have to understand the logic, the flow 

// slic is an object that contains function and 
// those functions are reducers 
