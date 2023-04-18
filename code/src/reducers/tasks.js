import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items = [...state.items, action.payload]
      // This makes the array immutable (the spread operator)
    },
    deleteAllTasks: (state) => {
      state.items = []
    }
  }
});