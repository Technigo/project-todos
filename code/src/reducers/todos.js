import { createSlice } from "@reduxjs/toolkit";

const data = []

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: data,
    },
    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach(item => {
                if (item.id === action.payload) {
                    item.isComplete = !item.isComplete;
                }
            })
        },
        deleteItem: (store, action) => {
            store.items.splice(action.payload, 1);
        },
        addItem: (store, action) => {
            store.items.push(action.payload);
        }
    },
});


export default todos;