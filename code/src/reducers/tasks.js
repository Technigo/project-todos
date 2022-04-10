import {createSlice} from '@reduxjs/toolkit'

const taskData = [
    { id: Date.now().toString(), content: '', tag: '', isDone: false},
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: taskData,

    reducers: {
        addTask: (state, action) => {
            state.push(action.payload) 
        } 
    }
})