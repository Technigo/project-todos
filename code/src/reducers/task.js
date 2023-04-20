import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
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
    }
  }
})