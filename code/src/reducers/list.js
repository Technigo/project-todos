import { createSlice } from '@reduxjs/toolkit';

//The list with todos
export const list = createSlice({
    name: 'list' ,
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (store, action) => {
            store.todos.push(action.payload); 
        },
        removeTodo: (store, action) => {
            store.todos.splice(action.payload, 1)
            
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
