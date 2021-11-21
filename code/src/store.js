import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todo } from './Reducers/todo';

const reducer = combineReducers({
    todo: todo.reducer
})

export const store = configureStore({ reducer: reducer })
