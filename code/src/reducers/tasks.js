/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// initioal state can also be set to an empty array. it just has to be an array.

const initialState = {
  items: [
    {
      id: '1',
      taskName: 'Jigglypuff', // name is to store the input
      isChecked: false
    },
    {
      id: '2',
      taskName: 'Snorlax',
      isChecked: true // define with myself, also change it in the addNewTask
    },
    {
      id: '3',
      taskName: 'Mewtwo',
      isChecked: false
    },
    {
      id: '4',
      taskName: 'Oddish',
      isChecked: true // isChecked same as in tasks.js
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleChecked: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
      });
    },
    // "store, action" can be potato, banana, first argument (store) references the state of the store, second argument (action)references the data that is
    // passed down from a component
    addTask: (store, action) => {
      // Mutable way. (varje gång man muterar the state of the store, youll get a warning). MEN detta vill vi inte. Vi vill att det ska vara immutable:
      /*    store.items.push(action.payload); */

      // Immutable way:
      store.items = [...store.items, action.payload]
    },
    removeTodo: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    clearAll: (store, action) => {
      store.items = []
      console.log(action)
    }
  }
})

export default tasks;