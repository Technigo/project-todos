import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'components/Reducers/tasks'
import AddTasks from 'components/AddTasks'
import { Footer } from 'components/Footer'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
// import { Footer } from './components/Footer'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <section className="main-wrapper">
        <Header />
        <AddTasks />
        <TaskList />
        <Footer />
      </section>
    </Provider>
  );
}
