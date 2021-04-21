import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const tasks = createSlice({
    name: 'tasks', 
    initialState,
    reducers: {
        //immutable approach
        addTask: (store, action) => {
           store.items = [...store.items, action.payload]
        },
        toggleTaskCompleted: (store, action) => {
        //immutable approach
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
            // Immutable approach
            const decreasedItems= store.items.filter(task => task.id !== action.payload)
            // this line will return a new array of items, except the item that was in the payload
            store.items = decreasedItems

        },
        deleteAllTasks: () => {
            //Since we start with an empty array, to delete all tasks we can reset the state to the initial state the page had 
            //when it was loaded. This action does not require a payload.
            return initialState
        }, 
        clearAllTasks: (store) => {
            //Button to check all tasks as completed
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


