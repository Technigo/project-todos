import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todo = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action.payload);
      const NewTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        date: Date.now(),
      };

      store.list = [...store.list, NewTodo];
    },

    toggleStatus: (store, action) => {
      const updatedList = store.list.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else return item;
      });
      store.list = updatedList;
    },

    removeTodo: (store, action) => {
      const removeTodos = store.list.filter(
        (item) => item.id !== action.payload
      );
      store.list = removeTodos;
    },

    removeAll: (store) => {
      store.list = [];
    },

    completeAll: (store) => {
      const completed = store.list.map((item) => {
        const updatedTodo = {
          ...item,
          isComplete: true,
        };
        return updatedTodo;
      });
      store.list = completed;
    },
  },
});

export default todo;
