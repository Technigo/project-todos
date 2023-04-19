import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [{ id: 'task1',
  name: 'Water  the plants',
  isListed: false },
{ id: 'task2',
  name: 'Do coding exercises',
  isListed: false },
{ id: 'task3',
  name: 'Feed the dog',
  isListed: false }] }

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    AddTasks: (store, action) => {
      // store.items.push(action.payload);mutable-below is immutable
      store.items = [...store.items, action.payload]
    },
    RemoveToDo: (store, action) => {
      const index = store.items.findIndex((item) => item.id === action.payload);
      store.items.splice(index, 1);
    },
    RemoveAllTasks: (store) => {
      store.items = []
    }
  }
})
export default tasks;
