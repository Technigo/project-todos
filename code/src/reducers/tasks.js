import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const taskList = [
    { id: 1, taskText: 'Get milk', isDone: false },
    { id: 2, taskText: 'Clean', isDone: false  },
    { id: 3, taskText: 'Go running', isDone: false  }
]

const completedTasks = [
]

const initialState = {
    taskList,
    completedTasks
}

export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        toggleIsDone: (store, action) => {

            const updatedTasks = store.taskList.map(task => {
                if (task.id === action.payload ) {
                    return {
                        ...task,
                        isDone: !task.isDone
                    }
                } else {
                   return task
                }
            })
            store.taskList = updatedTasks

            //All tasks that are done will be displayed in completedTasks.
            const doneTasks = store.taskList.filter(task => task.isDone === true) 
            store.completedTasks = doneTasks
        },

        deleteTask: (store, action) => {
            const leftTasks = store.taskList.filter(task => task.id !== action.payload) 
            store.taskList = leftTasks
            
            const completedLeftTasks = store.completedTasks.filter(task => task.id !== action.payload)
            store.completedTasks = completedLeftTasks
        },

        
        addTask: (store, action) => {
            store.taskList.push({
                id: uniqid(),
                taskText: action.payload,
                isDone: false
            })
        }
    }
})