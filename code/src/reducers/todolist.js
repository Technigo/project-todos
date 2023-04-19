import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}
// the initial state of the todo-list is an empty array because
// there are no tasks in the list when the user enters the app.

const todolist = createSlice({
  name: 'tasks',
  isChecked: false,
  initialState,
  reducers: {
    addTask: (store, action) => {
    // first argument (store) references the state of the store, second
    // argument (action) references the data that is passed down from a component.
    // in this case that data would be the task the user writes in the text field.

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