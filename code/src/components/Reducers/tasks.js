import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [{ id: 'task1',
  name: 'Make a To Do List',
  isListed: false,
  date: null },
{ id: 'task2',
  name: 'Check off first item',
  isListed: false,
  date: null },
{ id: 'task3',
  name: 'Realize you have already done 2 things on your list',
  isListed: false,
  date: null },
{ id: 'task4',
  name: 'Remove all tasks and celebrate!',
  isListed: false,
  date: null }] }

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    AddTasks: (store, action) => {
      // store.items.push(action.payload);mutable-below is immutable
      store.items = [...store.items, { id: Date.now().toString(),
        name: action.payload.name,
        isListed: true,
        date: action.payload.date }];
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
