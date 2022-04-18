import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid"

// const data = [
//     { id: 1, text: "Do laundry", complete: false },
//     { id: 2, text: "Wash clothes" , complete: true },
//     { id: 3, text: "Smell flowers", complete: true },
//     { id: 4, text: "Fix the code", complete: false }
// ]

const initialState = {
    taskitems: [],
}

const taskitems = createSlice({
    name: "taskitems",
    initialState,
    reducers: {
        addTaskItem: (state, action) => {
            const { inputValue, priority } = action.payload

            const newTask = {
                id: uniqid(),
                name: inputValue,
                complete: false,
                date: new Date(),
                priority: priority,
            }
            state.taskitems = [...state.taskitems, newTask]
        },

        toggleTaskItem: (state, action) => {
            const updatedTaskItems = state.taskitems.map(item => {
                if (item.id === action.payload) {
                    const updatedTaskItem = {
                        ...item,
                        complete: !item.complete
                    }
                    return updatedTaskItem
                } else {
                    return item
                }
            })
            state.taskitems = updatedTaskItems
        },

        deleteTaskItem: (state, action) => {
            const decreasedTaskItems = state.taskitems.filter(item => item.id !== action.payload)
            state.taskitems = decreasedTaskItems
        },

        deleteAllTaskItems: (state) => {
            state.taskitems = []
        },

        completeAllTaskItems: (state) => {
            const completedTaskItems = state.taskitems.map(item => {
                return {
                    ...item,
                    complete: true,
                }
            })
            state.taskitems = completedTaskItems
        },

        sortTasks: (state, action) => {
            if (action.payload === "Priority") {
                state.taskitems = state.taskitems.slice().sort((a, b) => {
                    let xa = a.priority.toLowerCase()
                    let xb = b.priority.toLowerCase()

                    if (xa < xb) {
                        return 1
                    }
                    if (xa > xb) {
                        return -1
                    }
                    return 0
                })
            } else if (action.payload === "Uncompleted") {
            state.taskitems = state.taskitems.slice().sort((a, b) => a.complete - b.complete)
            } else if (action.payload === "Date") {
                state.taskitems = state.taskitems.slice().sort((a, b) => a.date - b.date)
            } else {
                state.taskitems = [...state.taskitems]
            }
        },
    }
})

export default taskitems
