import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'do this', complete: true, category: 'School' },
      { id: 2, text: 'and do this', complete: false, category: 'Private' },
      { id: 3, text: 'and then this too', complete: false, category: 'School' },
    ],
  }, 
  reducers: {
    addTask: (state, action) => {
      const { id, text, category } = action.payload
      state.items.push({ id, text, category })
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
