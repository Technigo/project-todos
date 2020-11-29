import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Create a store', isComplete: false },
    { id: 2, text: 'Create components', isComplete: false },
    { id: 3, text: 'Mobile first', isComplete: false },
    { id: 4, text: 'Buy Pepsi Max', isComplete: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      // takes the items array and filters all items with id that is not equal to payload.
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      state.items = filteredItems;
    },
    toggleCompleteStatus: (state, action) => {
      // Finds the task/item with same id as payload (the task that was clicked)
      const choosenTask = state.items.find(item => item.id === action.payload)

      // Toggles between true and false
      if (choosenTask) {
        choosenTask.isComplete = !choosenTask.isComplete; 
      };
    },
    removeAll: (state) => {
      state.items = []
    }
  }
})
