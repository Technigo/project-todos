import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isEmpty: true
}
const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isEmpty = false
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
        state.isEmpty = true;
      });
    },
    clearAll: (state) => {
      const emptyList = [];
      state.tasks = emptyList
      state.isEmpty = true
    }
  }
});

export default tasks;