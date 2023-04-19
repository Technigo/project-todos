import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}
const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const task = state.items.find((eachTask) => eachTask.id === id);
      if (task) {
        task.isComplete = !task.isComplete;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((task) => task.id !== id);
    },
    completeAll: (state) => {
      const allComplete = state.items.every((task) => task.isComplete);
      state.items.forEach((task) => {
        task.isComplete = !allComplete;
      });
    }
  }
});

export default tasks;