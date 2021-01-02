import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import moment from 'moment';

const initialState = {
    items: [
        {id: uuid(), title:"Git and terminal", createdAt:'',isCompleted: true},
        {id: uuid(), title:"Groceries and Bolaget", isCompleted: false}
    ]
};

export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (store, action) => {
            const newItem = { 
                id: uuid(),
                title: action.payload,
                createdAt: moment(),
                isCompleted: false,       
            }

            const newItemsList = [...store.items, newItem];  
                store.items = newItemsList
        },

        editItem: (store, action) => {
            const filteredItems = store.items
            .filter(item => item.id !== action.payload)

            store.items = filteredItems
        },

        removeItem: (store, action) => {
            const filteredItems = store.items
            .filter(item => item.id !== action.payload);

            store.items = filteredItems;
        },

        removeAll: (store) => {
            store.items = []
        },

        toggleComplete: (store, action) => {
            const updatedArray = store.items.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    };
                } else {
                    return item;
                }
            });

            store.items = updatedArray;
        },
    },
});