import { createSlice } from '@reduxjs/toolkit';

export const projects = createSlice({
  name: 'projects',
  initialState: {
    projects: []
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
    },
    removeItem: (state, action) => {
      console.log(action);
    }
  }
});
