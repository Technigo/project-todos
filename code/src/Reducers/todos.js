import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   updatedTodos: []
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
      const { task } = action.payload;
      store.items.push({
        id: store.items.length + 1, 
        description: task, 
        isComplete: false }) 
    },
    removeTodo: (store, action) => {
        const { task } = action.payload;
        store.updatedTodos = store.items.filter(item => item.id !== task)
        store.items = store.updatedTodos;
    },
    clearAll: () => {
        return initialState;
    }
  },
});
