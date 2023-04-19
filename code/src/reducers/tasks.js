
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  completedCount: 0
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    deleteTask: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
      // returns a new array with the items that did not match the deleted item id
      store.completedCount = store.items.filter((item) => item.checked).length
      // to update the completedCount once task is removed
    },
    toggleChecked: (store, action) => {
      const { id } = action.payload
      // the same as writing const id = action.payload.id, but using object destructuring
      // to target checked property of the specific task item
      store.items = store.items.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item
      })
      // create a new array with map, were the item with matching id get checked updated
      // to its opposite value with ! operator
      // if id not match the current item, the original item is returned
      store.completedCount = store.items.filter((item) => item.checked).length
      // to update the completedCount once the item is checked
    }
  }
})

