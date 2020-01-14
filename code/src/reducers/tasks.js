import { createSlice } from '@reduxjs/toolkit'

// const listOfTasks = [
//     { id: 1, text: 'Grocery Shoping', complete: true },
//     { id: 2, text: 'Call', complete: true },
//     { id: 3, text: 'Call 2 ', complete: true },
//     { id: 4, text: 'Pick upp laundry', complete: true },
//     { id: 5, text: 'Call 3', complete: true },
//     { id: 6, text: 'Post', complete: false }
// ]

export const tasks = createSlice({
    name: 'tasks',
    initialState:
    // listOfTasks,
    {
        //     //use this empty items/tasks/list array later when changing the state
        tasks: []
        //     // [
        //     //     { id: 1, text: 'Grocery Shoping', complete: true },
        //     //     { id: 2, text: 'Call', complete: true },
        //     //     { id: 3, text: 'Call 2 ', complete: true },
        //     //     { id: 4, text: 'Pick upp laundry', complete: true },
        //     //     { id: 5, text: 'Call 3', complete: true },
        //     //     { id: 6, text: 'Post', complete: false }
        //     // ]
    },

    reducers: {
        addTask: (state, action) => {
            console.log(action)
            const exsistingTask = state.tasks.find((item) => item.id === action.payload.id)

            if (exsistingTask) {
                //increment the quantity
                exsistingTask.quantity += 1
            } else {
                state.tasks.push({ ...action.payload, quantity: 1 })
            }
        },
        // this should effect the checkboxes?
        removeTask: (state, action) => {
            const exsistingTask = state.tasks.find((item) => item.id === action.payload.id)
            if (exsistingTask && exsistingTask.quatity === 1) {
                state.tasks = state.tasks.filter((item) => item.id !== action.payload.id)
            } else if (exsistingTask) {
                exsistingTask.quatity -= 1
            }
        },
        // this should empty the array
        emptyTasks: (state, action) => {
            console.log(action)
            const exsistingTask = state.tasks.find((item) => item.id === action.payload.id)
            if (exsistingTask && exsistingTask.quatity > 1) {
                state.tasks = state.tasks.filter((item) => item.id !== action.payload.id)
                //remove the item entirely?
            } else if (exsistingTask) {
                exsistingTask.quatity -= 1
            }
        },
    }

})