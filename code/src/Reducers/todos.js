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
    sortTodos: (store, action) => {
      const { sortBy, order } = action.payload;
      store.updatedTodos = store.items.map((item) => item);

      if (order) {
        if (sortBy === "isComplete") {
          store.updatedTodos.sort(
            (a, b) => Number(b[sortBy]) - Number(a[sortBy])
          );
        } else {
          store.updatedTodos.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
        }
      } else {
        if (sortBy === "isComplete") {
          store.updatedTodos.sort(
            (a, b) => Number(a[sortBy]) - Number(b[sortBy])
          );
        } else {
          store.updatedTodos.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
        }
      }

      store.items = store.updatedTodos;
    },
    filterTodos: (store, action) => {
      const { filterBy, value } = action.payload;
      store.updatedTodos = store.items.map((task) => {
        task[filterBy] === value ? (task.hidden = false) : (task.hidden = true);
        return task;
      });
      store.items = store.updatedTodos;
    },
    resetFilter: (store) => {
      store.updatedTodos = store.items.map((task) => {
        task.hidden = false;
        return task;
      });
      store.items = store.updatedTodos;
    },
    createNewTodo: (store, action) => {
      const { task, time, deadline } = action.payload;
      store.items.push({
        id: store.items.length + 1,
        description: task,
        isComplete: false,
        hidden: false,
        createdAt: time,
        deadline: deadline,
      });
    },
    removeTodo: (store, action) => {
      const { task } = action.payload;
      store.updatedTodos = store.items
        .filter((item) => item.id !== task)
        .map((item, i) => {
          item.id = i + 1;
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
      store.updatedTodos = store.items
        .filter((item) => !item.isComplete)
        .map((item, i) => {
          item.id = i + 1;
          return item;
        });
      store.items = store.updatedTodos;
    },
  },
});
