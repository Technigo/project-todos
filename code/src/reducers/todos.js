import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import moment from 'moment';

const initialState = {
  items: []
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setAllItems: (store, action) => {
      store.items = action.payload;
    },
    addToDo: (store, action) => {
      const newToDo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        postedTime: moment().format('LLL')
      };
      store.items = [newToDo, ...store.items]
    },
    /*    toggleToDo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedToDo = {
            ...item, isComplete: !item.isComplete
          }
          return updatedToDo
        } else {
          return item
        }
      })
      store.items = updatedItems
    }, */
    toggleToDo: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
    deleteToDo: (store, action) => {
      const deleteItems = store.items.filter((item) => item.id !== action.payload)

      store.items = deleteItems
    }
  }
})

export default todos;

// sort tasks if done = true move to bottom...något sådant med boolian?