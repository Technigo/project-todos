
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  completedCount: 0
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setUpStore: (store, action) => {
      store.items = action.payload
      store.completedCount = action.payload.filter((item) => item.checked).length;
    },
    addTask: (store, action) => {
      store.items = [action.payload, ...store.items]
      localStorage.setItem('TodoList', JSON.stringify(store.items))
    },
    deleteAllTasks: (store) => {
      store.items = []
      store.completedCount = store.items.filter((item) => item.checked).length
      localStorage.setItem('TodoList', JSON.stringify(store.items))
    },
    deleteTask: (store, action) => {
      const id = action.payload.toString()
      const copyOfTasksArray = store.items
      const condition = (element) => element.id === id
      const foundIndex = copyOfTasksArray.findIndex(condition)
      // changed to splice instead of filter, better when you are deleting items from array.
      copyOfTasksArray.splice(foundIndex, 1)
      store.items = copyOfTasksArray
      store.completedCount = store.items.filter((item) => item.checked).length
      // to update the completedCount once task is removed
      localStorage.setItem('TodoList', JSON.stringify(store.items))
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
      localStorage.setItem('TodoList', JSON.stringify(store.items))
      // to update the completedCount once the item is checked
    }
  }
})

