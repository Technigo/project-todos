import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Info } from './components/Info'
import { Form } from './components/Form'
import { List } from './components/List';
import { RemoveAll } from './components/RemoveAll';
import { todos } from './reducers/todos';

const reducer = combineReducers({ todos: todos.reducer });

const persistedState = localStorage.getItem("reduxState")
? JSON.parse(localStorage.getItem("reduxState"))
: {};

const store = configureStore({
reducer,
preloadedState: persistedState,
});

store.subscribe(() => {
localStorage.setItem("reduxState", JSON.stringify(store.getState()));
}); 

export const App = () => {
    return (
        <Provider store={store}>
            <Info />
            <Form />
            <List />
            <RemoveAll />
        </Provider>
    );
};
