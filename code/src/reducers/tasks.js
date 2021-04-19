import { createSlice } from '@reduxjs/toolkit'
import { TodoApp } from 'components/TodoApp' 

const initialState = {
    items: [
    // hard coded data to test app. 
    // {id: 1, content: 'Wash clothes', completed: false},
    // {id: 2, content: 'code Todo app', completed: false},
    // {id: 3, content: 'Enjoy the sun', completed: false},
]
}

const nextId = (items) => {
    const maxId = items.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1 
}

export const tasks = createSlice({
    name: 'tasks', //what the object in the store will be called 
    initialState,
    reducers: {
        addTask: (store, action) => {
            const newTask = {
                id: nextId(store.items),
                content: action.payload.content,
                completed: false
            }
            store.items.push(newTask)
        },
        //reducers are objects to update the store
        toggleTaskCompleted: (store, action) => {
            const index = store.items.findIndex((task) => task.id === action.payload.id)
			store.items[index].completed = action.payload.completed
        },
        removeTask: (store, action) => {
            const existingTask = store.items.find((task) => task.id === action.payload.id)
            
            if(existingTask) {
                store.items = store.items.filter((task) => task.id !== action.payload.id)
                // this line will return a new array of items, except the item that was in the payload
            }
        },
        clearAllTasks: () => {
            //Since we start with an empty array, to clear all tasks we can reset the state to the initial state the page had 
            //when it was loaded. This action does not require a payload.
            return initialState
        }
    }
})


