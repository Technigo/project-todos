import { createSlice } from '@reduxjs/toolkit';

export const visibilityFilter = createSlice({
  name: 'visibilityFilter',
  initialState: 'SHOW_ALL',
  reducers: {
    setVisibility: (state, action) => {
      return action.payload.filter;
    }
  }
});
