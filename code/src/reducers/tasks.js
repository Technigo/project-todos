import { createSlice } from '@reduxjs/toolkit'

// Task data: id, title, completed: true/false

export const tasks = createSlice({

  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Diapers', completed: false },
      { id: 2, text: 'Milk', completed: false },
      { id: 3, text: 'Pizza', completed: true }
    ]
  },
  reducers: {
    // The actions - but called reducers 🤷‍♀
    // Fix the addTask
    // Fix the toggleCompleted
    // Fix the removeTask
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false })
    }
  }

})