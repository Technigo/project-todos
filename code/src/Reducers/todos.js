import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  updatedTodos: [],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createNewTodo: (store, action) => {
        const { task, time, deadline, category } = action.payload;
        store.items.push({
          id: store.items.length + 1,
          description: task,
          isComplete: false,
          completedAt: "",
          hidden: false,
          createdAt: time,
          deadline: deadline,
          category: category
        });
      },
    toggleComplete: (store, action) => {
      const { id, time } = action.payload;

      store.updatedTodos = store.items.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
          item.completedAt = time;
          return item;
        } else {
          return item;
        }
      });
      store.items = store.updatedTodos;
    },
    sortTodos: (store, action) => {
      const { sortBy, order } = action.payload;
      store.updatedTodos = store.items.map((task) => {
        return task;
      });

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
          store.updatedTodos.sort((a, b) => (b[sortBy] > a[sortBy] ? 1 : -1));
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
