import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

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

//New store code
// 1. Retrieve the local storage and use it as the initial state
// PersistedStateJSON will get a text value from localstorage in the browser with a key called reduxstate (can be called whatever you want). Just going to hold values. If the persistedStateJSON exists in the localStorage then we'll assign that to the variable persistedState
const persistedStateJSON = localStorage.getItem('todos-reduxstate');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// 2. Create the store using the initial state
// Then we pass in the value that's in the persistedStore, which is the initialstate, and the reducer to the creatStore function to create the store. This will be different from the initalstate specified in the redux store. 
const store = createStore(reducer, persistedState, window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());

// 3. Store the state in localstorage on any redux state change
// Now we're telling the store to subscribe to every event that happens in the store. After the actions happen then the state will be written out to local storage and the JSON.stringify will return it as a readable string for us to access in the provider below
store.subscribe(() => {
  localStorage.setItem('todos-reduxstate', JSON.stringify(store.getState()));
});

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
