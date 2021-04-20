

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {

        addTodoItem: (store, action) => {
            const newTodo = {
                id: Math.max(...store.items.map(item => item.id)) + 1,
                text: action.payload,
                isComplete: false,
                createdDate: Date.now(),
            };

            const newTodoList = [...store.items, newTodo];

            store.items = newTodoList;
        },

        toggleComplete: (store, action) => {
            const updatedItems = store.items.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }                   
                } else {
                    return todo;

                }
            });
            store.items = updatedItems;
        },     
        
        removeItem: (store, action) => {
            const todoId = action.payload;
            const filteredList = store.items.filter(item => item.id !== todoId);
            store.items =filteredList;
        }
    },
});