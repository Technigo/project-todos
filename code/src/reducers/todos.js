import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },

  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload.newTodo,
        date: action.payload,
        added: action.payload.dateAdded,
        isComplete: false,
      };

      store.items = [...store.items, newTodo];
    },

    toggleTodo: (store, action) => {
      const updatedItems = store.items
        .map((item) => {
          if (item.id === action.payload) {
            const updatedTodo = {
              ...item,
              isComplete: !item.isComplete,
            };

            return updatedTodo;
          } else {
            return item;
          }
        })
        .sort((a, b) => a.isComplete - b.isComplete);

      store.items = updatedItems;
    },

    updateTodo: (store, action) => {
      console.log(action);

      // store.text = action.payload.text;

      const editedTodo = store.items.map((item) => {
        if (item.text === action.payload) {
          const editedText = {
            ...item,
            text: action.payload,
          };
          return editedText;
        } else {
          return item;
        }
      });

      store.items = editedTodo;
    },

    detleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },

    toggleAllTodo: (store) => {
      const allDone = store.items.map((item) => {
        if (item.isComplete === false) {
          const updatedTodo = {
            ...item,
            isComplete: true,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });

      store.items = allDone;
    },

    toggleAllTodoBack: (store) => {
      const allUnDone = store.items.map((item) => {
        const updatedTodo = {
          ...item,
          isComplete: false,
        };
        return updatedTodo;
      });

      store.items = allUnDone;
    },

    removeAll: (store) => {
      store.items = [];
    },
  },
});

export default todos;
