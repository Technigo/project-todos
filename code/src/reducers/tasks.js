/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  list: [
    // { id: 1, text: 'Connect checkbox to a function, make it work', complete: true },
    // { id: 2, text: 'Make component PRINT Btn', complete: false },
    // { id: 3, text: 'Make add task btn work', complete: false },
    // { id: 4, text: '.......', complete: false },
    // { id: 5, text: 'Call Grandma', complete: false }
  ]

};
console.log(initialState)
export const tasks = createSlice({

  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
      console.log('action', action)
    },
    removeTask: (state, action) => {
      state.list.pull(action.payload)
      console.log('remove', action)
    },

    toogleComplete: (state, action) => {
      const index = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state(index).complete = action.payload.complete;
    }

  }
});

export const {
  addTask,
  toogleComplete,
  removeTask
} = tasks.reducer