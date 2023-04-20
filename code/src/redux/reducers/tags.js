import { createSlice } from '@reduxjs/toolkit';

export const tags = createSlice({
  name: 'tags',
  initialState: {
    items: [
      { id: '1', text: 'Click' },
      { id: '2', text: 'Your' }
    ]
  },
  reducers: {
    addTag: (state, action) => {
      state.items.push({ id: Math.random().toString(), text: action.payload });
    },
    removeTag: (state, action) => {
      state.items = state.items.filter((tag) => tag.id !== action.payload);
    }
  }
});