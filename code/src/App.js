import React from 'react';
import { Provider } from 'react-redux'; 
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from './reducers/todos'; //our slice

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

//app.js are the origin component of our app.

const reducer = combineReducers({ //a varibale that collects all of our slices
	todos: todos.reducer, //here we specify all our slices
});

const store = configureStore({ reducer }); //reducer is the property that configuterStore expects from us

export const App = () => {
	return (
		//Our components
		<Provider store={store}> 
			<AddTodo />
			<TodoList />
		</Provider>
	);
};
