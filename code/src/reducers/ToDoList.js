import { createSlice } from '@reduxjs/toolkit'

export const ToDoList = createSlice ({
    name: 'ToDoList',
    initialState: {
        tasks: []
    },
    reducers:{
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload, done: false })
             // id: Date.now() - use to get milliesconds as id on each post.
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        toggleDone: (state, action) => {
            console.log(action.payload)
            const foundTask = state.tasks.find(task => task.id === action.payload)

            if (foundTask) {
                foundTask.done = !foundTask.done
            }
        },
        clearList: (state, action) => {
            state.tasks = [] 
        }
    }

})