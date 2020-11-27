import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { AddTodo }from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { TodoSummary } from './components/TodoSummary';
import { TodoItem } from 'components/TodoItem';
import { todos } from './reducers/todos';

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
    return (
        <Provider store={store}>
            <TodoSummary />
            <AddTodo />
            <TodoList />
            <TodoItem />
        </Provider>
    );
};


