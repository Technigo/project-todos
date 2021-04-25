import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },
    reducers: {
        toggleFinished: (store, action) => {
            const updatedItems = store.items.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isComplete: !task.isComplete
                    }
                } else {
                    return task;
                }
            });
            store.items = updatedItems;
        },
        addTask: (store, action) => {
            const { id, description, isComplete=false } = action.payload;
            store.items = [{id, description, isComplete}, ...store.items];
        },
        removeTasks: (store, action) => {
            store.items = []
        },
        removeTask: (store, action) => {
            store.items = store.items.filter(task => task.id !== action.payload)
        }
    }
});

export default tasks;