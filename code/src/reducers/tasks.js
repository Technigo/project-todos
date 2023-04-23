import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1,
      name: 'Code along',
      isComplete: false,
      timeStamp: 'Wed Apr 19 2023',
      dueDate: 'Fri Apr 21 2023',
      category: 'Work' },
    { id: 2,
      name: 'Laundry',
      isComplete: false,
      timeStamp: 'Wed Apr 19 2023',
      dueDate: 'Thur Apr 20 2023',
      category: 'Home' },
    { id: 3,
      name: 'Organise closet',
      isComplete: true,
      timeStamp: 'Wed Apr 19 2023',
      dueDate: 'Whenever',
      category: 'Home' }],
  isEmpty: false
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