import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from 'components/Header';
import TaskListHaveTos from 'components/TaskListHaveTos';
import TaskListShouldDos from 'components/TaskListShouldDos';
import TaskListWontDos from 'components/TaskListWontDos';
import GlobalStyling from 'styling/GlobalStyling';
import AddNewTask from 'components/AddNewTask';
import tasksWonts from 'reducers/tasksWonts';
import tasksShoulds from 'reducers/tasksShoulds';
import tasks from './reducers/tasks';

/* const reducer = combineReducers({
  tasks: tasks.reducer
}) */

/* const store = configureStore({ reducer }) */

export const App = () => {
/*   const reducer = combineReducers({
    pokemons: pokemons.reducer
  }); */

  const reducer = combineReducers({
    tasks: tasks.reducer,
    tasksShoulds: tasksShoulds.reducer,
    tasksWonts: tasksWonts.reducer
  });

  const store = configureStore({
  /*     reducer; /* Same as reducer: reducers */
    reducer
  });
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyling>
        <TaskListHaveTos />
        <TaskListShouldDos />
        <TaskListWontDos />
      </GlobalStyling>
      <AddNewTask />
    </Provider>
  )
}
