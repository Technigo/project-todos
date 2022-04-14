import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import Header from 'components/Header'
import SelectStart from 'components/SelectStart'

import todo from 'reducers/todo'

const reducer = combineReducers({
	todo: todo.reducer,
})

const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
	persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
	localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<SelectStart />
		</Provider>
	)
}
