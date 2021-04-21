import { createSlice } from '@reduxjs/toolkit'

const taskList = [
    { id: 1, taskText: 'Get milk' },
    { id: 2, taskText: 'Clean' },
    { id: 3, taskText: 'Go running' }
]

const newTasks = []


const initialState = {
    taskList,
    newTasks
}

console.log(taskList)
console.log(newTasks)

export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { newTaskText } = action.payload

            state.taskList.push({
                newTaskText
            })

        }

    }
})