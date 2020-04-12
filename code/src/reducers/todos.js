import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        { id: 1, name: 'Fix the car', ifChecked: false },
        { id: 2, name: 'Pay bills', ifChecked: true },

    ]
}

export const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push({ id: Date.now(), name: action.payload })
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        removeAll: (state, action) => {
            state.items = []
        },
        toggleIfChecked: (state, action) => {
            console.log(action.payload)

            const foundItem = state.items.find((item) => item.id === action.payload)

            if (foundItem) {
                foundItem.ifChecked = !foundItem.ifChecked
            }
        }
    }

})