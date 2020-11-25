import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { Header } from 'components/Header';
import { TaskList } from 'components/TaskList';
import { Footer } from 'components/Footer';

import { tasks } from 'reducers/tasks';

// Old store code
const reducer = combineReducers({
  tasks: tasks.reducer
});

// Setup of the store - with local storage
// Retrieves the localStorage and use it as our initial state
const persistedStateJSON = localStorage.getItem('task-list');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// 2. Create the store using initital state
const store = createStore(
  reducer, 
  persistedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 3. Store the state in localStorage on any redux state change
store.subscribe(() => {
  localStorage.setItem('task-list', JSON.stringify(store.getState()));
});


export const App = () => {
  return (
    <MainContainer>
      <Header />
      <Provider store={store}> 
        <TaskList />
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
  max-width: 450px;
  height: auto;
  min-height: 85vh;
  border-radius: 8px;
  border: 1px solid #BBE1C3;
  background: #fff;
`;
