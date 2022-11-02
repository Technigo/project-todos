/* eslint-disable operator-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-unsafe-optional-chaining */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 1,
        text: 'Functionality for deleting a task',
        isComplete: true
      },
      {
        id: 2,
        text: 'Functionality for adding a task',
        isComplete: true
      },
      {
        id: 3,
        text: 'Styling for tasks',
        isComplete: true
      },
      {
        id: 4,
        text: 'Cat changing functionality (switch statement redux?)',
        isComplete: false
      },
      {
        id: 5,
        text: 'Change fonts?',
        isComplete: false
      },
      {
        id: 6,
        text: 'Change text color?',
        isComplete: false
      },
      {
        id: 7,
        text: 'Save tasks in local storage',
        isComplete: false
      },
      {
        id: 8,
        text: 'Optional: timer for cat getting bored/sleeping',
        isComplete: false
      },
      {
        id: 9,
        text: 'Optional: delete all tasks',
        isComplete: false
      },
      {
        id: 10,
        text: 'Optional: delete completed tasks',
        isComplete: false
      }
    ]
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
    },
    deleteTask: (store, action) => {
      store.tasks = store.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (store, action) => {
      // Expects a task id as action.payload

      store.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete;
        }
      });
    }
  }
});

export default tasks;
