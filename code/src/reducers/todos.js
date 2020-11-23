import {  createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    username: 'Mats',
    items: [
      { 
        id: 1,
        text: 'The first todo',
      },
      { 
        id: 2,
        text: 'The second todo',
      },
      {
        id: 2,
        text: 'The third todo',
      },
    ],
  },
  reducers:{
    removeOne: (state, action) => {
      state.items.pop();
    },
  },
});