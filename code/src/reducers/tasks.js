import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Do laundry', complete: true },
    { id: 1, text: 'Unload dishwasher', complete: true },
    { id: 1, text: 'Watch week 10 videos', complete: false }
  ]
})