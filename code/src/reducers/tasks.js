import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const tasks = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 5, text: 'Milk', complete: false, time: moment().format('ddd D MMM') },
      { id: 2, text: 'Bread', complete: false, time: moment().format('ddd D MMM') },
      { id: 9, text: 'Apple', complete: false, time: moment().format('ddd D MMM') }
    ]
  },

  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const newTask = {
        id: Math.max(...store.items.map((item) => item.id)) + 1,
        text: action.payload,
        complete: false,
        time: moment().format('ddd D MMM')
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
