import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks'
import TaskList from 'components/TaskList'
import Layout from 'components/Layout'
import GlobalStyle from 'components/globalStyles'
import Footer from 'components/Footer';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <TaskList />
      </Layout>
      <Footer />
    </Provider>
  )
}