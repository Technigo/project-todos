import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {id: 1, name: 'Milk', needsMore: false, category: 'drink'},
            {id: 2, name: 'Butter', needsMore: true, category: 'food'},
            {id: 3, name: 'Cheese', needsMore: false, category: 'food'},
        ],
    },
    reducers: {
        addItem: (state, action) => {
            const { name, category, dueDate } = action.payload
            state.items.puch({ id: Date.now(), name, category, dueDate })
        },
        removeItem: (state, action) => {
            state.item = state.items.filter((item) => item.id !== action.payload)
        },
        removeAll: (state, action) => {
            state.item = []
        },
        toggleNeedsMore: 
    }
})