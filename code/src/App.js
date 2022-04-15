import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, configureStore } from '@reduxjs/toolkit'

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
// const store = configureStore({ reducer })

store.subscribe(() => {
	localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
	return (
		<Provider store={store}>
			<section className='app-wrapper'>
				<Header />
				<SelectStart />
			</section>
		</Provider>
	)
}
