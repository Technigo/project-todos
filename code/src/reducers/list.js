import { createSlice } from '@reduxjs/toolkit';

//This is the list with todos

export const list = createSlice({
    name: 'list' ,
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (store, action) => {
            const excistingTodo = store.todos.find((todo) => todo.id === action.payload.id)

            if (excistingTodo) {
                excistingTodo.quantity += 1
            } else {
                store.todos.push ({ ...action.payload, quantity: 1 })
            }
        },
        removeTodo: (store, action) => {
            const excistingTodo = store.todos.find((todo) => todo.id === action.payload.id)

            if (excistingTodo && excistingTodo.quantity === 1) {
                store.todos = store.todos.filter((todo) => todo.id !== action.payload.id)
            } else if (excistingTodo) {
                excistingTodo.quantity -= 1
            }
        },
        toggleTodo: (store, action) => {
            store.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isCompleted = !todo.isCompleted
                }
            })
        }
    }
})

