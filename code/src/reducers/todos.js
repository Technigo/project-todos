import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [{ id: 1,
      name: 'Watch video',
      completed: true },
    { id: 2,
      name: 'Walk dog',
      completed: false },
    { id: 3,
      name: 'Feed cat',
      completed: true },
    { id: 4,
      name: 'Feed self',
      completed: false }]
  },

  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    addTodo: (store, action) => {
      console.log(store)
      console.log(action)
      const { name } = action.payload
      store.items.push({
        id: Date.now(),
        name
      })
    },
    removeItem: (store, action) => {
      store.items.splice(action.payload);
    }

  }
})

/*   */