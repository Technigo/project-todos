import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

// same name as the filename is standard. Name property, initial and reducers. Three properties always included. 
const todos = createSlice({
  name: 'todos',
  // initial is always an object
  initialState: {
    items: [],
  },
  reducers: {
    // reducers can be provided with two things - store and action. 
    addTodo: (store, action) => {
      const newTodo = {
        // id HAS to be unique
        id: uniqid(),
        text: action.payload,
        // iscomeplte is reference to if it is checked or not
        isComplete: false
      }

      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete
          }

          return updatedTodo;
        } else return item
      });

      store.items = updatedItems
    },
    deleteTodo: (store, action) => {
      const decreasedTodo = store.items.filter(item => item.id !== action.payload)

      store.items = decreasedTodo;
    },
  },
});

export default todos;