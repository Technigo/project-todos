import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Fix website', complete: true },
    { id: 2, text: 'Build React-app', complete: false },
    { id: 3, text: 'Hand in project', complete: true },
    { id: 4, text: 'Review code', complete: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
});
