import React, { useState } from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { Header } from 'components/Header';
import { FilterButton } from 'components/FilterButton';
import { TaskList } from 'components/TaskList';
import { Footer } from 'components/Footer';

import { tasks } from 'reducers/tasks';

const reducer = combineReducers({
  tasks: tasks.reducer
});

// Retrieves the localStorage and use it as the initial state
const persistedStateJSON = localStorage.getItem('task-list');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Creates the store using initital state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Stores the state in localStorage on any change in the redux state 
store.subscribe(() => {
  localStorage.setItem('task-list', JSON.stringify(store.getState()));
});


export const App = () => {
  const [completed, setCompleted] = useState(false);
  const [uncompleted, setUnCompleted] = useState(false);
  const [all, setAll] = useState(true);

  return (
    <MainContainer>
      <Header />
      <Provider store={store}>
        <FilterButton completed={completed} uncompleted={uncompleted} all={all} setCompleted={setCompleted} setUnCompleted={setUnCompleted} setAll={setAll} />
        <TaskList completed={completed} uncompleted={uncompleted} all={all} />
      </Provider>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 20px 10px;  
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 650px;
  height: auto;
  min-height: 85vh;
  border-radius: 8px;
  border: 1px solid #BBE1C3;
  background: #fff;
`;
