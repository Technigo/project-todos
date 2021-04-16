import { createSlice } from '@reduxjs/toolkit'

//TASKLIST
export const todos  = createSlice ({
    name: 'todos',
    initialState: [
        { id: 1, text: 'bla bla bla 1', complete: true },
        { id: 2, text: 'bla bla 2', complete: true },
        { id: 3, text: 'bla 3', complete: false },
    ]
})