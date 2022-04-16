import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import { ButtonSwitch } from 'components/Styling'
import Header from 'components/Header'
import SelectStart from 'components/SelectStart'

import todo from 'reducers/todo'

const reducer = combineReducers({
	todo: todo.reducer,
})

//________Handle Local state________
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
	const [themeDark, setThemeDark] = useState(true)

	const onSwitchTheme = () => {
		setThemeDark(!themeDark)
	}

	return (
		<Provider store={store}>
			<section className={themeDark ? 'app-wrapper dark' : 'app-wrapper light'}>
				<ButtonSwitch onClick={onSwitchTheme}>{themeDark ? 'Light mode' : 'Dark mode'}</ButtonSwitch>
				<Header />
				<SelectStart />
			</section>
		</Provider>
	)
}
