import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(store);

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        timePosted: moment().format("DD/MM/YYYY"),
      };

      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });
      store.items = updatedItems;
    },

    completeAll: (store) => {
      const completeAllTodos = store.items.map((item) => {
        const updatedComplete = {
          ...item,
          isComplete: true,
        };
        return updatedComplete;
      });
      store.items = completeAllTodos;
    },

    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },
    deleteAll: (store) => {
      store.items = [];
    },
  },
});

export default todos;
