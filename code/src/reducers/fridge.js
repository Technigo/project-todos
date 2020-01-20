import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
    name: 'fridge',
    initialState: {
        items: [
            { id: 1, name: 'Milk ', needsMore: false },
            { id: 2, name: 'Coffee ', needsMore: true },
            { id: 3, name: 'Butter ', needsMore: false },
        ]
    },
    reducers: {
        addItem: (state, action) => {
            // console.log('current state', state)
            // console.log('action', action)
            state.items.push({ id: Date.now(), name: action.payload })
        },
        toggleNeedsMore: (state, action) => {
            console.log(action)
        }
    }
})