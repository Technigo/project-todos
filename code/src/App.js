import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import styled from 'styled-components';
// import GlobalStyle from 'GlobalStyles';

import tasks from './reducers/tasks';
import AddTasks from 'components/AddTasks';
import TaskList from 'components/TaskList';
import Header from 'components/Header';

// Since exported default no {} around

//  by convention (a reducer is going to be all the slices combined to one box,
// since we only have one slice (tasks) we only put that one)
const reducer = combineReducers({
  tasks: tasks.reducer,
});
//  by convention
const store = configureStore({ reducer });
// ({ reducer: reducer }) but thanks to ES6 we only need to write one time since same name
// configureStore is the method, and after that is the method. Then reducer property is equal to reducer variable

const MainContainer = styled.section`
  border: 2px solid blue;
`;

export const App = () => {
  return (
    // QUESTION; why do we need the anonymous tags?
    <>
      {/* <GlobalStyle /> */}
      <MainContainer>
        <Provider store={store}>
          <Header />
          <AddTasks />
          <TaskList />
        </Provider>
      </MainContainer>
    </>
    // provider is our wrapper like browser router before
    //  prop equal to value store <Provider store={store}>
  );
};
