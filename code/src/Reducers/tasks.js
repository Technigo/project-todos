import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    name: 'Emelies List',
    items: [
      {
        id: 1,
        text: 'First task',
        done: false,
      },
      {
        id: 2,
        text: 'Second task',
        done: false,
      },
      {
        id: 3,
        text: 'Third task',
        done: false,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const{ taskInfo }=action.payload
      console.log(taskInfo)
      state.items.push({taskInfo})
    },
    removeItem: (state, action) => {
      state.items.pop()
    }
  }
});
