import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from 'components/Header';
import TaskListHaveTos from 'components/TaskListHaveTos';
import TaskListShouldDos from 'components/TaskListShouldDos';
import TaskListWontDos from 'components/TaskListWontDos';
import TaskListWantTos from 'components/TaskListWantTos';
import GlobalStyling from 'styling/GlobalStyling';
import tasksWonts from 'reducers/tasksWonts';
import tasksWants from 'reducers/tasksWants';
import tasksShoulds from 'reducers/tasksShoulds';
import Footer from 'components/Footer';
import tasks from './reducers/tasks';

/* const reducer = combineReducers({
  tasks: tasks.reducer
}) */

/* const store = configureStore({ reducer }) */

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer,
    tasksShoulds: tasksShoulds.reducer,
    tasksWonts: tasksWonts.reducer,
    tasksWants: tasksWants.reducer
  });

  const store = configureStore({
  /*     reducer; /* Same as reducer: reducers */
    reducer
  });
  return (
    <Provider store={store}>
      <GlobalStyling>
        <section>
          <Header />
          <div className="outer-div">
            <TaskListHaveTos />
            <TaskListShouldDos />
            <TaskListWantTos />
            <TaskListWontDos />
          </div>
          <Footer />
        </section>
      </GlobalStyling>

    </Provider>
  )
}
