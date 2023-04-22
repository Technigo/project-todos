import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/task';
import Header from './Header';
import TaskList from './TaskList';
// import Hero from './HeroStyling';
// import backgroundImage from '../assets/HeroBackground.jpg';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const Main = () => {
  return (
    <Provider store={store}>
      {/* <Hero backgroundImage={backgroundImage} /> */}
      <Header />
      <TaskList />
    </Provider>
  )
}