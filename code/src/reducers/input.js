import { createSlice } from '@reduxjs/toolkit'



export const input = createSlice({
    name: 'add-todo',
    initialState: {},
    reducers: {
        message: (state, action) => {
            console.log('hallo input')
        }
    }
})