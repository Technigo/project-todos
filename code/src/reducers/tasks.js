import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  completedCount: 0
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setupStore: (store, action) => {
      store.tasks = action.payload;
    },
    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
      localStorage.setItem('taskList', JSON.stringify(store.tasks));
    },
    deleteTask: (store, action) => {
      store.tasks = store.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('taskList', JSON.stringify(store.tasks));
    },
    toggleChecked: (store, action) => {
      const { id } = action.payload;
      store.tasks = store.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
      localStorage.setItem('taskList', JSON.stringify(store.tasks));
      store.completedCount = store.tasks.filter((task) => task.complete).length;
    }
  }
});
