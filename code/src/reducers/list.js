import { createSlice } from '@reduxjs/toolkit';

const tasks = [
  {
    id: 1,
    name: 'Gurka',
    completed: false,
  },
  {
    id: 2,
    name: 'Tomat',
    completed: true,
  },
  {
    id: 3,
    name: 'Zucchini',
    completed: false,
  }
]

  export const todos = createSlice({
    name: 'todos',
    initialState: {
      tasks
    },
    reducers: {
      addTask: (state, action) => {
        state.tasks.push({
          id: state.tasks.length + 1,
          name: action.payload,
          completed: false,
          archived: false
        })
      },
      clearAll: (state) => {
        state.tasks = []
      },
      updateCompleted: (state, action) => {
        const id = action.payload
        state.tasks[id - 1].completed = !state.tasks[id - 1].completed
      }
    }
  })