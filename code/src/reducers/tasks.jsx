import { createSlice } from '@reduxjs/toolkit';

const taskData = [
    {
        id: 1, 
        text: 'Celebrate friday', 
        complete: true
    },
    {
        id: 2, 
        text: 'Buy popcorn 🍿', 
        complete: false
    },
];

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskData,
    },

    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach((item) => {
                if (item.id === action.payload) {
                    item.complete = !item.complete;
                }
            });
        },
        removeItem: (store, action) => {
            store.items.splice(action.payload, 1);
        },
        addItem: (store, action) => {
            store.items.push(action.payload);
        },
    },
});


export default tasks;
