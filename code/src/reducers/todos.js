import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";

//Slice
const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },

  reducers: {
    addTodo: (store, action) => {
      //task variable gets filled with the tasks sent by the dispatch hook
      const task = action.payload;
      // newTodo object goes inside the items array when the user adds tasks in the input
      const newTodo = {
        id: uniqid(),
        task: task,
        isComplete: false,
        createdAt: moment().format("Do MMM YY"),
      };
      // immutability approach
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      const updateItems = store.items.map((item) => {
        //action.payload is responsible for storing the data comming from the dispatch, that is why is posible to make the comparison
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

      store.items = updateItems;
    },

    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedItems;
    },

    completeAllTasks: (store) => {
      const itemsAllCompleted = store.items.map((item) => {
        return {
          ...item,
          isComplete: true,
        };
      });
      store.items = itemsAllCompleted;
    },

    uncheckAllTasks: (store) => {
      const itemsNotCompleted = store.items.map((item) => {
        return {
          ...item,
          isComplete: false,
        };
      });
      store.items = itemsNotCompleted;
    },

    removeAllTasks: (store) => {
      return {
        ...store,
        items: [],
      };
    },
  },
});

export default todos;
