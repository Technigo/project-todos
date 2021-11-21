import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";


//Slice
const todos = createSlice({
  name: "todos",
  initialState: {
    items: [
      
    ],
  },

  reducers: {
    addTodo: (store, action) => {
      //data variable gets filled in with info sent by dispatch
      const task = action.payload;
      // newTodo object goes inside the items asray when the user adds thing to do in the input
      const newTodo = {
        id: uniqid(),
        task: task,
        isComplete: false,
        createdAt: moment().format("Do MMM YY")
      };
      // immutability approach; creating a new array with the existing array data comming from the addTodo component
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {

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

    deleteTodo: (store, action) => {
        const decreasedItems = store.items.filter(item => item.id !== action.payload);
        store.items = decreasedItems;
    },
  },
});

export default todos;
