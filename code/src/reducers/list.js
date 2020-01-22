import { createSlice } from '@reduxjs/toolkit';

const tasks = [
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

  export const todos = createSlice({
    name: 'todos',
    initialState: {
      tasks
    },
    reducers: {
      addTask: (state, action) => {
        console.log(action)
        state.tasks.push({
          id: state.tasks.length + 1,
          name: action.payload,
          completed: false,
          archived: false
        })
      }
    }
  })