import { createSlice } from '@reduxjs/toolkit';

export const TaskReducer = createSlice({
  name: 'Tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        isComplete: false
      }

      store.items = [...store.items, newTask]
    },

    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      });
    },

    deleteTask: (store, action) => {
      const updatedItems = store.items.filter(
        (item) => item.id !== action.payload
      )
      store.items = updatedItems;
    }

  }
});

export const IdeaReducer = createSlice({
  name: 'Ideas',
  initialState: {
    items: []
  },
  reducers: {
    addIdea: (store, action) => {
      const newIdea = {
        id: Date.now(),
        text: action.payload,
        isComplete: false
      }

      store.items = [...store.items, newIdea]
    },

    toggleIdea: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      });
    },

    deleteIdea: (store, action) => {
      const updatedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = updatedItems;
    }
  }
});