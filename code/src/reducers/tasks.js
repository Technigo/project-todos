import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'tasks',
    initialState: {
     items: [
        { id: 1, text: 'Watch video on actions & reducers', complete: true },
        { id: 2, text: 'Follow Redux codealong', complete: true },
        { id: 3, text: 'Fork weekly assignment', complete: true },
        { id: 4, text: 'Create a todo app', complete: false }
        ],
    },
    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach(item => {
                if(item.id === action.payload) {
                    item.complete = !item.complete
                }
            })
        },

        deleteItem: (store, action) => {
            store.items.splice(action.payload, 1)
        },

        addItem: (store, action) => {
           store.items.push(action.payload)
        },
    }
})

export default tasks