import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Tasks } from 'reducer/Tasks';
import { TaskHeader } from 'components/TaskHeader';
import { TaskInput } from 'components/TaskInput';
import { TaskList } from 'components/TaskList';
import { MainArea } from './styled-components/MainArea';

/* 
Telling redux about our different reducers and combining them reducers, you could have one or more, to be used to create the store in configure store.
Also the reducer is coming from the createSlice that creates a seperate field called ".reducer". In the store it's reducers.
*/
const reducer = combineReducers({
  tasks: Tasks.reducer
});

/* Store creation: Takes all the reducers (could be one or a few different js files) from the combineReducers and creating the store using the reducers and the retrieved state. Then you can access these different stores your components as being made accessible through the provider */
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <MainArea tabIndex="0">
        <TaskHeader />
        <TaskInput />
        <TaskList />
      </MainArea>
    </Provider>
  );
};
