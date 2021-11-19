import React from 'react';
import { Provider } from 'react-redux'; 
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todos from './reducers/todos'; //our slice

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from 'components/Header';
import MainContainer from 'components/MainContainer';
import ClearAllButton from 'components/ClearAllButton';
import NoTodoLeft from  'components/NoTodoLeft';



//app.js are the origin component of our app.

const reducer = combineReducers({ //a varibale that collects all of our slices
	todos: todos.reducer, //here we specify all our slices
});


// set up for local store 
const preloadedStateJSON = localStorage.getItem('todosReduxState')
let preloadedState = {}

if (preloadedStateJSON) {
	preloadedState = JSON.parse(preloadedStateJSON) 
  }  

// reducer: reducer; ES6 short syntas is reducer because the same name of variable and value. //reducer is the property that configuterStore expects from us
const store = configureStore({ reducer, preloadedState })

//Store the state in localstorage, when Redux state changes
store.subscribe(() => {
	localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
  })


export const App = () => {
	return (
		//Our components
		<Provider store={store}> 
    		<MainContainer> 
    		<Header />
			<AddTodo />
			<TodoList />
			<ClearAllButton />
			<NoTodoLeft />
    		</MainContainer> 
			</Provider>
	);
};
