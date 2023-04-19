import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/todos'
import { ToDoLists } from 'components/toDoList';
import { Header } from './components/header'
import { Footer } from './components/footer'
import { NewToDo } from './components/newToDo'
import './index.css'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  })
  return (
    <div className="app-container">
      <Provider store={store}>
        <Header />
        <NewToDo />
        <ToDoLists />
        <Footer />
      </Provider>
    </div>
  );
}

