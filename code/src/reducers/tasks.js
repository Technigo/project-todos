import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import uniqid from 'uniqid'

const tasks = createSlice({
  name: 'todos',
  initialState: {
    items: [
    ]
  },

  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const newTask = {
        id: uniqid(),
        text: action.payload,
        complete: false,
        time: moment().format('D MMM HH:mm')
      };

      const newTaskList = [...store.items, newTask];
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