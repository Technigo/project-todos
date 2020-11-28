import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      description: 'Test 1',
      completed: false
    },
    {
      id: 2,
      description: 'Test 2',
      completed: false
    },
    {
      id: 3,
      description: 'Test 3',
      completed: false
    }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        description: action.payload,
        isCompleted: false
      };
      const newItemsList = [...state.items, newItem];
      state.items = newItemsList;
    },

    toggleCompleted: (state, action) => {
      const clickedItem = state.items.find((item) => item.id === action.payload);
      if (clickedItem) {
        clickedItem.completed = !clickedItem.completed;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
})