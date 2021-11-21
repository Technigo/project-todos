//import react components

import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'


//import react reducers
import todos from './reducers/todos'


//import components
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Header from 'components/Header'

import './App.css'

const reducer = combineReducers({
	todos: todos.reducer,
});

const store = configureStore({ reducer })

export const App = () => {

	return (
		<Provider store={store}>
      <main className="app">
		  	  <Header />
			  <TodoList />
			  <AddTodo />
      </main>
		</Provider>
	)
}
