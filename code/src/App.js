import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'components/Reducers/tasks'
import { Header } from './components/Header'
import { AddTasks } from './components/AddTasks'
import { TaskList } from './components/TaskList'
import { Footer } from './components/Footer'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <p>hello world</p>
        <Header />
        <AddTasks />
        <TaskList />
        <Footer />
      </div>
    </Provider>
  );
}
