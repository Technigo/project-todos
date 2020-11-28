App
import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Info } from './components/Info'
import { Form } from './components/Form'
import { List } from './components/List';
import { todos } from './reducers/todos';

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
    return (
        <Provider store={store}>
            <Info />
            <Form />
            <List />
        </Provider>
    );
};

