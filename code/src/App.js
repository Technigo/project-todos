import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { Container } from "./styled-components";

import StartPage from "components/StartPage";
import AddTask from "components/AddTask";

import tasks from "reducers/tasks";


const reducer = combineReducers({
	tasks: tasks.reducer,
});

const store = configureStore({
	reducer,
});

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
			{/* <Footer/> */}
		</Provider>
	);
};
