import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const WantToDoRed = createSlice({
  name: 'Ideas',
  initialState: {
    items: []
  },
  reducers: {
    addIdea: (store, action) => {
      const newIdea = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        createdAt: new Date()
      }

      store.items = [...store.items, newIdea]
    },

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    }
  }
});