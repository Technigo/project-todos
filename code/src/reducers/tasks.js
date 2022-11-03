/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',

  initialState: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },

  reducers: {
    addTask: (store, action) => {
      if (action.payload.length === 0) {
        return;
      }
      const nextId =
        store.tasks.length > 0
          ? store.tasks.reduce((_, cur) => cur.id, 0) + 1
          : 1;
      const newTask = {
        id: nextId,
        text: action.payload,
        isComplete: false
      };
      store.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(store.tasks));
    },
    deleteTask: (store, action) => {
      store.tasks = store.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(store.tasks));
    },
    toggleComplete: (store, action) => {
      store.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(store.tasks));
    }
  }
});

export default tasks;
