import { createSlice } from '@reduxjs/toolkit'

const tasksWonts = createSlice({
  name: 'tasksWonts',
  initialState: {
    items: [
    ]
  },
  reducers: {
    setAllItems: (store, action) => {
      store.items = action.payload;
    },
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    },
    removeItem: (store, action) => {
      console.log(action);
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload;
      });
      store.items = updatedItems;
    },
    addItem: (store, action) => {
      console.log(action);
      store.items = [...store.items, action.payload];
    }
  }

});

export default tasksWonts;
