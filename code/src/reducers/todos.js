import { createSlice } from "@reduxjs/toolkit";

const categories = [
  {
    id: 1,
    name: "#Free time",
    subcategories: [
      {
        name: "#Family",
      },
      {
        name: "#Friends",
      },
      {
        name: "#Travel",
      },
    ],
  },
  {
    id: 2,
    name: "#Work",
    subcategories: [
      {
        name: "#Priorities",
      },
    ],
  },
  {
    id: 5,
    name: "#Shop",
    subcategories: [
      {
        name: "#For the kids",
      },
      {
        name: "#Groceries",
      },
    ],
  },
];

const initialState = {
  username: "name",
  items: [
    {
      id: "1a",
      title: "Welcome",
      content: "Let's get on with it, right?",
      category: ["#Work"],
      isDone: false,
      createdAt: 1606318113000,
    },
    {
      id: "2a",
      title: "Get it out of your chest...",
      content: "...make room for play",
      category: ["#Free time"],
      isDone: false,
      createdAt: 1604676513000,
    },
  ],
  categories,
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeItem: (store, action) => {
      const filteredList = store.items.filter(
        item => item.id !== action.payload
      );
      store.items = filteredList;
    },
    addItem: (store, action) => {
      const newItem = action.payload;
      const newItemsList = [...store.items, newItem];
      store.items = newItemsList;
    },
    toggleDoneItem: (store, action) => {
      const toggleTodo = store.items.find(item => item.id === action.payload);
      if (toggleTodo) {
        toggleTodo.isDone = !toggleTodo.isDone;
      }
    },
    updateItem: (store, action) => {
      const editedTodo = action.payload;
      const currentTodo = store.items.find(item => item.id === editedTodo.id);
      if (currentTodo) {
          currentTodo.title = editedTodo.title;
          currentTodo.content = editedTodo.content;
          currentTodo.category = editedTodo.category;
          currentTodo.createdAt = editedTodo.createdAt;
      }
    },
  }
});
