import React from 'react';
import { Provider } from 'react-redux'; 
import { combineReducers, createStore } from '@reduxjs/toolkit';

import todos from './reducers/todos'; //our slice

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from 'components/Header';
import MainContainer from 'components/MainContainer';
// import Completed from 'components/CompletedTodos';

//app.js are the origin component of our app.

const reducer = combineReducers({ //a varibale that collects all of our slices
	todos: todos.reducer, //here we specify all our slices
});


// set up for local store 
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

// reducer: reducer; ES6 short syntas is reducer because the same name of variable and value. //reducer is the property that configuterStore expects from us
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

// const store = configureStore({ reducer }); 

export const App = () => {
	return (
		//Our components
		<Provider store={store}> 
    <MainContainer> 
      <Header />
			<AddTodo />
      {/* <Completed /> */}
			<TodoList />
      </MainContainer> 
		</Provider>
	);
};
