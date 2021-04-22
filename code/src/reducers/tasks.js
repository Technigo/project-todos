import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const tasks = createSlice({
    name: 'tasks', 
    initialState,
    reducers: {
        addTask: (store, action) => {
           store.items = [...store.items, action.payload]
        },
        toggleTaskCompleted: (store, action) => {
            const updatedItems = store.items.map((task) => {
                // If element from array has same id as id passed in action.payload,
                // then update it
                if (task.id === action.payload) {
                    return {
                        ...task, 
                        completed: !task.completed
                    }
                } else {
                    // Return whole element without changing it
                    return task
                }
            })
            // update whole store.items property and assign it new value - updatedItems array
            store.items = updatedItems
        },
        removeTask: (store, action) => {
            const decreasedItems= store.items.filter(task => task.id !== action.payload)
            // this line will return a new array of items, except the item that was in the payload
            store.items = decreasedItems

        },
        deleteAllTasks: () => {
            return initialState
        }, 
        clearAllTasks: (store) => {
            const clearAll = store.items.map((task) => {
                return {
                    ...task, 
                    completed: !task.completed
                }
            })
            store.items = clearAll
        }
    }
})


