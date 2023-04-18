import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [{ id: 'task1',
  name: 'water plants',
  isListed: false },
{ id: 'task2',
  name: 'exercise',
  isListed: false },
{ id: 'task3',
  name: 'feed dog',
  isListed: false }] }

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    AddTasks: (store, action) => {
      // store.items.push(action.payload);mutable-below is immutable
      store.items = [...store.items, action.payload]
    }
  }
})

