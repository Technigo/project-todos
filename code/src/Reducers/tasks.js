import { createSlice } from '@reduxjs/toolkit';
//Add multiple lists

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
      const { taskInfo } = action.payload
      state.items.push(taskInfo)
    },
    removeItem: (state, action) => {
      const { id } = action.payload
      state.items = state.items.filter(task=>task.id!==id)
      //state.items.filter(task=>task.id !== action.payload)
      //state.items.filter(task => task.id !== action.payload) //Don't remove anything yet?
      //state.items.pop() only removes latest item in list
    },
    removeAll: (state) => {
      state.items = []
    }
  }
});
