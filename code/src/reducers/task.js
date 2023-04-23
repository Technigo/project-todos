/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'carrots',
      isCompleted: 'false'
    },
    {
      id: 2,
      name: 'milk',
      isCompleted: 'false'
    },
    {
      id: 3,
      name: 'bread',
      isCompleted: 'false'
    }
  ]
}

export const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    deleteAllTasks: (store) => {
      store.items = []
    },
    deleteSingleTask: (store, action) => {
      const id = action.payload;
      const copyofTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyofTaskArrayFromStore.findIndex(condition);
      copyofTaskArrayFromStore.splice(foundIndex, 1);
      store.items = copyofTaskArrayFromStore;
    },
    toggleIfTaskIsCompleted: (store, action) => {
      const id = action.payload;
      const copyofTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyofTaskArrayFromStore.findIndex(condition);
      copyofTaskArrayFromStore[foundIndex].isCompleted = !copyofTaskArrayFromStore[foundIndex].isCompleted
      store.items = copyofTaskArrayFromStore;
    }
  }
})