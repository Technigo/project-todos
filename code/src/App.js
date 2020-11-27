import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

// Reducers
import { todos } from './reducers/todos';

// Components
import { ListOfTodos } from './components/ListOfTodos';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewTodo } from './components/NewTodo';

import { AddTaskButton, BackgroundLayer } from './styling/GlobalStyling';
const reducer = combineReducers({
  todos: todos.reducer,
});

// New storage
const persistedStateJSON = localStorage.getItem('reduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
// ----------------------------------------------------------------

export const App = () => {
  const [addTaskVisible, setAddTaskVisible] = useState(false);

  return (
    <Provider store={store}>
      <AddTaskButton onClick={() => setAddTaskVisible(true)}>+</AddTaskButton>
      <Header />
      {addTaskVisible && (
        <>
          <BackgroundLayer></BackgroundLayer>
          <NewTodo setAddTaskVisible={setAddTaskVisible} />
        </>
      )}
      <ListOfTodos setAddTaskVisible={setAddTaskVisible} />
      <Footer />
    </Provider>
  );
};
