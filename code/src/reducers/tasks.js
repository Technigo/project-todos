import { createSlice } from '@reduxjs/toolkit'

const data = [

    {
    id: "gjkfhgkj938",
    name: "Task 1",
    isDone: false,
    },
    { 
    id: "gjkfhg33989",
    name: 'Task 2',
    isDone: false
    },
]

const tasks = createSlice({
name: 'tasks',
initialState: {
    items: data,
},
    reducers: {
        toggleItem: (store, action) => {
        store.items.forEach(item => {
            if (item.id === action.payload) {
                item.isDone = !item.isDone
            }
        })
        }
    },
})

export default tasks