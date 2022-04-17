import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";

const todos = createSlice({
  // every slice needs 3 properties: name, initialState and reducer
  name: "todos",
  // initalstate is always an object
  initialState: {
    items: [],
  },
  // Each reducer is a property which is a function
  // an object where each property is one method to update the store
  reducers: {
    // a reducer always have these two arguments, current value of store and an action
    // This reducer is responsible for creating a Todo
    addTodo: (store, action) => {
      const newTodo = {
        //id: use uniqid() as it needs to be absolutely unique
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        postedTime: moment().format("ddd D MMM"),
      };
      // immutable approach; new array with the values from previous array plus added element
      store.items = [...store.items, newTodo];
    },
    // this reducer is responsible for triggering the isComplete property from true to false or false to true
    toggleTodo: (store, action) => {
      //immuteable approach, creating a new array with all updated todos
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });
      store.items = updatedItems;
    },
    // This reducer is responsible for deleting a Todo
    deleteTodo: (store, action) => {
      // immuteable approach, passing the id in action.payload, using filter, new array and pull most items
      //leaves behind the deleted element
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },
  },
});

export default todos;
