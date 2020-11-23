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
      const{text}=action.payload
      console.log(text)
      state.items.push({text})
    },
    removeItem: (state, action) => {
      state.items.pop()
    }
  }
});
