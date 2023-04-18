
/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const data = [];

export const tasksproject = createSlice({
  name: 'tasksproject',
  initialState: {
    projectItems: data
  },
  reducers: {

    addItem: (store, action) => {
      store.projectItems = [...store.projectItems, action.payload];
    },

    deleteItem: (store, action) => {
      store.projectItems.splice(action.payload, 1);
    },

    toggleItem: (state, action) => {
      const projectItem = state.projectItems.find((projectItem) => projectItem.id === action.payload);
      if (projectItem) {
        projectItem.complete = !projectItem.complete;
      }
    },

    sortItems: (state, action) => {
      const item = state.projectItems.find((item) => item.id === action.payload);
      state.projectItems.sort((a, b) => {
        if (a.complete && !b.complete) {
          return 1; // a comes after b
        } else if (!a.complete && b.complete) {
          return -1; // a comes before b
        } else {
          return 0; // they're equal and can be left in their current order
        }
      });
    },


    allCompleteItem: (store, action) => {
      store.projectItems = store.projectItems.map((projectItem) => {
        return { ...projectItem, complete: action.payload };
      });
    },

    clearAllItems: (store, action) => {
      store.projectItems.splice(action.payload);
    }
  }
});
