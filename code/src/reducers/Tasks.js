import { createSlice } from '@reduxjs/toolkit'

//Keep the array in a separate variable for cleaner code
const data = []


const tasks = createSlice ({
    name: 'tasks',
    initialState: {
        taskList: data
    },
    reducers: {
        toggleTodo: (store, action) => {
            store.taskList.forEach((task) => {
                if (task.id === action.payload) {
                    task.isChecked = !task.isChecked
                }
            })
        },

        deleteTodo: (store, action) => {
            store.taskList.splice(action.payload, 1)
        },

        addTodo: (store, action) => {
            store.taskList.push(action.payload)
        }
    }
})

export default tasks;
