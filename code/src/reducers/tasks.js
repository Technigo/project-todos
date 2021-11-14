import { createSlice } from '@reduxjs/toolkit'

const taskData = [
    { id: 1, text: 'Make a coffee', complete: true },
    { id: 2, text: 'Sit and procrastinate', complete: true },
    { id: 3, text: 'Think a little more about coding', complete: true },
    { id: 4, text: 'Eat a biscuit', complete: false }
]

export const tasks = createSlice({
    name:'tasks',
    initialState: taskData
})