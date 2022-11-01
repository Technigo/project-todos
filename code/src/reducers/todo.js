import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: '1',
        task: 'clean the apartment',
        completed: false },
      { id: '2',
        task: 'cook a nice meal',
        completed: true },
      { id: '3',
        task: 'work out',
        completed: false }
    ]
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
    addItem: (store, action) => {
      store.items.push(action.payload)
    }
  }
});

export default todo;