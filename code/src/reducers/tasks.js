import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'

const tasks = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 5, text: 'Milk', complete: false, time: moment().format('D MMM HH:mm') },
      { id: 2, text: 'Bread', complete: false, time: moment().format('D MMM HH:mm') },
      { id: 9, text: 'Apple', complete: false, time: moment().format('D MMM HH:mm') }
    ]
  },

  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const newTask = {
        id: Math.max(...store.items.map((item) => item.id)) + 1,
        text: action.payload,
        complete: false,
        time: moment().format('D MMM HH:mm')
      };

      const newTaskList = [...store.items, newTask]
      store.items = newTaskList;
    },

    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
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