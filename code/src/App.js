import React from 'react';
///import Typography from "@material-ui/core/Typography";
import "./app.css";

import { Provider } from './store';
import TodoList from './TodoList';

export const App = () => (
  <Provider className="App">
     <typography >
        <h1>What to-do?! <span role="img" aria-label="wondering girl">🤷🏻‍♀️</span></h1>
      </typography>
      <typography>
        <h2>Make a list!</h2>
        </typography>
    <TodoList />
  </Provider>
);