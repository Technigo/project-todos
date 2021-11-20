import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        date: moment().format("MMMM Do YYYY, h:mm"),
      };

      // v2 Immutability
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      store.items.forEach(item => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
    deleteTodo: (store, action) => {
      store.items.splice(action.payload, 1);
    },
  },
});

export default todos;
