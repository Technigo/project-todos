import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import todos from './reducers/todos';

import Header from './components/Header';
import CompleteAll from './components/CompleteAll';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const reducer = combineReducers({
	todos: todos.reducer,
});

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState');
let persistedState = {};

if (persistedStateJSON) {
	persistedState = JSON.parse(persistedStateJSON);
}

// Create store with initial state
const store = createStore(reducer, persistedState);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
	localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

const MainContainer = styled.section`
	width: 355px;
	display: flex;
	text-align: center;
	justify-content: flex-start;
	flex-direction: column;
	padding: 5px;
	border-radius: 20px;
	background-color: #ffffff10;
	backdrop-filter: blur(12px);
	--webkit-backdrop-filter: blur(12px);
	margin-top: 25px;
	@media (min-width: 768px) {
		width: 500px;
	}
`;

export const App = () => {
	return (
		<MainContainer>
			<Provider store={store}>
				<Header />
				<CompleteAll />
				<AddTodo />
				<TodoList />
				<Footer />
			</Provider>
		</MainContainer>
	);
};
