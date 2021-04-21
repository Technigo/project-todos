import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faShoppingCart, faCalendarCheck, faBriefcase, faUser, faPalette, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

import { themes } from './reducers/themes';
import todos from 'reducers/todos';

import { Theme } from "./components/Theme";
import { WholePage } from "./components/WholePage";

library.add(faTrashAlt, faShoppingCart, faCalendarCheck, faBriefcase, faUser, faPalette, faLaptopHouse)

const reducer = combineReducers({
  themes: themes.reducer, 
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <WholePage />
      </Theme>
    </Provider>
  )
}
