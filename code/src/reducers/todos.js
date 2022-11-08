import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1667482086195,
        name: 'buy milk',
        isChecked: false,
        selectedDate: '2022-11-06T23:00:00.000Z' },
      { id: 1667412086196,
        name: 'clean bathroom',
        isChecked: true,
        selectedDate: '2022-11-06T23:00:00.000Z' },
      { id: 1667482086191,
        name: 'water plants',
        isChecked: false,
        selectedDate: '2022-11-06T23:00:00.000Z' },
      { id: 1667482086192,
        name: 'do the laundry',
        isChecked: false,
        selectedDate: '2022-11-06T23:00:00.000Z' }
    ]
  },
  reducers: {
    toggleChecked: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
      });
    },
    addTodo: (store, action) => {
      store.items.push(action.payload)
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

export default todos;