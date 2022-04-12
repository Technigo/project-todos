import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'

import todo from 'reducers/todo'

const reducer = combineReducers({
	todo: todo.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<main>
				<TodoList />
				<AddTodo />
			</main>
		</Provider>
	)
}
