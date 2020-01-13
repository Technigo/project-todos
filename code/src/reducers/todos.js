import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, text: 'Shop food', complete: true },
        { id: 2, text: 'Go to the gym', complete: true },
        { id: 3, text: 'Walk the dog', complete: true },
        { id: 4, text: 'Create a todo app', complete: false },
    ]
})
