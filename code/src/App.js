import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { projects } from 'reducers/projects';
import { tasks } from 'reducers/tasks';
import { GlobalStyle } from 'reusable-components/GlobalStyle';
import { Main } from 'components/Main';
import Background from './assets/Background.svg';
import { Image } from './reusable-components/Background'

const reducer = combineReducers({
  // projects: projects.reducer,
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Image src={Background} alt="background" />
    <Main />
  </Provider>
);
