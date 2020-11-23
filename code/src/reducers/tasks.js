import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  }, 
  reducers: {
    addTask: (state, action) => {
      const { text, category } = action.payload
      state.items.push({ 
        id: Date.now(), 
        text, 
        complete: false,
        category })
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    markCompleted: (state, action) => {
      const foundTask = state.items.find((item) => item.id === action.payload)
    
      // Toogles between completed and not completed
      if (foundTask) {
        foundTask.complete = !foundTask.complete
      };
    },
    removeAll: (state, action) => {
      state.items = []
    },
  }
});
