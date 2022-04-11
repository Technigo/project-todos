import { createSlice } from '@reduxjs/toolkit';

//This is the list with todos

export const list = createSlice({
    name: 'list' ,
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const excistingTodo = state.todos.find((todo) => todo.id === action.payload.id)

            if (excistingTodo) {
                excistingTodo.quantity += 1
            } else {
                state.todos.push ({ ...action.payload, quantity: 1 })
            }
        },
        removeTodo: (state, action) => {
            const excistingTodo = state.todos.find((todo) => todo.id === action.payload.id)

            if (excistingTodo && excistingTodo.quantity === 1) {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            } else if (excistingTodo) {
                excistingTodo.quantity -= 1
            }
        }
    }
})