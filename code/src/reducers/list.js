import { createSlice } from '@reduxjs/toolkit';

const tasksList = [
  {
    id: 1,
    name: 'Gurka',
    completed: false,
    archived: false
  },
  {
    id: 2,
    name: 'Tomat',
    completed: true,
    archived: false
  },
  {
    id: 3,
    name: 'Zucchini',
    completed: false,
    archived: false
  }
]

  export const todosList = createSlice({
    name: 'todos',
    initialState: {
      tasks: []
    },
    reducers: {
      addTask: (state, name) => {
        state.tasks.push({
          id: state.tasks.length,
          name: name,
          completed: false,
          archived: false
        })
      }
    }
  })