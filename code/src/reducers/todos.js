import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      /*       {
        id: Date.now(),
        name: 'dishes',
        isDone: true,
        created: 'some date'
      },
      {
        id: Math.random(),
        name: 'garbaige',
        isDone: false,
        created: 'some date'
      } */
    ]
  },
  reducers: {
    toggleTodoItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    deleteTodoItem: (store, action) => {
      console.log(store);
      console.log(action);
      // mutability
      store.items.splice(action.payload, 1); // deleting one item
      // immutability
      /* const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      });
      store.items = updatedItems */
    },
    addItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.push(action.payload)
      /* store.items = [...store.items, action.payload] */
    },
    setAllItems: (store, action) => {
      store.items = action.payload;
    }
  }
});

export default todos;