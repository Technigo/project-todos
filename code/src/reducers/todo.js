import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1,
        task: 'Clean the kitchen',
        isCompleted: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      })
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      )
      store.items = decreasedItems
    }
  }
});
export default todo;