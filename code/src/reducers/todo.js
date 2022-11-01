import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: '1',
        name: 'clean the apartment',
        completed: false },
      { id: '2',
        name: 'cook a nice meal',
        completed: true },
      { id: '3',
        name: 'work out',
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
    }
  }
});

export default todo;