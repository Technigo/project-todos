import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
  name: 'todos',
  initialState: {
    // initialState is always an object
    items: [],
  },
  // also an object, one property is a method to update the store
  reducers: {
    addTodo: (store, action) => {
      // a property that is a function, always looks like this. Reducers always have TWO argument, store and action
      console.log('STORE:', store);
      console.log('ACTION', action); // action is ALWAYS type and payload. the action.payload is the data we want to send, action.type is added behind the scenes by redux itself. We don't have to worry about action.type at all. Focus on action.payload. connected to AddTodo.js useDispatch()

      // two ways to update the store mutable way/immutable way

      const newTodo = {
        id: uniqid(), // be very precise when making ids. code relies on uniqueness of keys. the uniqid() creates an automatic uniq id. package to install "npm install uniqid"
        text: action.payload,
        isComplete: false,
      };

      // mutability approach
      //store.items.push(data);
      //redux would not know that we updated the store this way. this would work in react, but NOT in redux because of immer package that prevents mutability approaches. immer would fix this for you.

      //react only recognizes if the inital value is changed, not if anything is added or removed from the array

      // immutable approach that
      store.items = [...store.items, newTodo]; // this spreads whatever was before (...store) and adds the new data. makes a totally new array PLUS the values of the old array PLUS the values of the new array
    },

    deleteAll: (store, action) => {
      store.items = [];
    },
    toggleTodo: (store, action) => {
      // the action.payload this time is going to be the ID

      // mutability approach
      //   store.items.forEach(item => {
      //     if (item.id === action.payload) {
      //       item.isComplete = !item.isComplete; // this makes the isComplete equal to true
      //     }
      //   });

      // immutable approach
      const updatedItems = store.items.map(item => {
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
    deleteTodo: (store, action) => {
      // mutability approach
      // store.items.splice(index, numberOfElementsToDeleteFromThatIndex 1)
      // }

      // immutable approach
      const decreasedItems = store.items.filter(
        item => item.id !== action.payload
      );
      store.items = decreasedItems;
    },
    completeAll: (store, action) => {
      const completedItems = store.items.map(todo => {
        if (!todo.isComplete) {
          return {
            ...todo,
            isComplete: true,
          };
        } else {
          return todo;
        }
      });
      store.items = completedItems;
    },

    uncompleteAll: (store, action) => {
      const uncompletedItems = store.items.map(todo => {
        if (todo.isComplete) {
          return {
            ...todo,
            isComplete: false,
          };
        } else {
          return todo;
        }
      });
      store.items = uncompletedItems;
    },
  },
});
export default todos;
