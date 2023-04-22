import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component
    addTodo: (store, action) => {
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
    toggleTodo: (store, action) => {
      const todoId = action.payload;
      const todoToToggle = store.items.find((todo) => todo.id === todoId);
      if (todoToToggle) {
        todoToToggle.checked = !todoToToggle.checked;
      }
    },
    deleteSingleTodo: (store, action) => {
      const todoId = action.payload;
      // splice to remove a single element if I know the index
      const storeCopy = store.items;
      const condition = (element) => element.id === todoId;
      const todoIndex = storeCopy.findIndex(condition);
      storeCopy.splice(todoIndex, 1);
      store.items = storeCopy;
    },
    deleteAllTodos: (store) => {
      store.items = []
    }
  }
});

export default todos;