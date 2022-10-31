import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
    }
  }
});

export default tasks;
