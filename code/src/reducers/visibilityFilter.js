import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilter = {
  ShowAll: 'SHOW_ALL',
  ShowCompleted: 'SHOW_COMPLETED',
  ShowActive: 'SHOW_ACTIVE'
};

const initialState = VisibilityFilter.ShowAll;

export const visibilityFilter = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter: (state, action) => {
      const { filter } = action.payload;
      return (state = filter);
    }
  }
});
