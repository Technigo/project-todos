import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { name, category, dueDate } = action.payload
            state.items.push({ id: Date.now(), name, category, dueDate })
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        removeAll: (state, action) => {
            state.items = []
        },
        toggleNeedsMore: (state, action) => {
            console.log(action.payload)
            const foundItem = state.items.find((item) => item.id === action.payload)

            if (foundItem) {
                foundItem.needMore = !foundItem.needsMore
            }
        },
    },
})