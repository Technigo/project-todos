import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, text: 'Watch video on actions & reducers', complete: false },
    { id: 2, text: 'Follow redux codealong', complete: false },
    { id: 3, text: 'Fork weekly assignment', complete: false },
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
    },
    toggleChecked: (store, action) => {
      const { id } = action.payload;
      store.tasks = store.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
      store.completedCount = store.tasks.filter((task) => task.complete).length;
    }
  }
});
