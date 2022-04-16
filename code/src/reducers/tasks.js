import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
    },
    reducers: {
        toggleItem: (store, action) => {      
            store.items.forEach(item => {
                if (item.id === action.payload) {
                    item.complete = !item.complete
                }
            })
        },
        //Mutable reducer function to use splice and push but works since immer included in dependencies
        deleteItem: (store, action) => {
            store.items.splice(action.payload, 1)
        },
        addItem: (store, action) => {
            store.items.push(action.payload)
        },
        removeAll: (store) => {
            store.items = []
        }
    }
})

export default tasks
