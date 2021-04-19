import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: {
        tasks: [
            { id: 1, description: 'Test 1', isComplete: false },
            { id: 2, description: 'Test 2', isComplete: true },
            { id: 3, description: 'Test 3', isComplete: false }
        ]
    },
    reducers: {
      toggleComplete: (store, action) => {
        const updatedTasks = store.tasks.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isComplete: !todo.isComplete
            }
          } else {
            return todo
          }
        })
        store.tasks = updatedTasks
      }
    }
})

export default todos