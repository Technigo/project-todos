import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '1',
      description: 'Do laundry',
      completed: false
    },
    {
      id: '2',
      description: 'Buy milk',
      completed: false
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component
    addTask: (store, action) => {
    // Mutable, avoid because it's unpredictable
    //   store.items.push(action.payload);
    // Immutable
      store.items = [...store.items, action.payload];
      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd']
      // const z = [...x, 'd']  => ['a','b','c','d']
      // const superObject = {a: 'test', b:'other test'}
      // const supererObject = {...superObject, c: 'third test'}
    }
  }
});

export default tasks;