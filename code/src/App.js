import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore, compose } from "@reduxjs/toolkit";
import persistState from 'redux-localstorage';

import { Container, Footer } from "./styled-components";

import StartPage from "components/StartPage";

import tasks from "reducers/tasks";

const enhancer = compose(persistState());

const reducer = combineReducers({
	tasks: tasks.reducer,
});

const store = createStore(reducer, enhancer);

export const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<StartPage />
			</Container>
			<Footer>
				<p>Photo by &nbsp;
					<a href="https://unsplash.com/@evieshaffer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Evie S.
					</a>
				</p>
			</Footer>
		</Provider>
	);
};
