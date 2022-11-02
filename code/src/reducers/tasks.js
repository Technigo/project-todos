import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Do something fun', isComplete: false },
    { id: 2, text: 'Have a cup of tea', isComplete: false },
    { id: 3, text: 'Call a friend', isComplete: false },
    { id: 4, text: 'Buy chocolate', isComplete: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (store, action) => {
      store.items.push(action.payload);
    },
    removeTask: (store, action) => {
      // takes the items array and filters all items with id that is not equal to payload.
      const filteredItems = store.items.filter((item) => item.id !== action.payload);
      store.items = filteredItems;
    },
    toggleCompleteStatus: (store, action) => {
      // Finds the task/item with same id as payload (the task that was clicked)
      const choosenTask = store.items.find((item) => item.id === action.payload)

      // Toggles between true and false
      if (choosenTask) {
        choosenTask.isComplete = !choosenTask.isComplete;
      }
    },
    removeAll: (store) => {
      store.items = []
    }
  }
})