/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-shadow */
// src/reducers/tasks.js

import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasksList'));
  if (tasksFromLocalStorage) {
    return tasksFromLocalStorage;
  } else {
    return [
      { id: 1, text: 'Watch video on actions & reducers', complete: true, createdAt: new Date().toISOString(), dueDate: null },
      { id: 2, text: 'Follow redux codealong', complete: true, createdAt: new Date().toISOString(), dueDate: null },
      { id: 3, text: 'Fork weekly assignment', complete: true, createdAt: new Date().toISOString(), dueDate: null },
      { id: 4, text: 'Create a todo app', complete: false, createdAt: new Date().toISOString(), dueDate: null }
    ];
  }
};

const initialState = getInitialState();

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setupStore: (store, action) => {
      store.items = action.payload;
    },

    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload)
      if (task) {
        task.complete = !task.complete
      }
      localStorage.setItem('tasksList', JSON.stringify(state));
    },
    addTask: (state, action) => {
      const newId = state.length ? Math.max(...state.map((task) => task.id)) + 1 : 1
      const createdAt = new Date().toISOString() // timestamp
      state.push({ id: newId, ...action.payload, createdAt, projectId: action.payload.projectId })
      localStorage.setItem('tasksList', JSON.stringify(state));
    },
    removeTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasksList', JSON.stringify(newState));
      return newState;
    },
    completeAll: (state) => {
      state.forEach((task) => {
        task.complete = true;
      });
      localStorage.setItem('tasksList', JSON.stringify(state));
    },
    setDueDate: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId)
      if (task) {
        task.dueDate = action.payload.dueDate
      }
      localStorage.setItem('tasksList', JSON.stringify(state));
    }
  }
})

export const { toggleComplete, addTask, removeTask, completeAll, setupStore } = tasks.actions