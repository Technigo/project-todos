import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Tasks from 'reducers/Task';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from 'components/Header';

export const App = () => {
  const reducer = combineReducers({
    tasks: Tasks.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <div className="bg-white flex justify-center flex-col items-center py-10 px-6 md:px-16 mt-16 rounded-[30px] shadow-xl ">
          <Header />
          <AddTask />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}
