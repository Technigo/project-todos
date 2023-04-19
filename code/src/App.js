import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import Header from 'components/Header.js';
import AddTask from 'components/AddTask.js';
import TaskList from 'components/TaskList.js';
// import CompletedTask from 'components/CompletedTask.js';
import tasks from 'reducers/tasks.js';

export const App = () => {
  const reducer = combineReducers({ // Reducer/Function = () and inside {} indicating
    // this will be (a function as?) an object.
    // combineReducers exposes reducers from the slices to
    // the store in the provider. Creates a new object that meets
    // requirements for the configStore function. Processes
    // our reducer and spits out something that is suited for the configStore
    // function below.
    tasks: tasks.reducer // Object (task) as an argument.
  });
  // This object has properties which we will populate. Those properties will be
  // the name of our redux store slices (eg tasks).
  const store = configureStore({ reducer }); // Function
  // Here we create the store. Inside the store we provide the reducer.
  return (
    // Provider as a wrapper for app to function with redux store. Takes one prop = store.
    <>
      {/* <Header /> */}
      <Provider store={store}>
        <AddTask />
        <TaskList />
        {/* <CompletedTask /> */}
        Completed tasks
      </Provider>
    </>
  )
}

// One slice for the user and another for a specific, eg shopping cart, third slice
// for coloured themes, layout etc. Rule of thumb: If it still is within the same
// domain as as data stored inside of one slice, then no problem. You can start of
// with one slice. If it doesn't function well with other stuff, put them in another slice.