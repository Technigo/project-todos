import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, text: 'Watch video on actions & reducers', complete: true },
        { id: 2, text: 'Follow Redux codealong', complete: true },
        { id: 3, text: 'Fork weekly assignment', complete: true },
        { id: 4, text: 'Create a todo app', complete: false }
    ]
})