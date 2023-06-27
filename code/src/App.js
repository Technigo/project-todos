import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from 'components/Header';
import AllTasks from 'components/AllTasks';
import Footer from 'components/Footer';
import { tasks } from './reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  const store = configureStore({ reducer });
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <main>
          <Header />
          <AllTasks />
        </main>
        <Footer />
      </Provider>
    </>

  )
}
