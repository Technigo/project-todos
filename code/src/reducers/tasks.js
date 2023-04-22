import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false }
  ]
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
    },
    deleteTask: (store, action) => {
      store.tasks = store.tasks.filter((task) => task.id !== action.payload.id);
    }
  }
});
