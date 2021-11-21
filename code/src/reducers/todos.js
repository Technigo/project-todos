import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (store, action) => {
            console.log('store', store)
            console.log('action', action)
        }
    },
})

export default todos 