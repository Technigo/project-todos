import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
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
export default tasks;

// sorting
// const exampleToSortArray = [
//   { id: 1,
//     name: 'Pikatchu',
//     isCaught: false },
//   {
//     id: 2,
//     name: 'Mew',
//     isCaught: true
//   },
//   {
//     id: 3,
//     name: 'Mew',
//     isCaught: true
//   },
//   {
//     id: 4,
//     name: 'Mew',
//     isCaught: true
//   },
//   {
//     id: 5,
//     name: 'Mew',
//     isCaught: true
//   }
// ];

// exampleToSortArray.sort((a, b) => {
//   // sort asceding
//   return a.id - b.id;
//   // sort desceding
//   // return b.id - a.id;
// })

// console.log(exampleToSortArray)