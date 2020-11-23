import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const taskList = [
    {id: 1, text: 'my first todo', complete: true},
    {id: 2, text: 'my second todo', complete: false},
    {id: 3, text: 'my third todo', complete: true},
    {id: 4, text: 'my fourth todo', complete: false}
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskList},
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload);
        },

        removeTask: (state, action) => {
            state.items.pop();
        }
    }
})