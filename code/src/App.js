import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';

import { Header } from './components/Header';
import { List } from './components/List';


const reducer = combineReducers({todos : todos.reducer});
const store = configureStore({ reducer });

export const App = () => {
  return (
    //We can only use useDispatch and useSelector inside of the provider.
   <Provider store={store}>
    <main> 
      <Header />
      <List />
    </main>
   </Provider>
  )
}
