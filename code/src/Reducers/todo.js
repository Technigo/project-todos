import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    today: new Date(),
    tasks: [],
    totalTasks: 1
}

export const todo = createSlice({
    name: 'todo',
    initialState,

    reducers: {

        //action to create a new task
        addTask: (state, action) => {
            const task = action.payload;

            state.tasks.push({
                id: Date.now(),
                content: task,
                timeStamp: new Date(),
                isComplete: false,
            })

            state.totalTasks = state.totalTasks + 1;
        },


        //action to check task as complete
        completeTask: (state, action) => {
            const { taskId } = action.payload;

            const completeTask = state.tasks.find(task => task.id === taskId)
            completeTask.isComplete = !completeTask.isComplete;
        },


        // action to remove a task
        removeTask: (state, action) => {
            const { taskId } = action.payload;

            const tasks = state.tasks.filter(task => task.id !== taskId)

            state.tasks = tasks;
        },


        // action to complete all tasks
        completeAllTasks: (state) => {
            state.tasks.map(task => task.isComplete = true)
        },


        // action to clear all tasks
        clearAllTasks: () => {
            return initialState
        }
    }

})
