import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'tasks',
    initialState: {
     items: [],
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
        }

    }
})

export default tasks