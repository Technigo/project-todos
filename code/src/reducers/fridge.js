import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        { id: 1, name: 'Milk ', needsMore: true },
        { id: 2, name: 'Coffee ', needsMore: false },
        { id: 3, name: 'Butter ', needsMore: false }
    ]
}

export const fridge = createSlice({
    name: 'fridge',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // console.log('current state', state)
            // console.log('action', action)
            state.items.push({ id: Date.now(), name: action.payload })
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
            console.log('found', JSON.stringify(foundItem))

            if (foundItem) {
                foundItem.needsMore = !foundItem.needsMore
            }
        }
    }
})