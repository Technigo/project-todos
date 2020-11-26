import { createSlice } from "@reduxjs/toolkit"

export const todos = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, text: 'Laundry', complete: true },
        { id: 2, text: 'Gor for a walk', complete: false },
        { id: 3, text: 'Stretch', complete: false },
        { id: 4, text: 'Make dinner', complete: false },
    ]
})
    
