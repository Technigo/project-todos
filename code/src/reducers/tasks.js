import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: { 
    items: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false },
    ]
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            complete: !task.complete
          }
        } else {
            return task
        }
      })
      store.items = updatedItems
    }
  }
})

export default tasks;