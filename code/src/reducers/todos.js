import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: '1',
        text: 'Watch video on actions & reducers',
        complete: false
      },
      {
        id: '2',
        text: 'Follow redux codealong',
        complete: false
      },
      {
        id: '3',
        text: 'Fork weekly assignment',
        complete: false
      },
      {
        id: '4',
        text: 'Create a todo app',
        complete: false
      },
      {
        id: uniqid(),
        text: 'does it work?',
        complete: false
      }
    ]
  },
  reducers: {
    toggleToDo: (store, action) => {
      console.log(store)
      console.log(action)

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },
    addToDo: (store, action) => {
      console.log(store);
      console.log(action);
    }
  }
});

export default todos;