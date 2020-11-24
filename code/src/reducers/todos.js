import { createSlice } from "@reduxjs/toolkit";

const categories = [
    {
      id: 1,
      name: "# Free time",
      subcategories: [
        {
          id: 1,
          name: "# Family",
        },
        {
          id: 2,
          name: "# Friends",
        },
        {
          id: 3,
          name: "# Travel",
        },
      ],
    },
    {
      id: 2,
      name: "# Work",
      subcategories: [
        {
          id: 1,
          name: "# Priorities",
        },
      ],
    },
    {
      id: 5,
      name: "# Shop",
      subcategories: [
        {
          id: 1,
          name: "# For the kids",
        },
        {
          id: 2,
          name: "# Groceries",
        },
      ],
    }
]

const initialState = {
    username: "name",
    items: [
      {
        id: 1,
        date: Date.now(),
        name: "first",
        text: "",
        category: "welcome",
        dueDate: "2020-12-24",
      },
      {
        id: 2,
        date: Date.now(),
        name: "second",
        text: "",
        category: "pro",
        dueDate: "2020-12-20",
      },
      {
        id: 3,
        date: Date.now(),
        name: "third",
        text: "",
        category: "organize",
        dueDate: "2020-12-01",
      },
    ],
    addItem: false,
    form: [{}],
    categories,
}

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Here I'm trying to figure out how to render "form state"
    // goToForm: (state) => {
    //     addItem === false
    // },

    removeOne: (store, action) => {
      store.items.filter((item) => item.id !== action.payload); 
    },
    // In Jennies video, this is attached to an AddItemForm -> submitbutton
    submitTodo: (store, action) => {
      const { category, categoryIndex } = action.payload;
      store.items.push({
        id: Date.now(),
        categories: todos.categories[categoryIndex],
      });
    }
  }
})