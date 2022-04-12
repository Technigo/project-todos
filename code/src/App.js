import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import  tasks  from './reducers/tasks'
import  TaskList from './components/TaskList';
import Header from './components/Header';
import AddTask from 'components/AddTask';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  width: 327px;

  @media (min-width:667px) {
    width: 500px; 
  }

`

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <AddTask />
        <TaskList />
      </Wrapper>
    </Provider>
  )
}
