import { createSlice } from "@reduxjs/toolkit";

import uniqid from "uniqid";

const todo = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filterBy: "date added",
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload.text,
        completed: false,
        createdAt: action.payload.time,
        dueAt: action.payload.dueAt,
      };

      store.items = [...store.items, newTodo];
    },
    changeStatus: (store, action) => {
      const newState = store.items.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      store.items = newState;
    },
    removeSingleTodo: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload);
    },
    clearAll: (store, action) => {
      store.items = [];
    },
    compleatAll: (store, action) => {
      store.items = store.items.map((todo) => ({
        ...todo,
        completed: !todo.completed,
      }));
    },
    setFilter: (store, action) => {
      // first condition sorts the array by due date in ascending order
      if (action.payload === "date due") {
        store.items = store.items.slice().sort((a, b) => {
          return a.dueAt - b.dueAt;
        });
      } else if (action.payload === "uncompleted") {
        const sortedArr = store.items.slice().sort((a, b) => {
          return a.completed === b.completed ? 0 : a ? 1 : -1;
        });

        store.items = [...sortedArr];
      } else {
        store.items = [...store.items];
      }
    },
  },
});

export default todo;
