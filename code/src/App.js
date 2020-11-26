import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { Tasks } from 'reducer/Tasks';

import { TaskHeader } from 'components/TaskHeader';
import { TaskInput } from 'components/TaskInput';
import { TaskList } from 'components/TaskList';

/* 
Telling redux about our different reducers and combining them reducers, you could have one or more, to be used to create the store in configure store.
Also the reducer is coming from the createSlice that creates a seperate field called ".reducer". In the store it's reducers.
*/
const reducer = combineReducers({
  tasks: Tasks.reducer
});

/* Store creation: Takes all the reducers (could be one or a few different js files) from the combineReducers and creating the store using the reducers and the retrieved state. Then you can access these different stores your components as being made accessible through the provider */
const store = configureStore({ reducer });

const MainArea = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justfiy-content: center;
    min-height: 525px;
    border: 1px solid blue;
`

export const App = () => {
  return (
    <Provider store={store}>
      <MainArea>
        <TaskHeader />
        <TaskInput />
        <TaskList />
      </MainArea>
    </Provider>
  )
};
