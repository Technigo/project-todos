import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NeedToDoRed } from 'reducers/NeedToDoRed';
import { NeedToDos } from 'components/NeedToDos';
import { WantToDoRed } from 'reducers/WantToDoRed';
import { WantToDos } from 'components/WantToDos';
import { AddTask } from 'components/AddTask';
import { AddIdea } from 'components/AddIdea';

export const App = () => {
  const reducers = combineReducers({
    NeedToDoRed: NeedToDoRed.reducer,
    WantToDoRed: WantToDoRed.reducer
  });

  const store = configureStore({
    reducer: reducers
  });

  return (
    <Provider store={store}>
      <AddTask />
      <NeedToDos />
      <AddIdea />
      <WantToDos />
    </Provider>
  );
}
