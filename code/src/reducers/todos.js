import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: []
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          };
        } else {
          return todo;
        }
      });
      store.items = updatedItems;
    },

    addTask: (store, action) => {
      const newTask = {
        id: store.items.length ? store.items[store.items.length - 1].id + 1 : 0,
        taskDescription: action.payload,
        subtask: [],
        timestamp: new Date(),
        isComplete: false
      };
      const updatedList = [...store.items, newTask];
      store.items = updatedList;
    },

    removeTask: (store, action) => {
      const currentItems = store.items;
      currentItems.splice(action.payload, 1);
      store.items = currentItems;
    },

    selectAll: (store) => {
      const selectAllItems = store.items.map((todo) => {
        return {
          ...todo,
          isComplete: true
        };
      });
      store.items = selectAllItems;
    }
  }
});
export default todos;
