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
      state.push(action.payload);
    },
    removeTag: (state, action) => {
      return state.filter((tag) => tag.id !== action.payload.id);
    }
  }
});
