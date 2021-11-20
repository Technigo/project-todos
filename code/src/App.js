import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

// Importing components & reducers
import { todos } from "./reducers/todos";
import { Container } from "./components/Container";

const reducer = combineReducers({
	todos: todos.reducer,
});

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem("todos");
let persistedState = {};

if (persistedStateJSON) {
	persistedState = JSON.parse(persistedStateJSON);
}

// Create store with initial state
const store = createStore(
	reducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store the state in localstorage on Redux state change
store.subscribe(() => {
	localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export const App = () => {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
	);
};
