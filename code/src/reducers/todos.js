import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (store, action) => {
            console.log('action', action)
            const data = action.payload
            // - Mutability
            // store.items.push(data)
            // - Immutability
            // store.items = [...store.items, data]
            const newTodo = {
                id: uniqid(),
                text: data,
                isComplete: false,
            }
            store.items = [...store.items, newTodo]
        }
    },
})

export default todos