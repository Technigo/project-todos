import { createSlice } from '@reduxjs/toolkit'

const todoList = createSlice({
    
    //name
    name: 'todolist',

    //initial state
    initialState: {
        tasks: [
            { id: 1, description: 'eat kitchen', isComplete: false },
            { id: 2, description: 'destroy world', isComplete: false },
            { id: 3, description: 'eat sandwich', isComplete: false },
            { id: 4, description: 'remove hair', isComplete: false },
            { id: 5, description: 'sleep', isComplete: false }
        ]
    },
    
    //reducers
    reducers: {
        toggleComplete: (store, action) => {
            const updatedTasks = store.tasks.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isComplete: !task.isComplete 
                    }
                } else {
                    return task
                }
            })

            store.tasks = updatedTasks
        },
        
        removeTask: (store, action) => {
            const remainingTasks = store.tasks.filter(task => task.id !== action.payload)

            store.tasks = remainingTasks
        },

        addTask: (store, action) => {
            store.tasks = [...store.tasks, action.payload]
        }
    }
})

export default todoList;