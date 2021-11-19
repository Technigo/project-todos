import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

// same name as the filename is standard. Name property, initial and reducers. Three properties always included.
const todos = createSlice({
  name: "todos",
  // initial is always an object
  initialState: {
    items: [],
    filterItems: [],
    filter: "",
    options: [
      { value: "home", label: "Home" },
      { value: "school", label: "School" },
      { value: "dog", label: "Dog" },
      { value: "travel", label: "Travel" },
      { value: "shopping", label: "Shopping" },
      { value: "checked", label: "Checked" },
      { value: "unchecked", label: "unchecked" },
    ],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload.newTodo,
        date: action.payload.newDate,
        tags: action.payload.newTags,
        added: action.payload.dateAdded,
        isComplete: false,
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
        } else return item;
      });

      store.filterItems = updatedItems;
      store.items = updatedItems;
    },
    changeFilter: (store, action) => {
      store.filter = action.payload;
    },
    updateFilterList: (store) => {
      if (store.filter === "checked") {
        store.filterItems = store.items.filter(
          (item) => item.isComplete === true
        );
      } else if (store.filter === "unchecked") {
        store.filterItems = store.items.filter(
          (item) => item.isComplete === false
        );
      } else if (store.filter === "showall") {
        store.filterItems = store.items;
      }
    },
    checkTodos: (store) => {
      const updatedItems = store.items.map((item) => {
        const updatedTodo = {
          ...item,
          isComplete: true,
        };
        return updatedTodo;
      });

      store.items = updatedItems;
    },
    uncheckTodos: (store) => {
      const updatedItems = store.items.map((item) => {
        const updatedTodo = {
          ...item,
          isComplete: false,
        };
        return updatedTodo;
      });

      store.items = updatedItems;
    },
    deleteTodo: (store, action) => {
      const decreasedTodo = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedTodo;
    },
  },
});

export default todos;
