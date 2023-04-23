/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setUpStore: (store, action) => {
      store.items = action.payload;
    },
    addTask: (store, action) => {
      store.items = [action.payload, ...store.items];
      localStorage.setItem('taskList', JSON.stringify(store.items));
    },
    deleteAllTasks: (store) => {
      store.items = [];
      localStorage.setItem('taskList', JSON.stringify(store.items));
    },
    deleteSingleTask: (store, action) => {
      const id = action.payload;
      const copyOfTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfTaskArrayFromStore;
      localStorage.setItem('taskList', JSON.stringify(store.items));
    },
    toggleIfTaskIsDone: (store, action) => {
      const id = action.payload;
      const copyOfTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore[foundIndex].isCaught =
      !copyOfTaskArrayFromStore[foundIndex].isCaught;
      store.items = copyOfTaskArrayFromStore;
      localStorage.setItem('taskList', JSON.stringify(store.items));
    }
  }
});

// use immutable rather than mutable(store.items.push(action.payload).
// Spread operators prevents you from having a nested array.
// reducers will perform operations on our state.We need to create functions that will modify state.

export default tasks;