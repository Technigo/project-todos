/* eslint-disable max-len */
/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (store, action) => {
            store.items = [...store.items, action.payload];
        },

        toggleTask: (store, action) => {
            store.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.isChecked = !item.isChecked;
                }
            })
        },

        deleteTask: (store, action) => {
            const updatedItems = store.items.filter((item) => item.id !== action.payload.id);
            return { ...store, items: updatedItems };
        },
        clearTasks: () => {
            return initialState;
        }
    }
});

export default tasks;