import { createSlice } from '@reduxjs/toolkit'

//Keep the array in a separate variable for cleaner code
const data = [
    {
        id: 1,
        name: 'Do laundry',
        isChecked: false
    },
    {
        id: 2,
        name: 'Plan project',
        isChecked: false
    }, 
]


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
        }
    }
})

export default tasks;
