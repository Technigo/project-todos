import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

//Slice
const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },

  reducers: {
    addTodo: (store, action) => {
      //data variable gets filled in with info sent by dispatch
      const data = action.payload;
      // newTodo object goes inside the items array when the user adds thing to do in the input
      const newTodo = {
        id: uniqid(),
        text: data,
        isComplete: false,
      };
      // immutability approach; creating a new array with the existing array data comming from the addTodo component
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      console.log(action);

      const updateItems = store.items.map((item) => {
        //action.payload is responsible for storing the data comming from the dispatch, that is why is posible to make the comparison
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          }
          return updatedTodo;
        } else {
            return item;

        }
      });

      store.items = updateItems;
    },
  },
});

export default todos;
