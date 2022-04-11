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

const todos = createSlice ({
    name: 'tasks',
    initialState: [
        { id: 1, text: 'Work work work', complete: true },
        { id: 2, text: 'Watch Netflix', complete: true },
        { id: 3, text: 'Create a todo app', complete: true },
        { id: 4, text: 'Sing a beautiful song', complete: false },
    ]
})

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