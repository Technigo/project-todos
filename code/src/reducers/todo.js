/* eslint-disable jsx-a11y/label-has-associated-control */
import { createSlice } from '@reduxjs/toolkit'

const data = [
  {
    id: 0,
    name: 'Skydive',
    done: false
  },
  {
    id: 1,
    name: 'Travel',
    done: false

  }
]

const todos = createSlice({
  name: 'todo',
  initialState: {
    items: data
  },

  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
        }
      });
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    addTask: (store, action) => {
      const copyArray = store.items;
      copyArray.unshift(action.payload);
      store.items = copyArray
    }
  }
})

export default todos;