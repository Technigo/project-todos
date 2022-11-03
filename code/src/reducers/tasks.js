/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 4,
        text: 'Cat changing functionality default, add task and delete task',
        isComplete: true
      },
      {
        id: 1,
        text: 'Cat changing functionality, input',
        isComplete: true
      },
      {
        id: 1123,
        text: 'Cat changing functionality, added',
        isComplete: true
      },
      {
        id: 1123342,
        text: 'Make list scroll to button on submit',
        isComplete: true
      },
      {
        id: 70,
        text: 'Delete util',
        isComplete: false
      },
      {
        id: 7,
        text: 'Save tasks in local storage',
        isComplete: false
      },
      {
        id: 80,
        text: 'Make submit button appear on typing?',
        isComplete: false
      },
      {
        id: 90,
        text: 'Optional: change text based on actions',
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
      },
      {
        id: 11,
        text: 'Clean up components, like TaskList',
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
      store.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete;
        }
      });
    }
  }
});

export default tasks;
