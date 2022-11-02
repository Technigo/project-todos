import { createSlice } from '@reduxjs/toolkit';
/* import { v4 as uuid } from 'uuid';

const uniqueId = uuid() */

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      /* { id: '1',
        text: 'Grocery shopping',
        isComplete: false },
      { id: '2',
        text: 'Laundry',
        isComplete: false } */
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      })
    },
    addTask: (store, action) => {
      store.items.push(action.payload)
    }/* ,
    removeTask: (store, action) => {
      return store.filter(() => tasks.id !== action.payload)
    } */
  }

})

export default tasks