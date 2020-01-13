import { createSlice } from '@reduxjs/toolkit'

export const totalTodos = createSlice({
    name: 'totalTodos',
    initialState: {
        items: []

    }
})