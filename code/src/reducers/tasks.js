import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // NextId: 0,
    items: [
    // hard coded data to test app. 
    // {id: 1, content: 'Wash clothes', completed: false},
    // {id: 2, content: 'code Todo app', completed: false},
    // {id: 3, content: 'Enjoy the sun', completed: false},
]
}

export const tasks = createSlice({
    name: 'tasks', //what the object in the store will be called 
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                // id: state.NextId +1,
                content: action.payload.content,
                completed: false
            }
            state.items.push(newTask)
        },
        toggleTaskCompleted: (state, action) => {
          const taskCompleted = {
              id: action.payload.id,
              completed: true
          }
          state.items.completed(taskCompleted)
            
        },
        removeTask: (state, action) => {
            const existingTask = state.items.find((task) => task.id === action.payload.id)
            
            if(existingTask) {
                state.items = state.items.filter((task) => task.id !== action.payload.id)
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


