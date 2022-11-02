import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskReducer from 'reducers/todos/taskSlice';
import filtersReducer from 'reducers/filters/filterSlice';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const App = () => {
  const reducer = combineReducers({
    tasks: taskReducer.reducer,
    filters: filtersReducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <main>
        <Header />
        <AddTask />
        <TaskList />
        <Footer />
      </main>
    </Provider>
  );
};
