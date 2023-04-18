import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

const todolist = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument
    // references the data that is passed down from a component
    addTask: (store, action) => {
      // Mutable:
      // store.items.push(action.payload)
      // Immutable:
      store.items = [...store.items, action.payload]
      // this assigns a whole new value to the pokemons array
      // and removes the nesting, so you don't have an array within another array
      // const x = ['a', 'b', 'c']
      // const y = [x, 'd'] => [['a', 'b', 'c'], 'd']
      // const z = [...x, 'd'] => ['a', 'b', 'c', 'd']
      // this avoids nesting problems with arrays
    }
  }
})

export default todolist;