import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
    name: 'list',
    initialState: {
        tasks:[]
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), name: action.payload })
        }, 
        removeTask: (state, action) => {
            // find task & filter out
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)  
        },
        markDone: (state, action) => {
            // identify id
            const foundTodo = state.tasks.find((task) => task.id === action.payload)
            // toggle done / not done
            if (foundTodo) {
                foundTodo.done = !foundTodo.done
            }
        },
        removeAll: (state) => {
            state.tasks = []
            }
    }
})