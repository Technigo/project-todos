import React from 'react';
import Typography from "@material-ui/core/Typography";
import "./app.css";

import { Provider } from './store';
import TodoList from './TodoList';

export const App = () => (
  <Provider className="App">
     <Typography >
        <h1>What to-do?! 🤷🏻‍♀️</h1>
      </Typography>
      <Typography>
        <h2>Make a list!</h2>
        </Typography>
    <TodoList />
  </Provider>
);