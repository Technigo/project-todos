import React from 'react';
import { Provider } from 'react-redux';
/* import { configureStore, combineReducers } from '@reduxjs/toolkit'; */

import { TodoList } from './Components/TodoList';
import { Header } from 'Components/Header';
import { Footer } from 'Components/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};
