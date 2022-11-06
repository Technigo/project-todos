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
        // id: Math.max(...store.items.map((item) => item.id)) + 1,
        text: action.payload,
        complete: false,
        time: moment().format('D MMM HH:mm')
      };

      const newTaskList = [...store.items, newTask]; // Immutable, combines 2 arrays
      store.items = newTaskList;
    },

    deleteItem: (store, action) => { // access store & action
      store.items.splice(action.payload, 1) // starting with index 1
    },

    toggleItem: (store, action) => { // iterate in each item, check if id is there
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    }
  }
});

export default tasks;