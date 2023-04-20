import { createSlice } from '@reduxjs/toolkit';

// here we are creating the initialState witch is an empty array.
// The array is filled with action.payloads when we post new tasks
const initialState = {
  items: []
}

export const Tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component
    addTask: (store, action) => { // the actual state att addTask and action in the button pressed.
    // Mutable
    //   store.items.push(action.payload);
    // Immutable
      store.items = [...store.items, action.payload];
      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd']
      // const z = [...x, 'd']  => ['a','b','c','d']
      // const superObject = {a: 'test', b:'other test'}
      // const supererObject = {...superObject, c: 'third test'}
    },
    deleteTask: (store, action) => {
      const updateditems = store.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...store, items: updateditems };
    },
    clearAll: () => {
      return initialState;
    },
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload.id) {
          item.isChecked = !item.isChecked
        }
      })
    }

  }
});