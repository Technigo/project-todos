import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos.js'
import { TodoList } from './components/TodoList.js'

//Make redux aware of the reducer
const reducer = combineReducers({ todos: todos.reducer })

//Create the store with the reducer object
const store = configureStore({ reducer })

export const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}