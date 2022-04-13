import { createSlice } from '@reduxjs/toolkit'

const data = [
    { id: 1, text: 'Clean', complete: false },
    { id: 2, text: 'Wash', complete: false },
    { id: 3, text: 'Go to riding school', complete: false },
    { id: 4, text: 'Create todo app', complete: false },
]

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: data,
    },
    reducers: {
        toggleItem: (store, action) => {
            console.log('store', store);
            console.log('action', action);
            
            store.items.forEach(item => {
                if (item.id === action.payload) {
                    item.complete = !item.complete
                }
            })
        },
        deleteItem: (store,action) => {
            store.items.splice(action.payload, 1)
        },
        addItem: (store, action) => {
            store.items.push(action.payload)
        }
    }
})

export default tasks
