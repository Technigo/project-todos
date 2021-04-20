import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {},
  reducers: {
    toggleTheme() {}
  }
})

export const { toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;