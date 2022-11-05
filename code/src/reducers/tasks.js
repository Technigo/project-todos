import { createSlice } from '@reduxjs/toolkit'

/* my store, with 5 todos, and a reducer for adding new todo
and one for deleting, one for completing */
export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Read this todo', complete: true },
      { id: 2, text: 'say thanks to one person', complete: false },
      { id: 3, text: 'think one nice thing about yourself', complete: false },
      { id: 4, text: 'Create a todo', complete: false },
      { id: 5, text: 'Delete a todo', complete: false }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      const itemInfo = action.payload;
      store.items.push(itemInfo);
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    toggleTask: (store, action) => {
      console.log('store:', store);
      console.log('action:', action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    }
  }
});
