import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faShoppingCart, faCog, faHeart, faListUl, faCheckCircle, faBriefcase, faUser, faPalette, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

import { themes } from './reducers/themes';
import todos from 'reducers/todos';

import { Theme } from "./components/Theme";
import { TodoPage } from "./components/TodoPage";

library.add(faTrashAlt, faShoppingCart, faCog, faHeart, faListUl, faCheckCircle, faBriefcase, faUser, faPalette, faLaptopHouse)

const reducer = combineReducers({
  themes: themes.reducer, 
  todos: todos.reducer
});

const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore( 
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})


export const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <TodoPage />
      </Theme>
    </Provider>
  )
}
