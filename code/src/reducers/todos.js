import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "Todo List",
    items: [
      { id: 1, text: "Hi and Welcome to this Todo list!😄", isComplete: false },
      { id: 2, text: "You can add your own todo⬆️", isComplete: false },
      { id: 3, text: "Check them if you are done✔️", isComplete: false },
      { id: 4, text: "See how many tasks are done🔢", isComplete: false },
      { id: 5, text: "Please delete these now!🤓", isComplete: false },
    ],
  },
};

export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (store, action) => {
      const itemInfo = action.payload;
      store.list.items.push(itemInfo);
    },
    toggleComplete: (store, action) => {
      const { itemIndex, isComplete } = action.payload;
      store.list.items[itemIndex].isComplete = isComplete;
    },
    removeTodo: (store, action) => {
      const { itemIndex } = action.payload;
      store.list.items = store.list.items.filter(
        (item, index) => index !== itemIndex
      )
    },
    clearAll: (state) => {
      state.list.items = [];
    },
  }
})