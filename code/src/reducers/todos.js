import { createSlice } from "@reduxjs/toolkit"

export const todos = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, text: 'Laundry', complete: false },
        { id: 2, text: 'Gor for a walk', complete: true },
        { id: 3, text: 'Stretch', complete: true },
        { id: 4, text: 'Make dinner', complete: true },
    ]
})
    
