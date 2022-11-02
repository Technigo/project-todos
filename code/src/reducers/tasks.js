import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 5, text: 'Milk', complete: false },
      { id: 2, text: 'Bread', complete: false },
      { id: 9, text: 'Apple', complete: false }
    ]
  },

  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const newTask = {
        id: Math.max(...store.items.map((item) => item.id)) + 1,
        text: action.payload,
        complete: false
      };
      const newTaskList = [...store.items, newTask];
      store.items = newTaskList;
    },

    deleteTodo: (store, action) => {
      const itemsId = action.payload;
      const filteredList = store.items.filter((item) => item.id !== itemsId);
      store.books = filteredList;
    },

    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    }
  }
});

export default tasks;
