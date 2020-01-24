import { createSlice } from '@reduxjs/toolkit'

// Here it is where we define our slice that contains the state, the reducers and the actions that will allow us to modify our state

export const todos = createSlice({
    name: 'todos',
    initialState:
    {
        items:
            [
                { id: 1, name: 'Watch video on actions & reducers', complete: true },
                { id: 2, name: 'Follow redux codealong', complete: true },
                { id: 3, name: 'Fork weekly assignment', complete: true },
                { id: 4, name: 'Create a todo app', complete: false },
            ]
    },
    reducers: {
        // Here we place our actions
        addTask: (state, action) => {
            console.log('current state', state)
            console.log('action', action)
            state.items.push({ id: Date.now(), name: action.payload, complete: false })
        },
        removeTask: (state, action) => {
            // find item

            state.items = state.items.filter(item => item.id !== action.payload)
        },
        removeAll: (state, action) => {
            state.items = []
        },
        // Action to toggle a task between completed or not. The name of the action says what the action is about
        // current state and action that it is going to be performed (state, action)
        toggleCompleted: (state, action) => {
            console.log(action.payload)
            // need to find tasks like "Create a todo app"
            const foundItem = state.items.find((item) => item.id === action.payload)
            console.log('found', JSON.stringify(foundItem))
            // and toggle its state under "complete"
            if (foundItem) {
                foundItem.complete = !foundItem.complete
            }
        }
    }

})