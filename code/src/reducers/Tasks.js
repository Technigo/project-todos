import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice ({
    name: 'tasks',
    initialState: {
        taskList: [],
    },
    //Create the reducer/methods later on after the store are connected and components are created.
    reducers: {}
})

export default tasks;
