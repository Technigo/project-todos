import { createSlice } from '@reduxjs/toolkit';

const taskData = [
    {
        id: 1, 
        text: 'Laundry', 
        complete: true
    },
    {
        id: 2, 
        text: 'Dinner', 
        complete: true
    },
    {
        id: 3, 
        text: 'Vacuum cleaning', 
        complete: false
    },
    {
        id: 4, 
        text: 'Prepare table', 
        complete: false
    },
    {
        id: 5, 
        text: 'Dessert', 
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
            // store.items = [...store.items, action.payload];
        },
    },
});

// export const { toggleItem } = tasks.actions;

export default tasks;
