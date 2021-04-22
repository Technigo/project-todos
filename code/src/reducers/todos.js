

import { createSlice } from "@reduxjs/toolkit";

import uniqid from 'uniqid'

const initialState = {
    items: []
};

// const initialItems = localStorage.getItem('todos')
//     ? JSON.parse(localStorage.getItem('todos'))
//     : [];


export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {

        addTodoItem: (store, action) => {
            const newTodo = {
                id:uniqid(),          
                text: action.payload,
                isComplete: false,
                createdDate: Date.now(),
            };

            const newTodoList = [...store.items, newTodo];

            store.items = newTodoList;
        },

            //IMMUTABILITY, RETURNS A NEW ARRAY
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
        
        removeTodo: (store,action) => {
            const decreasedItems = store.items.filter(todo => todo.id !== action.payload);
            store.items = decreasedItems;
        }
    },
});