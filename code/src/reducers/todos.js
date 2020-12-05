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
      createdAt: 1606318113000,
    },
    {
      id: "2a",
      title: "Get it out of your chest...",
      content: "...make room for play",
      category: ["#Free time"],
      createdAt: 1604676513000,
    },
  ],
  addItem: false,
  categories,
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeItem: (store, action) => {
      const filteredList = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = filteredList;
    },
    addItem: (store, action) => {
      const newItem = action.payload;
      const newItemsList = [...store.items, newItem];
      store.items = newItemsList;
    },
    updateItem: (store, action) => {
      const {
        id,
        title,
        content,
        category,
        createdAt,
      } = action.payload;
      const currentTodo = store.items.find((item) => item.id === id);
      if (currentTodo) {
        currentTodo.title = title;
        currentTodo.content = content;
        currentTodo.category = category;
        currentTodo.createdAt = createdAt;
      }
    },
  },
});
