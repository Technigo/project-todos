import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (store, action) => {
            console.log('action', action)
            const data = action.payload
        }
    },
})

export default todos 