import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
  items: []
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (store, action) => {
      const newToDo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false
      };
      store.items = [newToDo, ...store.items]
    },
    toggleToDo: (store, action) => {
      console.log(store)
      console.log(action)

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    }
    /*  deleteToDo: (store, action) => {
      console.log(store);
      console.log(action);

      store.items.filter((item) => {
        return (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    } */
  }
})

export default todos;