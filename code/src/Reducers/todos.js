import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  updatedTodos: [],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleComplete: (store, action) => {
      const { id } = action.payload;

      store.updatedTodos = store.items.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
          return item;
        } else {
          return item;
        }
      });
      store.items = store.updatedTodos;
    },
    createNewTodo: (store, action) => {
      const { task, time, deadline } = action.payload; 
      store.items.push({
        id: store.items.length + 1,
        description: task,
        isComplete: false,
        createdAt: time,
        deadline: deadline
      });
    },
    removeTodo: (store, action) => {
      const { task } = action.payload;
      let i = 1;
      store.updatedTodos = store.items.filter((item) => item.id !== task);
      store.updatedTodos = store.updatedTodos.map((item) => {
        item.id = i++;
        return item;
      });
      store.items = store.updatedTodos;
    },
    completeAll: (store) => {
      store.updatedTodos = store.items.map((item) => {
        item.isComplete = true;
        return item;
      });
      store.items = store.updatedTodos;
    },
    clearAllCompleted: (store) => {
      let i = 1;
      store.updatedTodos = store.items.filter((item) => !item.isComplete);
      store.updatedTodos = store.updatedTodos.map((item) => {
        item.id = i++;
        return item;
      });
      store.items = store.updatedTodos;
    },
  },
});
