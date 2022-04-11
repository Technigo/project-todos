import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {compose, createStore} from 'redux';
// import persistState from 'redux-localstorage';


import tasks from "reducers/tasks";
import TaskList from "components/TaskList";

// const enhancer = compose(
// //   /* [middlewares] */,
// 	persistState(/*paths, config*/),
// )

// const store = createStore(/*reducer, [initialState]*/, enhancer)


const reducer = combineReducers({
	tasks: tasks.reducer,
});

const store = configureStore({
	reducer,
});

export const App = () => {
	return (
		<Provider store={store}>
		<TaskList />
		</Provider>
	);
};
