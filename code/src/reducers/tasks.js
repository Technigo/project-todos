import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const tasks = createSlice({
  name: 'todos',
  initialState: {
    items: [
    ]
  },

  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const newTask = {
        id: Math.max(...store.items.map((item) => item.id)) + 1,
        text: action.payload,
        complete: false,
        time: moment().format('D MMM HH:mm')
      };

      const newTaskList = [...store.items, newTask]; // Immutable, combines 2 arrays
      store.items = newTaskList;
    },

    deleteItem: (store, action) => { // access store & action
      store.items.splice(action.payload, 1) // starting with index 1
    },

    toggleItem: (store, action) => { // iterate in each item, check if id is there
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    }
  }
});

export default tasks;

// const exampleToSortArray = [
//   { id: 5, text: 'Kristin', complete: false, time: moment().format('D MMM HH:MM') },
//   { id: 2, text: 'Anders', complete: false, time: moment().format('D MMM HH:MM') },
//   { id: 9, text: 'CArl', complete: false, time: moment().format('D MMM HH:MM') }
// ]

// exampleToSortArray.sort((a, b) => {
//   // sort ascending (from smallest to highest)
//   return (a.time - b.time)
// })

// console.log(exampleToSortArray)

// deleteItem: (store, action) => { // access store & action
//   store.items.splice(action.payload, 1) // starting with index 1
//   const updatedItems = store.items.filter((item) => {
//     return store.items.indexOf(item) !== action.payload
//   })
//   store.items = updatedItems
// },