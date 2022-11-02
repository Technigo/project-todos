import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: '1',
        task: 'clean the apartment',
        completed: false,
        tag: '!!' },
      { id: '2',
        task: 'clean the apartment',
        completed: false,
        tag: '!!!' },
      { id: '3',
        task: 'clean the apartment',
        completed: false,
        tag: '!' }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    }
  }
});

export default todo;