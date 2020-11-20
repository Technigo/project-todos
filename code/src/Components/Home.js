import React from 'react'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from '../Reducers/todos.js'
import { TodoList } from './TodoList.js'


const reducer = combineReducers({ todos: todos.reducer})

const store = configureStore({ reducer })

export const Home = () => {

return (
    <Provider store={store}>
        <TodoList/>
    </Provider>
)
}