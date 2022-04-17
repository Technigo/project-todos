import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: {
        toDoList: []
    },
    reducers: {
        toggleComplete: (store, action) => {
            store.toDoList.forEach((item) => {
                if (item.id === action.payload) {
                    item.isComplete = !item.isComplete
                }
            })
        },
        addItem: (store, action) => {
            store.toDoList.push(action.payload)
        },  
        deleteItem: (store, action) => {
            store.toDoList.splice(action.payload, 1)
        },
        removeAll: (store, action) => {
            store.toDoList = []
        },
    }
})

export default todos;