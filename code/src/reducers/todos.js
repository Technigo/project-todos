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
        name: "# For the kids",
      },
      {
        name: "# Groceries",
      },
    ],
  },
];

const initialState = {
  username: "name",
  items: [
    {
      id: 1,
      title: "first",
      content: "",
      isComplete: false,
      category: "Work",
      dueDate: "2020-12-24",
      createdAt: 1606318113000,
    },
    {
      id: 2,
      title: "second",
      content: "",
      isComplete: false,
      category: "Free time",
      dueDate: "2020-12-20",
      createdAt: 1604676513000,
    },
    {
      id: 3,
      title: "third",
      content: "Bake cookies with kids",
      isComplete: false,
      category: "Shop",
      dueDate: "2020-12-01",
      createdAt: 1606318113000,
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
        dueDate,
        isComplete,
      } = action.payload;
      const currentTodo = store.items.find((item) => item.id == parseInt(id));

      if (currentTodo) {
        currentTodo.title = title;
        currentTodo.content = content;
        currentTodo.category = category;
        currentTodo.createdAt = createdAt;
        console.log(currentTodo.title + title);
      }
    },
  },
});
