import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        text: 'Watch video on actions & reducers',
        completed: true,
        startDate: 1606383658465
      },
      {
        id: 2,
        text: 'Follow redux codealong',
        completed: true,
        startDate: 1606383658465
      },
      {
        id: 3,
        text: 'Fork weekly assignment',
        completed: true,
        startDate: 1606383658465
      },
      {
        id: 4,
        text: 'Create a todo app',
        completed: false,
        startDate: 1606383658465
      }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      state.items.push({
        id: Date.now(),
        text,
        completed: false,
        startDate: Date.now() // When added
      });
    },
    removeTodo: (state, action) => {
      // Find whatever item
      // remove it from the items array
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      // Find item to toggle
      const foundItem = state.items.find((item) => item.id === action.payload);

      // Toggle the value of completed
      if (foundItem) {
        foundItem.completed = !foundItem.completed;
      }
    },
    clearAll: (state) => {
      state.items = [];
    }
  }
});
