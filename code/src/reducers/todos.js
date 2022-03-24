import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";

//Slice
const todos = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
  },

  reducers: {
    addTodo: (store, action) => {
      //task variable gets filled with the tasks sent by the dispatch hook
      const task = action.payload;
      // newTodo object goes inside the tasks array when the user adds tasks in the input
      const newTodo = {
        id: uniqid(),
        task: task,
        isComplete: false,
        createdAt: moment().format("Do MMM YY"),
      };
      // immutability approach
      store.tasks = [...store.tasks, newTodo];
    },
    toggleTodo: (store, action) => {
      const updateItems = store.tasks.map((item) => {
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

      store.tasks = updateItems;
    },

    deleteTodo: (store, action) => {
      const decreasedItems = store.tasks.filter(
        (item) => item.id !== action.payload
      );
      store.tasks = decreasedItems;
    },

    completeAllTasks: (store) => {
      const itemsAllCompleted = store.tasks.map((item) => {
        return {
          ...item,
          isComplete: true,
        };
      });
      store.tasks = itemsAllCompleted;
    },

    uncheckAllTasks: (store) => {
      const itemsNotCompleted = store.tasks.map((item) => {
        return {
          ...item,
          isComplete: false,
        };
      });
      store.tasks = itemsNotCompleted;
    },

    removeAllTasks: (store) => {
      return {
        ...store,
        tasks: [],
      };
    },
  },
});

export default todos;
