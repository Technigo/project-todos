import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "Todo list",
    items: [],
    categories: ['Personal', 'School', 'Work', 'Home', 'Other' ],
    selectedFilterStatus: "",
    selectedFilterCategory: "",
    homePage: true,
  }
};

export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    createTodo: (state) => {
      state.homePage = false;
    },

    addTodo: (state, action) => {
      const { todoItemInfo } = action.payload;
      state.list.items.push(todoItemInfo)
    },

    setComplete: (state, action) => {
      const foundItem = state.list.items.find(item => item.id === action.payload)
      if(foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.list.items = state.list.items.filter(
        item => item.id !== id
      )
    },

    setAllComplete: (state) => {
      state.list.items.map(item => item.complete = true)
    },

    setAllInComplete: (state) => {
      state.list.items.map(item => item.complete = false)
    },

    removeAllTodos: (state) => {
      state.list.items = []
    },

    filteredStatus: (state, action) => {
      state.list.selectedFilterStatus = action.payload
    },

    filteredCategory: (state, action) => {
      state.list.selectedFilterCategory = action.payload
    },
  }
});
