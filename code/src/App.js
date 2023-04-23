import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { NoteList } from 'components/NoteList';
import { AddNote } from 'components/AddNote';
import { notereminder } from 'reducers/reminders'
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { TotalCompleteItems } from 'components/Counter';
import { MainBox } from './components/Styling/GlobalStyle'

export const App = () => {
  const reducer = combineReducers({
    notes: notereminder.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <MainBox>
        <Header />
        <AddNote />
        <TotalCompleteItems />
        <NoteList />
        <Footer />
      </MainBox>
    </Provider>
  );
}
