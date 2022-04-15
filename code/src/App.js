import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { combineReducers, createStore } from "@reduxjs/toolkit";

import { Container, Footer } from "./styled-components";

import StartPage from "components/StartPage";
import AddTask from "components/AddTask";

import tasks from "reducers/tasks";


const reducer = combineReducers({
	tasks: tasks.reducer,
});

const store = createStore(reducer);

export const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<BrowserRouter>
				<Routes>
					<Route path="/" exact
						element={<StartPage/>}
					/>
					<Route path="/addtask" exact
						element={<AddTask/>}
					/>
					<Route path='*' element={<Navigate to="/404" replace/>}/>
				</Routes>
				</BrowserRouter>
			</Container>
			<Footer>
				<p>Photo by <a href="https://unsplash.com/@evieshaffer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Evie S.</a></p>
			</Footer>
		</Provider>
	);
};
