import {createSlice} from '@reduxjs/toolkit'

export const todos = createSlice({
    name:'todos',
    initialState: {
        username: 'Bam',
        items: [
            {
                id: 1, 
                text: 'the first',
                category: 'task',
            },
            {
                id: 2, 
                text: 'the secord',
                category: 'task',
            },
            {
                id: 3, 
                text: 'the third',
                category: 'task',
            },
        ]
    }, 
    reducers: {
        removeOne: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            // const exisitingProduct = state.items.find((item) => item.id === action.payload.id)
            // if (exisitingProduct) {
            //     exisitingProduct.quantity -= 1
            // }
            // state.items.pop(); //bad way
        },
        addTask: (state, action) => {
            state.items.push({...action.payload})
        },
        removeAll: (state, action) => {
            state.items = []
        }
    }
})