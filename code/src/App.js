import React from 'react';
import { Provider } from 'react-redux';
import { todos } from './reducers/todos';

import { combineReducers, createStore } from '@reduxjs/toolkit';

import { Header } from './components/Header';
import { List } from './components/List';

/*Old store*/ 
const reducer = combineReducers({todos : todos.reducer});
console.log({reducer});
//const store = configureStore({ reducer });

/*New store, local storage
1. try to retrieve the local storage and use as initial
2. create the store
3. store the state on any change
*/
const persistedStateJSON = localStorage.getItem("toDoReduxState");
let persistedState = {};
if(persistedStateJSON) {
  persistedState = JSON.parse(localStorage.getItem("toDoReduxState"));
}
const store = createStore(reducer, persistedState);
store.subscribe(()=> {
  localStorage.setItem("toDoReduxState", JSON.stringify(store.getState()))
} )


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
