import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      description: 'Test 1',
      priority: 'High',
      completed: false
    },
    {
      id: 2,
      description: 'Test 2',
      priority: 'Low',
      completed: false
    },
    {
      id: 3,
      description: 'Test 3',
      priority: '',
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
        description: action.payload.description,
        priority: action.payload.priority,
        completed: false
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

    // updatePriority: (state, action) => {
    //   console.log(action.payload);
    //   const changedItem = state.items.find((item) => item.id === action.payload.id);
    //   changedItem.priority = action.payload.priority;
    // },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearDone: (state, action) => {
      state.items = state.items.filter((item) => item.completed === false);
    }
  }
})