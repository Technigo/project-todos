import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', completed: true },
      { id: 2, text: 'Follow redux codealong', completed: true },
      { id: 3, text: 'Fork weekly assignment', completed: true },
      { id: 4, text: 'Create a todo app', completed: false }
    ]
  },
  reducers: {
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
