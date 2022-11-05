import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },

  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      // itteret what is exist in our store
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught;
        }
      });
    },
    /* Delete asing function like up 
fpr deletih we nned to access to item in store
using splice method
*/
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },

    addItem: (store, action) => {
      store.items.push(action.payload);
    },

    allCompleteTask: (store, action) => {
      const compeleted = store.items.map((task) => {
        return {
          ...task,
          isCaught: true
        };
      });
      store.items = compeleted;
    },

    allTaskDelete: (store) => {
      store.items = [];
    }
  }
});

export default tasks;
