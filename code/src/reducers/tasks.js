/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

const taskData = [
  { id: 1, text: 'Review research results', isComplete: true, emoji: '👩‍🔬' },
  { id: 2, text: 'Write a report', isComplete: false, emoji: '📝' },
  { id: 3, text: 'Prepare presentation', isComplete: false, emoji: '📊' },
  { id: 4, text: 'Submit report', isComplete: false, emoji: '📩' },
  { id: 5, text: 'Prepare for meeting', isComplete: false, emoji: '📅' },
];

export const tasks = createSlice({
  name: 'tasks',
  initialState: taskData,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        isComplete: false,
        emoji: '❓',
      };
      state.push(newTask);
    },
    removeTask: (state, action) => {
      const taskToRemove = state.find((task) => task.id === action.payload);
      state.splice(state.indexOf(taskToRemove), 1);
    },
    clearAll: (state) => {
      state.splice(0, state.length);
    },
  },
});
